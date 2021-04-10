import { sayHello } from './say-hello.js';

// eslint-disable-next-line no-undef
const body = document.getElementsByTagName('body')[0];
body.innerHTML = sayHello('Browser!');
