/* imports */
import {
    localStorageViewsJS,
    localStorageViewsHandTalk,
    localStorageViewsPython,
    localStorageViewsPHP,
    localStorageViewsAdobeFirefly,
    localStorageViewsMidjourney,
    localStorageViewsGoogleGlass,
    localStorageViewsSmartwatch,
    localStorageViewsDrone,
} from "./functions.js";

/* date */
let date_now = new Date().toLocaleDateString();
let time_now = new Date().toLocaleTimeString();

/* selection of elements */
const header = document.querySelector('header');
const data_post_box = document.querySelectorAll('[data_post_box]');
const data_date = document.querySelectorAll('[data_date]');
const data_post = document.querySelectorAll('[data_post]');

const data_views_js = document.querySelector('[data_views_js]');
const data_views_python = document.querySelector('[data_views_python]');
const data_views_php = document.querySelector('[data_views_php]');

const data_views_hand_talk = document.querySelector('[data_views_hand_talk]');
const data_views_adobe_firefly = document.querySelector('[data_views_adobe_firefly]');
const data_views_midjourney = document.querySelector('[data_views_midjourney]');

const data_views_google_glass = document.querySelector('[data_views_google_glass]');
const data_views_smartwatch = document.querySelector('[data_views_smartwatch]');
const data_views_drone = document.querySelector('[data_views_drone]');

data_views_js.innerHTML = localStorage.getItem('views_js') || '0';
data_views_python.innerHTML = localStorage.getItem('views_python') || '0';
data_views_php.innerHTML = localStorage.getItem('views_php') || '0';

data_views_hand_talk.innerHTML = localStorage.getItem('views_hand_talk') || '0';
data_views_adobe_firefly.innerHTML = localStorage.getItem('views_adobe_firefly') || '0';
data_views_midjourney.innerHTML = localStorage.getItem('views_midjourney') || '0';

data_views_google_glass.innerHTML = localStorage.getItem('views_google_glass') || '0';
data_views_smartwatch.innerHTML = localStorage.getItem('views_smartwatch') || '0';
data_views_drone.innerHTML = localStorage.getItem('views_drone') || '0';

/* event */
data_post.forEach((post, indice) => {
    post.addEventListener('click', () => {
        localStorage.setItem('indice', indice + 1);

        switch (post.classList[1]) {
            case 'js':
                data_views_js.innerHTML = parseInt(data_views_js.innerHTML) + 1;
                localStorageViewsJS(data_views_js);
                window.location.assign('post_page.html');
                break;
            
            case 'python':
                data_views_python.innerHTML = parseInt(data_views_python.innerHTML) + 1;
                localStorageViewsPython(data_views_python);
                window.location.assign('post_page.html');
                break;
            
            case 'php':
                data_views_php.innerHTML = parseInt(data_views_php.innerHTML) + 1;
                localStorageViewsPHP(data_views_php);
                window.location.assign('post_page.html');
                break;

            case 'hand_talk':
                data_views_hand_talk.innerHTML = parseInt(data_views_hand_talk.innerHTML) + 1;
                localStorageViewsHandTalk(data_views_hand_talk);
                window.location.assign('post_page.html');
                break;
            
            case 'adobe_firefly':
                data_views_adobe_firefly.innerHTML = parseInt(data_views_adobe_firefly.innerHTML) + 1;
                localStorageViewsAdobeFirefly(data_views_adobe_firefly);
                window.location.assign('post_page.html');
                break;
            
            case 'midjourney':
                data_views_midjourney.innerHTML = parseInt(data_views_midjourney.innerHTML) + 1;
                localStorageViewsMidjourney(data_views_midjourney);
                window.location.assign('post_page.html');
                break;

            case 'google_glass':
                data_views_google_glass.innerHTML = parseInt(data_views_google_glass.innerHTML) + 1;
                localStorageViewsGoogleGlass(data_views_google_glass);
                window.location.assign('post_page.html');
                break;
            
            case 'smartwatch':
                data_views_smartwatch.innerHTML = parseInt(data_views_smartwatch.innerHTML) + 1;
                localStorageViewsSmartwatch(data_views_smartwatch);
                window.location.assign('post_page.html');
                break;
            
            case 'drone':
                data_views_drone.innerHTML = parseInt(data_views_drone.innerHTML) + 1;
                localStorageViewsDrone(data_views_drone);
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