import { consultaMemes } from "./apis.js";


eventListeners();
function eventListeners() {

    document.addEventListener('DOMContentLoaded', consultaMemes)

}
