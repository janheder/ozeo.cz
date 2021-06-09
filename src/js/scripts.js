new Siema({
    selector: '.carousel-wrapper',
    duration: 200,
    easing: 'ease-out',
    perPage: 1,
    startIndex: 0,
    draggable: true,
    multipleDrag: true,
    threshold: 20,
    loop: false,
    rtl: false,
    onInit: () => {},
    onChange: () => {},
  });



var cookiebar = new Cookiebar({
    id: "cookiebar",
    cls: "cookiebar",
    cookie: "cookiebar",
    content: {
        description: "The site uses cookies to operate. By using our services you agree to use the cookies!",
        link: "More information",
        href: "http://ec.europa.eu/ipg/basics/legal/cookies/index_en.htm",
        button: "Accept",
        more: "..."
    },
    fade: {
        type: "in",
        ms: "500",
        display: "inline"
    },
    debug: 0
});





lazyload();



