import { ustawWysokośćElementuTakąJakStrony } from "../funkcje/Wysokosc Strony.js";

ustawWysokośćElementuTakąJakStrony('#kontener');

window.addEventListener('resize', () => ustawWysokośćElementuTakąJakStrony('#kontener')); 