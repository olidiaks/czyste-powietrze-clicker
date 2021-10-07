export const zaktualizujLicznikKliknięć = ileRazyKliknięte => {
    const licznikKliknięć = document.getElementById('LicznikPunktów');
    const licznikKliknięćTemplate = `Kliknięcia: ${ileRazyKliknięte}`;
    licznikKliknięć.innerHTML = licznikKliknięćTemplate;
}