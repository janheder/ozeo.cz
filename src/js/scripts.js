var cookiebar = new Cookiebar({
    id: "cookiebar",
    cls: "cookiebar",
    cookie: "cookiebar",
    content: {
        description: "Tato stránka používá cookies za účelem optimalizace efektivního poskytování služeb.",
        link: "Více informací",
        href: "http://ec.europa.eu/ipg/basics/legal/cookies/index_en.htm",
        button: "Rozumím",
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


MicroModal.init({
    onShow: modal => console.info(`${modal.id} is shown`),
    onClose: modal => console.info(`${modal.id} is hidden`), 
    /*
    openTrigger: 'data-custom-open', //
    closeTrigger: 'data-custom-close', // 
    */
    openClass: 'is-open', 
    disableScroll: true, 
    disableFocus: true, 
    awaitOpenAnimation: true,
    awaitCloseAnimation: true, 
    debugMode: false 
  });
      



document.getElementById('navToggle').onclick = function() {
    document.body.classList.toggle('--nav-active');
}
document.getElementById('darkBackdrop').onclick = function() {
    document.body.classList.toggle('--nav-active');
}





document.getElementById('readMore').onclick = function() {
    document.getElementById('pageDescription').classList.toggle('--active');
}
