/**
 * @Author: Roni Laukkarinen
 * @Date:   2022-09-13 13:10:11
 * @Last Modified by:   Timi Wahalahti
 * @Last Modified time: 2023-05-24 16:21:02
 */
/* eslint-disable-next-line */
const api = axios.create({
  baseURL: `${window.dudeAmaApi.URL}`,
});

// Erase previous form submit to prevent duplicate submits on refresh
if (window.history.replaceState) {
  window.history.replaceState(null, null, window.location.href);
}

const preLoaded = document.querySelectorAll('.pre-loaded .ama-item');
const stopTheMadness =
  typeof window.stopTheMadness !== 'undefined' ? window.stopTheMadness : false;
const lastItem = preLoaded.length
  ? preLoaded[0].querySelector('.inner')
  : false;
const timeStamp = lastItem ? lastItem.dataset.timestamp : false;
const drafts = typeof window.amaDrafts !== 'undefined' ? window.amaDrafts : 0;

const Ama = {
  data() {
    return {
      posts: [],
      drafts,
      timeStamp,
      loadingPosts: false,
      loadingDrafts: false,
      sendingQuestion: false,
      loadingLikes: false,
      updateRate: 20000,
      postIntervalRunner: null,
      question: '',
      questionSent: false,
      error: false,
      stopTheMadness,
    };
  },
  mounted() {
    this.startAutoRefresh(this.updateRate);
    if (!stopTheMadness) {
      setInterval(() => {
        this.getDrafts();
      }, 5000);
    }
  },
  methods: {
    getPosts(perPage) {
      // Throttle requests
      if (this.loadingPosts) {
        return;
      }
      this.loadingPosts = true;

      //const queryString = this.timeStamp ? `?after=${this.timeStamp}&per_page=${perPage}&order=asc` : '';
      const queryString = this.timeStamp
        ? `?after=${this.timeStamp}&per_page=${perPage}&order=asc`
        : `?per_page=${perPage}&order=asc&after=2023-01-01T00:00:00`;

      // Get questions
      api
        .get(`/wp-json/wp/v2/ama/${queryString}`)
        .then((response) => {
          if (response.data.length) {
            // Extract data and reverse;
            const newPosts = [...response.data];
            this.timeStamp = newPosts[newPosts.length - 1].date;
            newPosts.forEach((data) => {
              // Add to start of array
              // eslint-disable-next-line no-param-reassign
              data.state = 'loaded';

              setTimeout(
                (id) => {
                  const currentPost = this.posts.find((post) => post.id === id);
                  currentPost.state = 'show';
                },
                2000,
                data.id
              );

              this.posts.unshift(data);
            });
          }
          this.loadingPosts = false;
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.log(error);
          this.loadingPosts = false;
        });
    },
    getDrafts() {
      if (this.loadingDrafts) {
        return;
      }
      this.loadingDrafts = true;
      api
        .get('/wp-json/ama/v1/drafts')
        .then((response) => {
          this.drafts = parseInt(response.data, 10);
          this.loadingDrafts = false;
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.log(error);
          this.loadingDrafts = false;
        });
    },
    startAutoRefresh(rate) {
      if (stopTheMadness) {
        return;
      }
      const parsedRate = parseInt(rate, 10);
      this.postIntervalRunner = setInterval(() => {
        this.getPosts(1);
      }, parsedRate);
    },
    stopAutoRefresh() {
      clearInterval(this.postIntervalRunner);
    },
    changeUpdateRate(rate) {
      const parsedRate = parseInt(rate, 10);
      this.stopAutoRefresh();
      if (parsedRate === 0) {
        return;
      }
      this.updateRate = parsedRate;
      this.startAutoRefresh(parsedRate);
    },
    submitQuestion(event) {
      event.preventDefault();
      if (this.sendingQuestion) {
        return;
      }
      this.sendingQuestion = true;
      const formData = {
        question: this.question,
      };
      api
        .post('wp-json/dude-ama/v1/create-question', formData)
        .then((response) => {
          this.error = false;
          this.questionSent = true;
          this.sendingQuestion = false;
          this.getDrafts();
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.log(error);
          this.error = true;
          this.questionSent = true;
          this.sendingQuestion = false;
        });
    },
    resetForm() {
      this.question = '';
      this.questionSent = false;
    },
    getLikes() {
      if (this.loadingLikes) {
        return;
      }
      this.loadingLikes = true;
      api
        .get('/wp-json/ama/v1/likes')
        .then((response) => {
          if (typeof response.data === 'object') {
            // eslint-disable-next-line no-plusplus
            for (let id = 0; id < response.data.length; id++) {
              const likeAmount = parseInt(response.data[id], 10);
              if (this.posts[id]) {
                this.posts[id].likes = likeAmount;
              }
            }
          }
          this.loadingLikes = false;
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.log(error);
          this.loadingLikes = false;
        });
    },
  },
};

