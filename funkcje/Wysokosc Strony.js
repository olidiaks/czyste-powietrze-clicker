export const ustawWysokośćElementuTakąJakStrony = element => {
    const wysokośćStrony = $(window).height();
    const wysokośćCiała = $("body").height();

    if (wysokośćCiała < wysokośćStrony){
        $(element).css("height", wysokośćStrony);
    }
}