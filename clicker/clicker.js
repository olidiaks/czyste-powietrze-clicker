import { click } from "../funkcje/click.js";
import { zmianaRozmiaruWszystkiegoClicker } from "./zmianaRozmairuWszystkeigoClicker.js";
const smogCityIMG = document.getElementById('smogCityIMG');

zmianaRozmiaruWszystkiegoClicker();

window.addEventListener('resize', zmianaRozmiaruWszystkiegoClicker); 
smogCityIMG.addEventListener('click', click);