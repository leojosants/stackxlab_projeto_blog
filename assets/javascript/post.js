import { indice_card_LS } from "./local_storage/get_keys.js";
import { data_cards_DB} from './database/cards.js';

(() => {

    /* selection of elements */
    const html_elements = {
        back_to_top_button: document.querySelector('[data_back_to_top_button]'),
        post_description: document.querySelector('[data_post_description]'),
        post_header_img: document.querySelector('[data_post_header_img]'),
        login_button: document.querySelector('[data_login_button]'),
        post_title: document.querySelector('[data_post_title]'),
        post_views: document.querySelector('[data_post_views]'),
        post_date: document.querySelector('[data_post_date]'),
        header: document.querySelector('header'),
    };


    /* dynamic and individual loading of each clicked post */
    const load_post = (html_elements) => {
       
        const indice_card = indice_card_LS.indice;

        for (const data of data_cards_DB) {
           
            if (indice_card === data.id) {
                html_elements.post_header_img.setAttribute('src', data.banner_category.src);
                html_elements.post_header_img.setAttribute('alt', data.banner_category.alt);
                html_elements.post_description.innerHTML = data.description;
                html_elements.post_title.innerHTML = data.title;
                html_elements.post_views.innerHTML = data.views_ls;
                html_elements.post_date.innerHTML = data.date;
            }
        }
    };

    load_post(html_elements);


    /* header - scroll */
    window.addEventListener('scroll', () => {
        html_elements.header.classList.toggle('shadow', window.scrollY > 0);
    });


    //  * login - display alert */
    html_elements.login_button.addEventListener('click', () => {
        alert('Funcionalidade não disponível no momento...');
    });


    /* back to top */
    window.addEventListener('scroll', () => {
      
        const scroll_top = document.documentElement.scrollTop;

        if (scroll_top > 100) {
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

})();