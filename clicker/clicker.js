import { obsługaAktywacjaDodatku } from "../funkcje/dodtaki.js";
import { obsługaKliknięcia } from "./obsługaKliknięcia.js";
import { zmianaRozmiaruWszystkiegoClicker } from "./zmianaRozmairuWszystkeigoClicker.js";

zmianaRozmiaruWszystkiegoClicker();

window.addEventListener('resize', zmianaRozmiaruWszystkiegoClicker); 

document.getElementById('smogCityIMG').addEventListener('click', obsługaKliknięcia);

document.getElementById('filtrPowietrza').addEventListener('click', () => {obsługaAktywacjaDodatku('filtrPowietrza', 1, )});
document.getElementById('odświeżaczPowietrza').addEventListener('click', () => obsługaAktywacjaDodatku('odświeżaczPowietrza', 2));
document.getElementById('katalizatoryWSamochodach').addEventListener('click', () => obsługaAktywacjaDodatku('katalizatoryWSamochodach', 3));
document.getElementById('zaprzestanieKopaniaSurowcówNaturalnych').addEventListener('click', () => 
obsługaAktywacjaDodatku('zaprzestanieKopaniaSurowcówNaturalnych', 4));