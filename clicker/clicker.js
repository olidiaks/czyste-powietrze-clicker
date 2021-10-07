import { obsługaKliknięcia } from "./obsługaKliknięcia.js";
import { zmianaRozmiaruWszystkiegoClicker } from "./zmianaRozmairuWszystkeigoClicker.js";

zmianaRozmiaruWszystkiegoClicker();

window.addEventListener('resize', zmianaRozmiaruWszystkiegoClicker); 

document.getElementById('smogCityIMG').addEventListener('click', obsługaKliknięcia)