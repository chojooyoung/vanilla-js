import * as constants from './constants.js'
import App from './App.js'
const $body = document.querySelector('body');
console.log(constants);
$body.innerHTML=$body.innerHTML+JSON.stringify(constants, null,2);

new App()