export const ustawWysokośćElementu = (elementDoUstawienia, elementWzględemJakiegoUstawić, oIleMniejszy = 10) => {
    const wysokośćElementu = $(elementWzględemJakiegoUstawić).height() - oIleMniejszy;
    $(elementDoUstawienia).css("height", wysokośćElementu);
}

export const ustawRozmiarCzcionki = (idElementDlaJakiegoUstawićWielkośćTrzcionki, idElementuWJakimSięZnajduje) => {
    const wielkośćCzcionki = `${$(idElementuWJakimSięZnajduje).height() - 10 }px`;
    $(idElementDlaJakiegoUstawićWielkośćTrzcionki).css({'font-size': wielkośćCzcionki, 'margin-top' : '2.5px', 'margin-bottom': '2.5px'});
}