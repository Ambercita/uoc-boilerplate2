/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

import * as bootstrap from "bootstrap";

const url = document.location.href;

let key = "index";
if (url.includes("participants")) key = "participants";
else if (url.includes("news")) key = "news";
else if (url.includes("contact")) key = "contact";

document.querySelector(`#nav-link-${key}`).classList.add("active");
