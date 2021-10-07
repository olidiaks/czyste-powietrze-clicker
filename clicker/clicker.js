import { click } from "../funkcje/click.js";
import { zmianaRozmiaruWszystkiegoClicker } from "./zmianaRozmairuWszystkeigoClicker.js";
const smogCityIMG = document.getElementById('smogCityIMG');

zmianaRozmiaruWszystkiegoClicker();

window.addEventListener('resize', zmianaRozmiaruWszystkiegoClicker); 
document.addEventListener('click', click);