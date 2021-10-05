export const ustawWysokośćElementuTakąJakStrony = element => {
    const wysokośćStrony = $(window).height();
    $(element).css("height", wysokośćStrony);
}