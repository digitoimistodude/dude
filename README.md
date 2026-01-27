# Dude.fi official website

![based_on_air_version 8.3.7_](https://img.shields.io/badge/based_on_air_version-8.3.7_-brightgreen.svg?style=flat-square) ![Tested_up_to WordPress_6.7](https://img.shields.io/badge/Tested_up_to-WordPress_6.7-blue.svg?style=flat-square) ![Compatible_with PHP_8.3](https://img.shields.io/badge/Compatible_with-PHP_8.3-green.svg?style=flat-square)

You are looking at the official website code repository at <a href="https://www.dude.fi">dude.fi</a>.

## Stack

### Project is based on

- [digitoimistodude/dudestack](https://github.com/digitoimistodude/dudestack)
- [digitoimistodude/air-light](https://github.com/digitoimistodude/air-light)
- [digitoimistodude/devpackages](https://github.com/digitoimistodude/devpackages)

### Prequisities

- [digitoimistodude/macos-lemp-setup](https://github.com/digitoimistodude/macos-lemp-setup)

## Theme screenshot

![Screenshot](/content/themes/dude/screenshot.png?raw=true 'Screenshot')

## Development

According to our handbook, you should have run `createproject --existing`, inital setup by now.

If you need help, ask your superviser or go back to [dudestack-instructions](https://github.com/digitoimistodude/dudestack-instructions) / [Dude handbook](https://handbook.dude.fi/wordpress-kehitys/projektin-aloitus) and read what you have do.

### Getting started

Clone this repo and set it up manually or run:

```bash
createproject --existing
```

Then:

```bash
cd /var/www/dude
composer install
```

### Theme development

Install theme dependencies and run dev server:

```bash
cd /var/www/dude/content/themes/dude
nvm use
npm install
npm run dev
```

You can see the rest of the tasks in package.json.
