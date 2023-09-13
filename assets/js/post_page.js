/* imports */
import { db } from "./data.js";

/* date */
let date_now = new Date().toLocaleDateString();
let time_now = new Date().toLocaleTimeString();

/* selection of elements */
const header = document.querySelector('header');
const data_title_post = document.querySelector('[data_title_post]');
const data_header_img = document.querySelector('[data_header_img]');
const data_date = document.querySelectorAll('[data_date]');
const data_views = document.querySelector('[data_views]');
const data_text = document.querySelector('[data_text]');

/* events */
data_date.forEach((date) => {
    date.innerHTML = `${date_now} ${time_now}`;
});

for (let data of db) {
    if (parseInt(localStorage.getItem('indice')) === data.indice_1) {
        data_title_post.innerHTML = data.title_1;
        data_header_img.setAttribute(data.attribute_1, data.address_1);
        data_views.innerHTML = data.views_1;
        data_text.innerHTML = data.text_1;
    }
    else if (parseInt(localStorage.getItem('indice')) === data.indice_2) {
        data_title_post.innerHTML = data.title_2;
        data_header_img.setAttribute(data.attribute_2, data.address_2);
        data_views.innerHTML = data.views_2;
        data_text.innerHTML = data.text_2;
    }
    else if (parseInt(localStorage.getItem('indice')) === data.indice_3) {
        data_title_post.innerHTML = data.title_3;
        data_header_img.setAttribute(data.attribute_3, data.address_3);
        data_views.innerHTML = data.views_3;
        data_text.innerHTML = data.text_3;
    }
    else if (parseInt(localStorage.getItem('indice')) === data.indice_4) {
        data_title_post.innerHTML = data.title_4;
        data_header_img.setAttribute(data.attribute_4, data.address_4);
        data_views.innerHTML = data.views_4;
        data_text.innerHTML = data.text_4;
    }
    else if (parseInt(localStorage.getItem('indice')) === data.indice_5) {
        data_title_post.innerHTML = data.title_5;
        data_header_img.setAttribute(data.attribute_5, data.address_5);
        data_views.innerHTML = data.views_5;
        data_text.innerHTML = data.text_5;
    }
    else if (parseInt(localStorage.getItem('indice')) === data.indice_6) {
        data_title_post.innerHTML = data.title_6;
        data_header_img.setAttribute(data.attribute_6, data.address_6);
        data_views.innerHTML = data.views_6;
        data_text.innerHTML = data.text_6;
    }
    else if (parseInt(localStorage.getItem('indice')) === data.indice_7) {
        data_title_post.innerHTML = data.title_7;
        data_header_img.setAttribute(data.attribute_7, data.address_7);
        data_views.innerHTML = data.views_7;
        data_text.innerHTML = data.text_7;
    }
    else if (parseInt(localStorage.getItem('indice')) === data.indice_8) {
        data_title_post.innerHTML = data.title_8;
        data_header_img.setAttribute(data.attribute_8, data.address_8);
        data_views.innerHTML = data.views_8;
        data_text.innerHTML = data.text_8;
    }
    else if (parseInt(localStorage.getItem('indice')) === data.indice_9) {
        data_title_post.innerHTML = data.title_9;
        data_header_img.setAttribute(data.attribute_9, data.address_9);
        data_views.innerHTML = data.views_9;
        data_text.innerHTML = data.text_9;
    };
};

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});