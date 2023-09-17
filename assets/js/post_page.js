/* imports */
import { db } from "./db/data.js";
import { get_indice } from "./local_storage/get_indice_posts.js";

/* selection of elements */
const data_login_button = document.querySelector('[data_login_button]');
const data_title_post = document.querySelector('[data_title_post]');
const data_header_img = document.querySelector('[data_header_img]');
const back_to_top = document.querySelector('#back_to_top');
const data_date = document.querySelectorAll('[data_date]');
const data_views = document.querySelector('[data_views]');
const data_text = document.querySelector('[data_text]');
const header = document.querySelector('header');

/* localStorage */
const indice = get_indice;

/* date */
let date_now = new Date().toLocaleDateString();
let time_now = new Date().toLocaleTimeString();

/* /* login - display alert */
data_login_button.addEventListener('click', () => {
    alert('Funcionalidade em construção.');
});

/* individual card display */
for (let data of db) {
    switch (indice) {
        case data.indice_1:
            data_title_post.innerHTML = data.title_1;
            data_header_img.setAttribute(data.attribute_1, data.address_1);
            data_header_img.setAttribute('alt', data.alt_1);
            data_views.innerHTML = data.views_1;
            data_text.innerHTML = data.text_1;
            break;

        case data.indice_2:
            data_title_post.innerHTML = data.title_2;
            data_header_img.setAttribute(data.attribute_2, data.address_2);
            data_header_img.setAttribute('alt', data.alt_2);
            data_views.innerHTML = data.views_2;
            data_text.innerHTML = data.text_2;
            break;

        case data.indice_3:
            data_title_post.innerHTML = data.title_3;
            data_header_img.setAttribute(data.attribute_3, data.address_3);
            data_header_img.setAttribute('alt', data.alt_3);
            data_views.innerHTML = data.views_3;
            data_text.innerHTML = data.text_3;
            break;

        case data.indice_4:
            data_title_post.innerHTML = data.title_4;
            data_header_img.setAttribute(data.attribute_4, data.address_4);
            data_header_img.setAttribute('alt', data.alt_4);
            data_views.innerHTML = data.views_4;
            data_text.innerHTML = data.text_4;
            break;

        case data.indice_5:
            data_title_post.innerHTML = data.title_5;
            data_header_img.setAttribute(data.attribute_5, data.address_5);
            data_header_img.setAttribute('alt', data.alt_5);
            data_views.innerHTML = data.views_5;
            data_text.innerHTML = data.text_5;
            break;

        case data.indice_6:
            data_title_post.innerHTML = data.title_6;
            data_header_img.setAttribute(data.attribute_6, data.address_6);
            data_header_img.setAttribute('alt', data.alt_6);
            data_views.innerHTML = data.views_6;
            data_text.innerHTML = data.text_6;
            break;

        case data.indice_7:
            data_title_post.innerHTML = data.title_7;
            data_header_img.setAttribute(data.attribute_7, data.address_7);
            data_header_img.setAttribute('alt', data.alt_7);
            data_views.innerHTML = data.views_7;
            data_text.innerHTML = data.text_7;
            break;

        case data.indice_8:
            data_title_post.innerHTML = data.title_8;
            data_header_img.setAttribute(data.attribute_8, data.address_8);
            data_header_img.setAttribute('alt', data.alt_8);
            data_views.innerHTML = data.views_8;
            data_text.innerHTML = data.text_8;
            break;

        case data.indice_9:
            data_title_post.innerHTML = data.title_9;
            data_header_img.setAttribute(data.attribute_9, data.address_9);
            data_header_img.setAttribute('alt', data.alt_9);
            data_views.innerHTML = data.views_9;
            data_text.innerHTML = data.text_9;
            break;

        default:
            break;
    };
};

/* generates current date and time */
data_date.forEach((date) => {
    date.innerHTML = `${date_now} ${time_now}`;
});

/* header - scroll */
window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});

/* back to top */
window.addEventListener('scroll', function () {
    const scroll_top = document.documentElement.scrollTop;

    if (scroll_top > 100) {
        back_to_top.style.display = 'block';
    }
    else {
        back_to_top.style.display = 'none';
    };
});

/* back to top */
back_to_top.addEventListener('click', function (event) {
    event.preventDefault();

    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});