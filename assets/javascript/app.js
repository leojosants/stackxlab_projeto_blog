import { data_cards_DB } from './database/cards.js';

// (() => {

/* element selection */
const html_parent_cards = {
    container_all_cards: document.querySelector('[data_container_all_cards]')
};


/* card creation */
data_cards_DB.map((data) => {

    const element_card = document.createElement('div');

    element_card.classList.add('post_box');
    element_card.setAttribute('data_cards', '');
    element_card.setAttribute('data_category', data.category);
    element_card.setAttribute('data_id', data.id);

    element_card.innerHTML = `
            <span class="post_date" data_date>${data.date}</span>
        
            <img class='post_img' src='${data.banner_home.src}' />

            <h2 class='category'>${data.display_category}</h2>

            <p class='post_title'>${data.title}</p>

            <p class="post_description">${data.description}</p>

            <div class="profile">
                <img
                    class="profile_img"
                    src="${data.profile.src}"
                    alt="Foto de perfil"
                />
            
                <span class="category">
                    Visualizações: <span data_views>${data.views_ls}</span>
                </span>
            
                <i class="bx bx-show-alt bx-flashing"></i>
            </div>
        `;

    html_parent_cards.container_all_cards.appendChild(element_card);
});


/* element selection */
const html_elements = {
    popup: {
        cancel_button: document.querySelector('[data_popup_cancel_button]'),
        container: document.querySelector('[data_popup_container]'),
    },
    back_to_top_button: document.querySelector('[data_back_to_top_button]'),
    all_filter_category: document.querySelectorAll('[data_filter]'),
    login_button: document.querySelector('[data_login_button]'),
    all_cards: document.querySelectorAll('[data_cards]'),
    all_views: document.querySelectorAll('[data_views]'),
    header: document.querySelector('header'),
};


/* localstorage keys */
const keys_LS = {
    popup_displayed: 'popup_displayed',
    adobe_firefly: 'adobe_firefly',
    google_glass: 'google_glass',
    javascript: 'javascript',
    midjourney: 'midjourney',
    smartwatch: 'smartwatch',
    hand_talk: 'hand_talk',
    python: 'python',
    drone: 'drone',
};


/* add highlight class */
const addFilterItemActive = (element) => {
    element.classList.add('filter_item--active');
};


/* remove class highlight */
const delFilterItemActive = (element) => {
    element.classList.remove('filter_item--active');
};


/* check if the clicked element is active */
const checkActiveElement = (filter_category) => {

    const category_clicked = filter_category;

    switch (category_clicked) {
        case 'all_categories':
            html_elements.all_filter_category.forEach((element) => {
                element.getAttribute('data_filter') === 'all_categories'
                    ? addFilterItemActive(element)
                    : delFilterItemActive(element);
            });
            break;

        case 'programming_category':
            html_elements.all_filter_category.forEach((element) => {
                element.getAttribute('data_filter') === 'programming_category'
                    ? addFilterItemActive(element)
                    : delFilterItemActive(element);
            });
            break;

        case 'ia_category':
            html_elements.all_filter_category.forEach((element) => {
                element.getAttribute('data_filter') === 'ia_category'
                    ? addFilterItemActive(element)
                    : delFilterItemActive(element);
            });
            break;

        case 'iot_category':
            html_elements.all_filter_category.forEach((element) => {
                element.getAttribute('data_filter') === 'iot_category'
                    ? addFilterItemActive(element)
                    : delFilterItemActive(element);
            });
            break;

        default:
            break;
    }
};


/* will execute when clicking on the card */
const execute = (indice_element_view, card_attribute_id, view, key_local_storage) => {

    const indice = indice_element_view + 1;

    if (indice === card_attribute_id) {
        view.innerHTML = parseInt(view.innerHTML) + 1;
        localStorage.setItem(key_local_storage, view.innerText);
        window.location.assign('./assets/post_description/post.html');
        return;
    }
};


/* header - scroll */
window.addEventListener('scroll', () => {
    html_elements.header.classList.toggle('shadow', window.scrollY > 0);
});


/* login - display alert */
html_elements.login_button.addEventListener('click', () => {
    alert('Funcionalidade não disponível no momento...');
});


