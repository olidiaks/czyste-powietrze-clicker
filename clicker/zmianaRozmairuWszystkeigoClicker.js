import { ustawRozmiarCzcionki, ustawWysokośćElementu } from "../funkcje/DynamiczneGenerowanieRozmiaru.js";
import { ustawienieWymiarówKonkretnegoElementu } from "../funkcje/ustawienie Wymiarów Konkretnego Elementu.js";

export const zmianaRozmiaruWszystkiegoClicker = () => {
    ustawWysokośćElementu('#kontener', window, 0);
    ustawRozmiarCzcionki('#CzystszePowietrze', '#GórnyPanel');

}