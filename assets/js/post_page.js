/* imports */
import { db } from "./db/data.js";
import { get_indice } from "./localStorage/get_indice_posts.js";

/* initialization */
function startApp() {
    /* localStorage */
    const indice = get_indice;

    /* selection of elements */
    const elements_html = {
        post: {
            data_title_post: document.querySelector('[data_title_post]'),
            data_header_img: document.querySelector('[data_header_img]'),
            data_date: document.querySelectorAll('[data_date]'),
            data_views: document.querySelector('[data_views]'),
            data_text: document.querySelector('[data_text]'),
        },
        others: {
            data_login_button: document.querySelector('[data_login_button]'),
            back_to_top: document.querySelector('[data_back_to_top]'),
            header: document.querySelector('header'),
        },
    };

    /* date */
    const date_time_now = {
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
    };

    /* individual card display */
    function renderPost() {
        for (let data of db) {
            switch (indice) {
                case data.indice_1:
                    elements_html.post.data_title_post.innerHTML = data.title_1;
                    elements_html.post.data_header_img.setAttribute(data.attribute_1, data.address_1);
                    elements_html.post.data_header_img.setAttribute('alt', data.alt_1);
                    elements_html.post.data_views.innerHTML = data.views_1;
                    elements_html.post.data_text.innerHTML = data.text_1;
                    break;

                case data.indice_2:
                    elements_html.post.data_title_post.innerHTML = data.title_2;
                    elements_html.post.data_header_img.setAttribute(data.attribute_2, data.address_2);
                    elements_html.post.data_header_img.setAttribute('alt', data.alt_2);
                    elements_html.post.data_views.innerHTML = data.views_2;
                    elements_html.post.data_text.innerHTML = data.text_2;
                    break;

                case data.indice_3:
                    elements_html.post.data_title_post.innerHTML = data.title_3;
                    elements_html.post.data_header_img.setAttribute(data.attribute_3, data.address_3);
                    elements_html.post.data_header_img.setAttribute('alt', data.alt_3);
                    elements_html.post.data_views.innerHTML = data.views_3;
                    elements_html.post.data_text.innerHTML = data.text_3;
                    break;

                case data.indice_4:
                    elements_html.post.data_title_post.innerHTML = data.title_4;
                    elements_html.post.data_header_img.setAttribute(data.attribute_4, data.address_4);
                    elements_html.post.data_header_img.setAttribute('alt', data.alt_4);
                    elements_html.post.data_views.innerHTML = data.views_4;
                    elements_html.post.data_text.innerHTML = data.text_4;
                    break;

                case data.indice_5:
                    elements_html.post.data_title_post.innerHTML = data.title_5;
                    elements_html.post.data_header_img.setAttribute(data.attribute_5, data.address_5);
                    elements_html.post.data_header_img.setAttribute('alt', data.alt_5);
                    elements_html.post.data_views.innerHTML = data.views_5;
                    elements_html.post.data_text.innerHTML = data.text_5;
                    break;

                case data.indice_6:
                    elements_html.post.data_title_post.innerHTML = data.title_6;
                    elements_html.post.data_header_img.setAttribute(data.attribute_6, data.address_6);
                    elements_html.post.data_header_img.setAttribute('alt', data.alt_6);
                    elements_html.post.data_views.innerHTML = data.views_6;
                    elements_html.post.data_text.innerHTML = data.text_6;
                    break;

                case data.indice_7:
                    elements_html.post.data_title_post.innerHTML = data.title_7;
                    elements_html.post.data_header_img.setAttribute(data.attribute_7, data.address_7);
                    elements_html.post.data_header_img.setAttribute('alt', data.alt_7);
                    elements_html.post.data_views.innerHTML = data.views_7;
                    elements_html.post.data_text.innerHTML = data.text_7;
                    break;

                case data.indice_8:
                    elements_html.post.data_title_post.innerHTML = data.title_8;
                    elements_html.post.data_header_img.setAttribute(data.attribute_8, data.address_8);
                    elements_html.post.data_header_img.setAttribute('alt', data.alt_8);
                    elements_html.post.data_views.innerHTML = data.views_8;
                    elements_html.post.data_text.innerHTML = data.text_8;
                    break;

                case data.indice_9:
                    elements_html.post.data_title_post.innerHTML = data.title_9;
                    elements_html.post.data_header_img.setAttribute(data.attribute_9, data.address_9);
                    elements_html.post.data_header_img.setAttribute('alt', data.alt_9);
                    elements_html.post.data_views.innerHTML = data.views_9;
                    elements_html.post.data_text.innerHTML = data.text_9;
                    break;

                default:
                    break;
            };
        };
    };
    renderPost();

    /* generates current date and time */
    elements_html.post.data_date.forEach((date) => {
        date.innerHTML = `${date_time_now.date} ${date_time_now.time}`;
    });

    /* login - display alert */
    elements_html.others.data_login_button.addEventListener('click', () => {
        alert('Funcionalidade em construção.');
    });

    /* header - scroll */
    window.addEventListener('scroll', () => {
        elements_html.others.header.classList.toggle('shadow', window.scrollY > 0);
    });

    /* back to top */
    window.addEventListener('scroll', () => {
        const scroll_top = document.documentElement.scrollTop;

        if (scroll_top > 100) {
            back_to_top.style.display = 'block';
        }
        else {
            back_to_top.style.display = 'none';
        };
    });

    /* back to top */
    elements_html.others.back_to_top.addEventListener('click', (event) => {
        event.preventDefault();

        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    });

};

startApp();