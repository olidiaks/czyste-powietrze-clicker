import { ustawRozmiarCzcionki, ustawWysokośćElementu } from "../funkcje/DynamiczneGenerowanieRozmiaru.js";

export const zmianaRozmiaruWszystkiegoClicker = () => {
    ustawWysokośćElementu('#kontener', window, 0);
    ustawRozmiarCzcionki('#CzystszePowietrze', '#GórnyPanel');
}