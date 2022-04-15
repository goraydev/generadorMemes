import { consultaMemes } from "./apis.js";
export const year = document.querySelector('#year');


eventListeners();
function eventListeners() {

    document.addEventListener('DOMContentLoaded', consultaMemes)

}
