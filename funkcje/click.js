let ileRazyKliknięte = 0

export const click = () => {
    ileRazyKliknięte ++;
    const licznikKliknięć = document.getElementById('LicznikPunktów');
    const licznikKliknięćTemplate = `Kliknięcia: ${ileRazyKliknięte}`;
    licznikKliknięć.innerHTML = licznikKliknięćTemplate;
}