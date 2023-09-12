import { db } from "./data.js";

let date_now = new Date().toLocaleDateString();
let time_now = new Date().toLocaleTimeString();

const header = document.querySelector('header');
const data_title_post = document.querySelector('[data_title_post]');
const data_header_img = document.querySelector('[data_header_img]');
const data_date = document.querySelectorAll('[data_date]');
const data_views = document.querySelector('[data_views]');
const data_text = document.querySelector('[data_text]');

data_date.forEach((date) => {
    date.innerHTML = `${date_now} ${time_now}`;
});

for (let dbs of db) {
    if (parseInt(localStorage.getItem('indice')) === dbs.indice_1) {
        data_title_post.innerHTML = dbs.title_1;
        data_header_img.setAttribute(dbs.attribute_1, dbs.address_1);
        data_views.innerHTML = dbs.views_1;
        data_text.innerHTML = dbs.text_1;
    }
    else if (parseInt(localStorage.getItem('indice')) === dbs.indice_2) {
        data_title_post.innerHTML = dbs.title_2;
        data_header_img.setAttribute(dbs.attribute_2, dbs.address_2);
        data_views.innerHTML = dbs.views_2;
        data_text.innerHTML = dbs.text_2;
    }
    else if (parseInt(localStorage.getItem('indice')) === dbs.indice_3) {
        data_title_post.innerHTML = dbs.title_3;
        data_header_img.setAttribute(dbs.attribute_3, dbs.address_3);
        data_views.innerHTML = dbs.views_3;
        data_text.innerHTML = dbs.text_3;
    };
};

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});