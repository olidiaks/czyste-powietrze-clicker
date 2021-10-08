export let ileRazyKliknięte = 0;

export const zwiększIleRazyKliknięte = () => {
    ileRazyKliknięte++;
};

export const oIleZmniejszyćIleRazyKliknięte = oIle => {
    ileRazyKliknięte -= oIle
};