// eslint-disable-next-line no-undef
const dudeAma = Vue.createApp(Ama);

dudeAma.component('likes', {
  props: ['count', 'id'],
  data() {
    const currentCount = this.count;
    const disableLike = window.localStorage.getItem(
      `dude-ama-liked-${this.id}`
    );
    return {
      currentCount,
      disableLike,
    };
  },
  template: `
    <div class="likes">
      <button type="button" class="button" v-on:click="submitLike()" :disabled="disableLike">
      <svg id="heart-svg" viewBox="467 392 58 57" xmlns="http://www.w3.org/2000/svg"><g id="Group" fill="none" fill-rule="evenodd" transform="translate(467 392)"><path d="M29.144 20.773c-.063-.13-4.227-8.67-11.44-2.59C7.63 28.795 28.94 43.256 29.143 43.394c.204-.138 21.513-14.6 11.44-25.213-7.214-6.08-11.377 2.46-11.44 2.59z" id="heart" fill="#AAB8C2"/><circle id="main-circ" fill="#E2264D" opacity="0" cx="29.5" cy="29.5" r="1.5"/><g id="grp7" opacity="0" transform="translate(7 6)"><circle id="oval1" fill="#9CD8C3" cx="2" cy="6" r="2"/><circle id="oval2" fill="#8CE8C3" cx="5" cy="2" r="2"/></g><g id="grp6" opacity="0" transform="translate(0 28)"><circle id="oval1" fill="#CC8EF5" cx="2" cy="7" r="2"/><circle id="oval2" fill="#91D2FA" cx="3" cy="2" r="2"/></g><g id="grp3" opacity="0" transform="translate(52 28)"><circle id="oval2" fill="#9CD8C3" cx="2" cy="7" r="2"/><circle id="oval1" fill="#8CE8C3" cx="4" cy="2" r="2"/></g><g id="grp2" opacity="0" transform="translate(44 6)"><circle id="oval2" fill="#CC8EF5" cx="5" cy="6" r="2"/><circle id="oval1" fill="#CC8EF5" cx="2" cy="2" r="2"/></g><g id="grp5" opacity="0" transform="translate(14 50)"><circle id="oval1" fill="#91D2FA" cx="6" cy="5" r="2"/><circle id="oval2" fill="#91D2FA" cx="2" cy="2" r="2"/></g><g id="grp4" opacity="0" transform="translate(35 50)"><circle id="oval1" fill="#F48EA7" cx="6" cy="5" r="2"/><circle id="oval2" fill="#F48EA7" cx="2" cy="2" r="2"/></g><g id="grp1" opacity="0" transform="translate(24)"><circle id="oval1" fill="#9FC7FA" cx="2.5" cy="3" r="2"/><circle id="oval2" fill="#9FC7FA" cx="7.5" cy="2" r="2"/></g></g></svg><span class="label">Tykätty</span>
      </button>
      <span v-if="currentCount">{{currentCount}}</span> <span class="countlabel">kertaa</span>
    </div>`,
  methods: {
    submitLike() {
      if (this.disableLike) {
        return;
      }
      this.disableLike = true;
      const formData = { id: this.id };
      api
        .post('wp-json/dude-ama/v1/add-like', formData)
        .then(() => {
          this.currentCount += 1;
          window.localStorage.setItem(`dude-ama-liked-${this.id}`, true);
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.log(error);
          this.disableLike = false;
        });
    },
  },
});

dudeAma.mount('#dude-ama');
