import { ileRazyKliknięte, oIleZmniejszyćIleRazyKliknięte, zwiększIleRazyKliknięte } from "./ileRazyKliknięte.js";
import { zaktualizujLicznikKliknięć } from "./zaktualizujLicznikKliknięć.js";

const dodatkiCena = [100, 1000, 10000, 10000];

const template = [
    'Filtr powietrza',
    'Odświeżacz Powietrza',
    'Katalizatory w samochodach',
    'Zaprzestanie kopania surowców naturalnych',
]

const preObsługaAktywacjaDodatku = (preTemplate, dodatkiCena) => (idElement, nrElementu) => {
    if(dodatkiCena[nrElementu-1] <= ileRazyKliknięte){
        oIleZmniejszyćIleRazyKliknięte(dodatkiCena[nrElementu-1]);
        zaktualizujLicznikKliknięć(ileRazyKliknięte);
        
        dodatkiCena[nrElementu-1] *= 2;

        const uchwyt = document.getElementById(idElement);
        const template = `${preTemplate[nrElementu-1]}: ${dodatkiCena[nrElementu-1]} kliknięć.`
    
        uchwyt.innerHTML = template;

        setInterval(() => {
            zwiększIleRazyKliknięte();
            zaktualizujLicznikKliknięć(ileRazyKliknięte);
        }, 5000 / nrElementu);

    }
};

export const obsługaAktywacjaDodatku = preObsługaAktywacjaDodatku(template, dodatkiCena);
