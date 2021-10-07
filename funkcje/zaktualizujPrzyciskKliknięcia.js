export const zaktualizujPrzyciskKliknięcia = (nrKliknięcia) => 
document.getElementById('smogCityIMG').setAttribute(onclick, `obsługaKliknięcia(${nrKliknięcia})`);