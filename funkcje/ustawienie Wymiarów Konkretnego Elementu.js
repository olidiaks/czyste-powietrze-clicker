import { ustawSzerokośćElementuNaKonkretnyProcent, ustawWysokośćElementuNaKonkretnyProcent } from "./DynamiczneGenerowanieRozmiaru.js"

export const ustawienieWymiarówKonkretnegoElementu = (idElementuUstawić, idWzględemJakiegoElementuUstawić, oIleProcent = 0.2) => {
    ustawSzerokośćElementuNaKonkretnyProcent(idElementuUstawić, idWzględemJakiegoElementuUstawić, oIleProcent);
    ustawWysokośćElementuNaKonkretnyProcent(idElementuUstawić, idWzględemJakiegoElementuUstawić, oIleProcent);
}