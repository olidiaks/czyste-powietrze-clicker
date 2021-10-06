export const ustawWysokośćElementu = (idElementDoUstawienia, idElementWzględemJakiegoUstawić, oIleMniejszy = 10) => {
    const wysokośćElementu = `${$(idElementWzględemJakiegoUstawić).height() - oIleMniejszy}px`;
    $(idElementDoUstawienia).css("height", wysokośćElementu);
}

export const ustawWysokośćElementuNaKonkretnyProcent = (idElementDoUstawienia, idElementWzględemJakiegoUstawić, oIleProcentMniejszy = 0.2) =>{
    const oIleMniejszy =  oIleProcentMniejszy * $(idElementWzględemJakiegoUstawić).height(); 
    ustawWysokośćElementu(idElementDoUstawienia, idElementWzględemJakiegoUstawić, oIleMniejszy);
}

export const ustawRozmiarCzcionki = (idElementDlaJakiegoUstawićWielkośćTrzcionki, idElementuWJakimSięZnajduje) => {
    const wielkośćCzcionki = `${$(idElementuWJakimSięZnajduje).height() - 10 }px`;
    $(idElementDlaJakiegoUstawićWielkośćTrzcionki).css({'font-size': wielkośćCzcionki, 'margin-top' : '2.5px', 'margin-bottom': '2.5px'});
}

export const ustawSzerokośćElementu = (idElementDoUstawienia, idElementuWJakimSięZnajduje, oIleMniejszy = 10) => {
    const szerokośćElementu = `${$(idElementDoUstawienia).width() -  oIleMniejszy}px`
    $(idElementDoUstawienia).css('width', szerokośćElementu);
}

export const ustawSzerokośćElementuNaKonkretnyProcent = (idElementDoUstawienia, idElementWzględemJakiegoUstawić, oIleProcentMniejszy = 0.2) => {
    const oIleMniejszy =  oIleProcentMniejszy * $(idElementWzględemJakiegoUstawić).width();
    ustawSzerokośćElementu(idElementDoUstawienia, idElementWzględemJakiegoUstawić, oIleMniejszy);
}