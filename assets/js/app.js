/* import localStorage */
import {
    get_views_adobe_firefly,
    get_views_google_glass,
    get_views_smartwatch,
    get_views_midjourney,
    get_views_hand_talk,
    get_views_python,
    get_views_drone,
    get_views_php,
    get_views_js,
} from "./local_storage/get_views_posts.js";

/* import localStorage */
import {
    setViewsAdobeFirefly,
    setViewsGoogleGlass,
    setViewsSmartwatch,
    setViewsMidjourney,
    setViewsHandTalk,
    setViewsPython,
    setViewsDrone,
    setViewsPHP,
    setViewsJS,
} from "./local_storage/save_views_posts.js";

/* get localStorage */
const views_adobe_firefly = get_views_adobe_firefly;
const views_google_glass = get_views_google_glass;
const views_smartwatch = get_views_smartwatch;
const views_midjourney = get_views_midjourney;
const views_hand_talk = get_views_hand_talk;
const views_python = get_views_python
const views_drone = get_views_drone;
const views_php = get_views_php;
const views_js = get_views_js;

/* selection of elements */
const data_login_button = document.querySelector('[data_login_button]');
const cancel_button = document.querySelector('[data_cancel_button]');
const data_post_box = document.querySelectorAll('[data_post_box]');
const data_filters = document.querySelectorAll('[data_filter]');
const back_to_top = document.querySelector('[data_back_to_top]');
const data_date = document.querySelectorAll('[data_date]');
const data_post = document.querySelectorAll('[data_post]');
const popup = document.querySelector('[data_popup]');
const header = document.querySelector('header');

const data_views_adobe_firefly = document.querySelector('[data_views_adobe_firefly]');
const data_views_google_glass = document.querySelector('[data_views_google_glass]');
const data_views_midjourney = document.querySelector('[data_views_midjourney]');
const data_views_smartwatch = document.querySelector('[data_views_smartwatch]');
const data_views_hand_talk = document.querySelector('[data_views_hand_talk]');
const data_views_python = document.querySelector('[data_views_python]');
const data_views_drone = document.querySelector('[data_views_drone]');
const data_views_php = document.querySelector('[data_views_php]');
const data_views_js = document.querySelector('[data_views_js]');

/* assigning data from local storage */
data_views_adobe_firefly.innerHTML = views_adobe_firefly;
data_views_google_glass.innerHTML = views_google_glass;
data_views_midjourney.innerHTML = views_midjourney;
data_views_smartwatch.innerHTML = views_smartwatch;
data_views_hand_talk.innerHTML = views_hand_talk;
data_views_python.innerHTML = views_python;
data_views_drone.innerHTML = views_drone;
data_views_php.innerHTML = views_php;
data_views_js.innerHTML = views_js;

/* date */
let date_now = new Date().toLocaleDateString();
let time_now = new Date().toLocaleTimeString();

/* login - display alert */
data_login_button.addEventListener('click', () => {
    alert('Funcionalidade em construção.');
});

/* generates current date and time */
data_date.forEach((date) => {
    date.innerHTML = `${date_now} ${time_now}`;
});

/* add highlight class */
function addFilterItemActive(data) {
    data.classList.add('filter_item--active');
};

/* remove class highlight*/
function delFilterItemActive(data) {
    data.classList.remove('filter_item--active');
};

/* add highlight to selected category */
function activateItem(data, data_event) {
    switch (data_event) {
        case 'all':
            addFilterItemActive(data[0]);
            delFilterItemActive(data[1]);
            delFilterItemActive(data[2]);
            delFilterItemActive(data[3]);
            break;

        case 'programming':
            delFilterItemActive(data[0]);
            addFilterItemActive(data[1]);
            delFilterItemActive(data[2]);
            delFilterItemActive(data[3]);
            break;

        case 'ia':
            delFilterItemActive(data[0]);
            delFilterItemActive(data[1]);
            addFilterItemActive(data[2]);
            delFilterItemActive(data[3]);
            break;

        case 'iot':
            delFilterItemActive(data[0]);
            delFilterItemActive(data[1]);
            delFilterItemActive(data[2]);
            addFilterItemActive(data[3]);
            break;

        default:
            break;
    };
};

/* select the category to be highlighted */
data_filters.forEach((item) => {
    item.addEventListener('click', (event) => {
        const data_event = event.target.getAttribute('data_filter');
        activateItem(data_filters, data_event);
    });
});

/* select the clicked category */
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

/* select clicked post */
data_post.forEach((post, indice) => {
    post.addEventListener('click', () => {

        localStorage.setItem('indice', indice + 1);

        switch (post.classList[1]) {
            case 'js':
                data_views_js.innerHTML = parseInt(data_views_js.innerHTML) + 1;
                setViewsJS(data_views_js);
                window.location.assign('post_page.html');
                break;

            case 'python':
                data_views_python.innerHTML = parseInt(data_views_python.innerHTML) + 1;
                setViewsPython(data_views_python);
                window.location.assign('post_page.html');
                break;

            case 'php':
                data_views_php.innerHTML = parseInt(data_views_php.innerHTML) + 1;
                setViewsPHP(data_views_php);
                window.location.assign('post_page.html');
                break;

            case 'hand_talk':
                data_views_hand_talk.innerHTML = parseInt(data_views_hand_talk.innerHTML) + 1;
                setViewsHandTalk(data_views_hand_talk);
                window.location.assign('post_page.html');
                break;

            case 'adobe_firefly':
                data_views_adobe_firefly.innerHTML = parseInt(data_views_adobe_firefly.innerHTML) + 1;
                setViewsAdobeFirefly(data_views_adobe_firefly);
                window.location.assign('post_page.html');
                break;

            case 'midjourney':
                data_views_midjourney.innerHTML = parseInt(data_views_midjourney.innerHTML) + 1;
                setViewsMidjourney(data_views_midjourney);
                window.location.assign('post_page.html');
                break;

            case 'google_glass':
                data_views_google_glass.innerHTML = parseInt(data_views_google_glass.innerHTML) + 1;
                setViewsGoogleGlass(data_views_google_glass);
                window.location.assign('post_page.html');
                break;

            case 'smartwatch':
                data_views_smartwatch.innerHTML = parseInt(data_views_smartwatch.innerHTML) + 1;
                setViewsSmartwatch(data_views_smartwatch);
                window.location.assign('post_page.html');
                break;

            case 'drone':
                data_views_drone.innerHTML = parseInt(data_views_drone.innerHTML) + 1;
                setViewsDrone(data_views_drone);
                window.location.assign('post_page.html');
                break;

            default:
                break;
        };
    });
});

/* header - scroll */
window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});

/* back to top */
window.addEventListener('scroll', function () {
    const scroll_top = document.documentElement.scrollTop;

    if (scroll_top > 1000) {
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

/* popup exit */
document.addEventListener('mouseout', (event) => {
    const popup_displayed = sessionStorage.getItem('popup_displayed');

    if (!popup_displayed && event.relatedTarget === null) {
        popup.style.display = 'block';
    };
});

/* popup exit */
cancel_button.addEventListener('click', () => {
    popup.style.display = 'none';
    sessionStorage.setItem('popup_displayed', true);
});