export const get_views_posts = {
   programming: {
      python: localStorage.getItem('views_python') || '0',
      php: localStorage.getItem('views_php') || '0',
      js: localStorage.getItem('views_js') || '0',
   },
   ia: {
      adobe_firefly: localStorage.getItem('views_adobe_firefly') || '0',
      midjourney: localStorage.getItem('views_midjourney') || '0',
      hand_talk: localStorage.getItem('views_hand_talk') || '0',
   },
   iot: {
      google_glass: localStorage.getItem('views_google_glass') || '0',
      smartwatch: localStorage.getItem('views_smartwatch') || '0',
      drone: localStorage.getItem('views_drone') || '0',
   },
};