import {renderLibrary} from "./render.js";
import './library-init.js';
import './show-menu.js';
import './add-book.js';
import './find-book.js';
import './remove-book.js';


let library = JSON.parse(localStorage.getItem('library')) || [];

renderLibrary(library);