// filtro de categoria
window.addEventListener('click', (event) => {

    const filter_category = event.target.getAttribute('data_filter');

    switch (filter_category) {

        case 'all_categories':
            checkActiveElement(filter_category);

            html_elements.all_cards.forEach((card) => {
                card.style.display = 'block';
            });
            break;

        case 'programming_category':
            checkActiveElement(filter_category);

            html_elements.all_cards.forEach((card) => {
                card.getAttribute('data_category') === 'programming' ? card.style.display = 'block' : card.style.display = 'none';
            });
            break;

        case 'ia_category':
            checkActiveElement(filter_category);

            html_elements.all_cards.forEach((card) => {
                card.getAttribute('data_category') === 'ia' ? card.style.display = 'block' : card.style.display = 'none';
            });
            break;

        case 'iot_category':
            checkActiveElement(filter_category);

            html_elements.all_cards.forEach((card) => {
                card.getAttribute('data_category') === 'iot' ? card.style.display = 'block' : card.style.display = 'none';
            });
            break;

        default:
            break;
    }
});


// selecao de cada card
html_elements.all_cards.forEach((card, indice_card) => {

    card.addEventListener('click', () => {

        localStorage.setItem('indice_card', indice_card + 1);

        const card_attribute_id = Number(card.getAttribute('data_id'));

        switch (card_attribute_id) {
            case 1:
                html_elements.all_views.forEach((view, indice_element_view) => {
                    const key_local_storage = keys_LS.adobe_firefly;
                    execute(indice_element_view, card_attribute_id, view, key_local_storage);
                });
                break;

            case 2:
                html_elements.all_views.forEach((view, indice_element_view) => {
                    const key_local_storage = keys_LS.javascript;
                    execute(indice_element_view, card_attribute_id, view, key_local_storage);
                });
                break;

            case 3:
                html_elements.all_views.forEach((view, indice_element_view) => {
                    const key_local_storage = keys_LS.google_glass;
                    execute(indice_element_view, card_attribute_id, view, key_local_storage);
                });
                break;

            case 4:
                html_elements.all_views.forEach((view, indice_element_view) => {
                    const key_local_storage = keys_LS.hand_talk;
                    execute(indice_element_view, card_attribute_id, view, key_local_storage);
                });
                break;

            case 5:
                html_elements.all_views.forEach((view, indice_element_view) => {
                    const key_local_storage = keys_LS.python;
                    execute(indice_element_view, card_attribute_id, view, key_local_storage);
                });
                break;

            case 6:
                html_elements.all_views.forEach((view, indice_element_view) => {
                    const key_local_storage = keys_LS.smartwatch;
                    execute(indice_element_view, card_attribute_id, view, key_local_storage);
                });
                break;

            case 7:
                html_elements.all_views.forEach((view, indice_element_view) => {
                    const key_local_storage = keys_LS.php;
                    execute(indice_element_view, card_attribute_id, view, key_local_storage);
                });
                break;

            case 8:
                html_elements.all_views.forEach((view, indice_element_view) => {
                    const key_local_storage = keys_LS.midjourney;
                    execute(indice_element_view, card_attribute_id, view, key_local_storage);
                });
                break;

            case 9:
                html_elements.all_views.forEach((view, indice_element_view) => {
                    const key_local_storage = keys_LS.drone;
                    execute(indice_element_view, card_attribute_id, view, key_local_storage);
                });
                break;

            default:
                break;
        }
    });
});


/* popup exit */
document.addEventListener('mouseout', (event) => {

    const popup_displayed = sessionStorage.getItem('popup_displayed');

    if (!popup_displayed && event.relatedTarget === null) {
        html_elements.popup.container.style.display = 'block';
    };
});


/* popup exit */
html_elements.popup.cancel_button.addEventListener('click', () => {
    html_elements.popup.container.style.display = 'none';
    sessionStorage.setItem(keys_LS.popup_displayed, true);
});


/* back to top */
window.addEventListener('scroll', () => {

    const scroll_top = document.documentElement.scrollTop;

    if (scroll_top > 1000) {
        html_elements.back_to_top_button.style.display = 'block';
    }
    else {
        html_elements.back_to_top_button.style.display = 'none';
    };
});


/* back to top */
html_elements.back_to_top_button.addEventListener('click', (event) => {

    event.preventDefault();

    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});

// })();