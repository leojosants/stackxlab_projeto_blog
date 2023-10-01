export const ia_categories_LS = {
    adobe_firefly: localStorage.getItem('adobe_firefly') || '0',
    midjourney: localStorage.getItem('midjourney') || '0',
    hand_talk: localStorage.getItem('hand_talk') || '0',
};

export const programming_language_categories_LS = {
    javascript: localStorage.getItem('javascript') || '0',
    python: localStorage.getItem('python') || '0',
    php: localStorage.getItem('php') || '0',
};

export const iot_categories_LS = {
    google_glass: localStorage.getItem('google_glass') || '0',
    smartwatch: localStorage.getItem('smartwatch') || '0',
    drone: localStorage.getItem('drone') || '0',
};

export const indice_card_LS = {
    indice: parseInt(localStorage.getItem('indice_card')),
};