import { win } from "../funkcje/win.js";
import { zaktualizujLicznikKliknięć } from "../funkcje/zaktualizujLicznikKliknięć.js";
import { zaktualizujPrzyciskKliknięcia } from "../funkcje/zaktualizujPrzyciskKliknięcia.js";

let ileRazyKliknięte = 0;

export const obsługaKliknięcia = () => {
    ileRazyKliknięte++;
    zaktualizujLicznikKliknięć(ileRazyKliknięte);
    win(ileRazyKliknięte);
    zaktualizujPrzyciskKliknięcia(ileRazyKliknięte);
}