import { ileRazyKliknięte, zwiększIleRazyKliknięte } from "../funkcje/ileRazyKliknięte.js";
import { win } from "../funkcje/win.js";
import { zaktualizujLicznikKliknięć } from "../funkcje/zaktualizujLicznikKliknięć.js";
import { zaktualizujPrzyciskKliknięcia } from "../funkcje/zaktualizujPrzyciskKliknięcia.js";

export const obsługaKliknięcia = () => {
    zwiększIleRazyKliknięte();
    zaktualizujLicznikKliknięć(ileRazyKliknięte);
    win(ileRazyKliknięte);
    zaktualizujPrzyciskKliknięcia(ileRazyKliknięte);
}