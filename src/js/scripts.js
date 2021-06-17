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


var inc = document.getElementsByClassName("stepper");

if (inc.length > 0){
    
    for (abc = 0; abc < inc.length; abc++) {
    var incI = inc[abc].querySelector("input"),
        id = incI.getAttribute("id"),
        min = incI.getAttribute("min"),
        max = incI.getAttribute("max"),
        step = incI.getAttribute("step");
    document
        .getElementById(id)
        .previousElementSibling.setAttribute(
        "onclick",
        "stepperInput('" + id + "', -" + step + ", " + min + ")"
        ); 
    document
        .getElementById(id)
        .nextElementSibling.setAttribute(
        "onclick",
        "stepperInput('" + id + "', " + step + ", " + max + ")"
        ); 
    }

    function stepperInput(id, s, m) {
        var el = document.getElementById(id);
        if (s > 0) {
            if (parseInt(el.value) < m) {
            el.value = parseInt(el.value) + s;
            }
        } else {
            if (parseInt(el.value) > m) {
            el.value = parseInt(el.value) + s;
            }
        }
    }

}





document.addEventListener("DOMContentLoaded", () => {


    var carousel = document.getElementsByClassName('product-detail__carousel');

    if (carousel.length > 0){


        const $imagesContainer = document.getElementById('product-carousel');
        const $lightbox = document.getElementById('lightbox');
     
        const delta = 6;
        let startX;
        let startY;

        $imagesContainer.addEventListener('mousedown', (event) => {
            startX = event.pageX;
            startY = event.pageY;
        });
        $imagesContainer.addEventListener('mouseup', e => {
            const diffX = Math.abs(event.pageX - startX);
            const diffY = Math.abs(event.pageY - startY);
            if (diffX < delta && diffY < delta) {
                const imageWrapper = e.target.closest('.product-detail__carouselLink');
                if (imageWrapper) {
                    const image = imageWrapper.querySelector('img');
                    if (image) {
                        $lightbox.innerHTML = '<div class="close-lightbox"></div>' + image.outerHTML;
                        $lightbox.classList.add('show');
                    }
                }
              } else {
                // pause
              }
    
        });
    
        $lightbox.addEventListener('click', (e) => {
            if (!e.target.hasAttribute('src')) {
                $lightbox.classList.remove('show');
            }
        });


      
        const thumbCarousel = new Siema({
            selector: '.product-detail__carousel',
            duration: 200,
            easing: 'ease-out',
            perPage: 1,
            startIndex: 0,
            draggable: true,
            multipleDrag: true,
            threshold: 20,
            loop: true,
            rtl: false,
            onInit: () => {},
            onChange: () => {lazyload();},
        });
    
        document.querySelector('.prev').addEventListener('click', () => thumbCarousel.prev());
        document.querySelector('.next').addEventListener('click', () => thumbCarousel.next());

        // Add a function that generates pagination to prototype
        Siema.prototype.addPagination = function() {
            for (let i = 0; i < this.innerElements.length; i++) {
                const thumb = document.getElementById("thumb" + i);
                thumb.addEventListener('click', () => this.goTo(i));
            }
        }
        
        
        // Trigger pagination creator
        thumbCarousel.addPagination();

    }
});





var navitem = document.querySelectorAll('.expandable .nav-link');

for (let loop = 0; loop < navitem.length; loop++) {

    document.getElementById('subToggle-'+ loop).addEventListener('click', function(e) {
        document.getElementById('sub-'+ loop).classList.toggle('--active');
    });

}



