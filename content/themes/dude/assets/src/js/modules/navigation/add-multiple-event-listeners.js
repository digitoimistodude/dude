function addMultipleEventListeners(element, events, handler) {
  events.forEach(event => element.addEventListener(event, handler));
}

export default addMultipleEventListeners;