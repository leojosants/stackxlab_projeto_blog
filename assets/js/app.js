/* import localStorage */
import { get_views_posts } from "./local_storage/get_views_posts.js";

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

/* initialization */
function startApp() {
    
    /* selection of elements */
    const elements_html = {
        data_login_button: document.querySelector('[data_login_button]'),
        data_cancel_popup_button: document.querySelector('[data_cancel_button]'),
        data_back_to_top: document.querySelector('[data_back_to_top]'),
        data_post_box: document.querySelectorAll('[data_post_box]'),
        data_filters: document.querySelectorAll('[data_filter]'),
        data_date: document.querySelectorAll('[data_date]'),
        data_post: document.querySelectorAll('[data_post]'),
        data_popup: document.querySelector('[data_popup]'),
        data_views_adobe_firefly: document.querySelector('[data_views_adobe_firefly]'),
        data_views_google_glass: document.querySelector('[data_views_google_glass]'),
        data_views_midjourney: document.querySelector('[data_views_midjourney]'),
        data_views_smartwatch: document.querySelector('[data_views_smartwatch]'),
        data_views_hand_talk: document.querySelector('[data_views_hand_talk]'),
        data_views_python: document.querySelector('[data_views_python]'),
        data_views_drone: document.querySelector('[data_views_drone]'),
        data_views_php: document.querySelector('[data_views_php]'),
        data_views_js: document.querySelector('[data_views_js]'),
        header: document.querySelector('header'),
    };

    /* get localStorage */
    const get_views_local_storage = {
        views_adobe_firefly: get_views_posts.adobe_firefly,
        views_google_glass: get_views_posts.google_glass,
        views_smartwatch: get_views_posts.smartwatch,
        views_midjourney: get_views_posts.midjourney,
        views_hand_talk: get_views_posts.hand_talk,
        views_python: get_views_posts.python,
        views_drone: get_views_posts.drone,
        views_php: get_views_posts.php,
        views_js: get_views_posts.js,
    };

    /* date */
    const date_time_now = {
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
    };

    /* assigning data from local storage */
    elements_html.data_views_adobe_firefly.innerHTML = get_views_local_storage.views_adobe_firefly;
    elements_html.data_views_google_glass.innerHTML = get_views_local_storage.views_google_glass;
    elements_html.data_views_midjourney.innerHTML = get_views_local_storage.views_midjourney;
    elements_html.data_views_smartwatch.innerHTML = get_views_local_storage.views_smartwatch;
    elements_html.data_views_hand_talk.innerHTML = get_views_local_storage.views_hand_talk;
    elements_html.data_views_python.innerHTML = get_views_local_storage.views_python;
    elements_html.data_views_drone.innerHTML = get_views_local_storage.views_drone;
    elements_html.data_views_php.innerHTML = get_views_local_storage.views_php;
    elements_html.data_views_js.innerHTML = get_views_local_storage.views_js;

    /* generate current date and time */
    elements_html.data_date.forEach((date) => {
        date.innerHTML = `${date_time_now.date} ${date_time_now.time}`;
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
    elements_html.data_filters.forEach((item) => {
        item.addEventListener('click', (event) => {
            const data_event = event.target.getAttribute('data_filter');
            activateItem(elements_html.data_filters, data_event);
        });
    });

    /* login - display alert */
    elements_html.data_login_button.addEventListener('click', () => {
        alert('Funcionalidade em construção.');
    });

    /* select the clicked category */
    document.addEventListener('click', (event) => {
        const data_filter = event.target.getAttribute('data_filter');

        switch (data_filter) {
            case 'all':
                elements_html.data_post_box.forEach((post) => {
                    if (!post.classList.contains('all')) {
                        post.style.display = '';
                    };
                });
                break;

            case 'programming':
                elements_html.data_post_box.forEach((post) => {
                    post.classList.contains('programming')
                        ? (post.style.display = '')
                        : (post.style.display = 'none')
                });
                break;

            case 'ia':
                elements_html.data_post_box.forEach((post) => {
                    post.classList.contains('ia')
                        ? (post.style.display = '')
                        : (post.style.display = 'none')
                });
                break;

            case 'iot':
                elements_html.data_post_box.forEach((post) => {
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
    elements_html.data_post.forEach((post, indice) => {
        post.addEventListener('click', () => {

            localStorage.setItem('indice', indice + 1);

            switch (post.classList[1]) {
                case 'js':
                    elements_html.data_views_js.innerHTML = parseInt(elements_html.data_views_js.innerHTML) + 1;
                    setViewsJS(elements_html.data_views_js);
                    window.location.assign('post_page.html');
                    break;

                case 'python':
                    elements_html.data_views_python.innerHTML = parseInt(elements_html.data_views_python.innerHTML) + 1;
                    setViewsPython(elements_html.data_views_python);
                    window.location.assign('post_page.html');
                    break;

                case 'php':
                    elements_html.data_views_php.innerHTML = parseInt(elements_html.data_views_php.innerHTML) + 1;
                    setViewsPHP(elements_html.data_views_php);
                    window.location.assign('post_page.html');
                    break;

                case 'hand_talk':
                    elements_html.data_views_hand_talk.innerHTML = parseInt(elements_html.data_views_hand_talk.innerHTML) + 1;
                    setViewsHandTalk(elements_html.data_views_hand_talk);
                    window.location.assign('post_page.html');
                    break;

                case 'adobe_firefly':
                    elements_html.data_views_adobe_firefly.innerHTML = parseInt(elements_html.data_views_adobe_firefly.innerHTML) + 1;
                    setViewsAdobeFirefly(elements_html.data_views_adobe_firefly);
                    window.location.assign('post_page.html');
                    break;

                case 'midjourney':
                    elements_html.data_views_midjourney.innerHTML = parseInt(elements_html.data_views_midjourney.innerHTML) + 1;
                    setViewsMidjourney(elements_html.data_views_midjourney);
                    window.location.assign('post_page.html');
                    break;

                case 'google_glass':
                    elements_html.data_views_google_glass.innerHTML = parseInt(elements_html.data_views_google_glass.innerHTML) + 1;
                    setViewsGoogleGlass(elements_html.data_views_google_glass);
                    window.location.assign('post_page.html');
                    break;

                case 'smartwatch':
                    elements_html.data_views_smartwatch.innerHTML = parseInt(elements_html.data_views_smartwatch.innerHTML) + 1;
                    setViewsSmartwatch(elements_html.data_views_smartwatch);
                    window.location.assign('post_page.html');
                    break;

                case 'drone':
                    elements_html.data_views_drone.innerHTML = parseInt(elements_html.data_views_drone.innerHTML) + 1;
                    setViewsDrone(elements_html.data_views_drone);
                    window.location.assign('post_page.html');
                    break;

                default:
                    break;
            };
        });
    });

    /* header - scroll */
    window.addEventListener('scroll', () => {
        elements_html.header.classList.toggle('shadow', window.scrollY > 0);
    });

    /* back to top */
    window.addEventListener('scroll', () => {
        const scroll_top = document.documentElement.scrollTop;

        if (scroll_top > 1000) {
            elements_html.data_back_to_top.style.display = 'block';
        }
        else {
            elements_html.data_back_to_top.style.display = 'none';
        };
    });

    /* back to top */
    elements_html.data_back_to_top.addEventListener('click', (event) => {
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
            elements_html.data_popup.style.display = 'block';
        };
    });

    /* popup exit */
    elements_html.data_cancel_popup_button.addEventListener('click', () => {
        elements_html.data_popup.style.display = 'none';
        sessionStorage.setItem('popup_displayed', true);
    });
};

startApp();