/* imports */
import { localStorageViewsProgramming, localStorageViewsIOT, localStorageViewsIA } from "./functions.js";

/* date */
let date_now = new Date().toLocaleDateString();
let time_now = new Date().toLocaleTimeString();

/* selection of elements */
const header = document.querySelector('header');
const data_post_box = document.querySelectorAll('[data_post_box]');
const data_date = document.querySelectorAll('[data_date]');
const data_post = document.querySelectorAll('[data_post]');
const data_views_programming = document.querySelector('[data_views_programming]');
const data_views_ia = document.querySelector('[data_views_ia]');
const data_views_iot = document.querySelector('[data_views_iot]');

data_views_programming.innerHTML = localStorage.getItem('views_programming') || '0';
data_views_ia.innerHTML = localStorage.getItem('views_ia') || '0';
data_views_iot.innerHTML = localStorage.getItem('views_iot') || '0';

/* event */
data_post.forEach((post, indice) => {
    post.addEventListener('click', () => {
        localStorage.setItem('indice', indice + 1);

        switch (post.classList[1]) {
            case 'iot':
                data_views_iot.innerHTML = parseInt(data_views_iot.innerHTML) + 1;
                localStorageViewsIOT(data_views_iot);
                window.location.assign('post_page.html');
                break;

            case 'ia':
                data_views_ia.innerHTML = parseInt(data_views_ia.innerHTML) + 1;
                localStorageViewsIA(data_views_ia);
                window.location.assign('post_page.html');
                break;

            case 'programming':
                data_views_programming.innerHTML = parseInt(data_views_programming.innerHTML) + 1;
                localStorageViewsProgramming(data_views_programming);
                window.location.assign('post_page.html');
                break;

            default:
                break;
        };
    });
});

data_date.forEach((date) => {
    date.innerHTML = `${date_now} ${time_now}`;
});

document.addEventListener('click', (event) => {
    const data_filter = event.target.getAttribute('data_filter');

    switch (data_filter) {
        case 'all':
            data_post_box.forEach((post) => {
                if (!post.classList.contains('all')) {
                    post.style.display = '';
                };
            });
            break;

        case 'programming':
            data_post_box.forEach((post) => {
                post.classList.contains('programming')
                    ? (post.style.display = '')
                    : (post.style.display = 'none')
            });
            break;

        case 'ia':
            data_post_box.forEach((post) => {
                post.classList.contains('ia')
                    ? (post.style.display = '')
                    : (post.style.display = 'none')
            });
            break;

        case 'iot':
            data_post_box.forEach((post) => {
                post.classList.contains('iot')
                    ? (post.style.display = '')
                    : (post.style.display = 'none')
            });
            break;

        default:
            break;
    };
});

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});