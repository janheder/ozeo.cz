var cookiebar=new Cookiebar({id:"cookiebar",cls:"cookiebar",cookie:"cookiebar",content:{description:"Tato stránka používá cookies za účelem optimalizace efektivního poskytování služeb.",link:"Více informací",href:"http://ec.europa.eu/ipg/basics/legal/cookies/index_en.htm",button:"Rozumím",more:"..."},fade:{type:"in",ms:"500",display:"inline"},debug:0});window.lazySizesConfig=window.lazySizesConfig||{},lazySizesConfig.loadHidden=!1,MicroModal.init({openClass:"is-open",disableScroll:!0,disableFocus:!0,awaitOpenAnimation:!0,awaitCloseAnimation:!0,debugMode:!1}),document.getElementById("navToggle").addEventListener("click",function(){document.body.classList.toggle("--nav-active")}),document.getElementById("searchToggle").addEventListener("click",function(){document.body.classList.toggle("--search-active"),document.getElementById("searchinput").focus()});var filter=document.getElementById("filterContent");filter&&document.getElementById("filterToggle").addEventListener("click",function(){document.body.classList.toggle("--filter-active")}),document.getElementById("darkBackdrop").addEventListener("click",function(){document.body.classList.remove("--nav-active","--search-active","--filter-active")});var userToggle=document.getElementById("userToggle");userToggle&&userToggle.addEventListener("click",function(){document.body.classList.toggle("--user-active")}),document.body.addEventListener("click",function(e){e.target.classList.contains("search__input")||document.getElementById("searchAutocomplete").classList.contains("--active")&&document.getElementById("searchAutocomplete").classList.remove("--active")});var inc=document.getElementsByClassName("stepper");if(0<inc.length){for(abc=0;abc<inc.length;abc++){var incI=inc[abc].querySelector("input"),id=incI.getAttribute("id"),min=incI.getAttribute("min"),max=incI.getAttribute("max"),step=incI.getAttribute("step");document.getElementById(id).previousElementSibling.setAttribute("onclick","stepperInput('"+id+"', -"+step+", "+min+")"),document.getElementById(id).nextElementSibling.setAttribute("onclick","stepperInput('"+id+"', "+step+", "+max+")")}function stepperInput(e,t,n){var o=new Event("change"),e=document.getElementById(e);0<t?parseInt(e.value)<n&&(e.value=parseInt(e.value)+t,e.dispatchEvent(o)):parseInt(e.value)>n&&(e.value=parseInt(e.value)+t,e.dispatchEvent(o))}}document.addEventListener("DOMContentLoaded",function(){if(document.getElementById("homecarousel")){const e=new Siema({selector:"#homecarousel",duration:200,easing:"ease-out",perPage:1,startIndex:0,draggable:!0,multipleDrag:!0,threshold:20,loop:!0,rtl:!1,onInit:()=>{},onChange:()=>{}});document.querySelector(".prev").addEventListener("click",()=>e.prev()),document.querySelector(".next").addEventListener("click",()=>e.next())}}),document.addEventListener("DOMContentLoaded",()=>{if(0<document.getElementsByClassName("product-detail__carousel").length){const e=document.getElementById("product-carousel"),c=document.getElementById("lightbox");let i,a;if(e.addEventListener("mousedown",e=>{i=e.pageX,a=e.pageY}),e.addEventListener("mouseup",e=>{var t=Math.abs(event.pageX-i),n=Math.abs(event.pageY-a);if(t<6&&n<6){const o=e.target.closest(".product-detail__carouselLink");o&&(n=o.querySelector("img"),e=o.querySelector("span"),n&&(c.innerHTML='<div class="close-lightbox"></div>'+n.outerHTML+e.outerHTML,c.classList.add("show")))}}),c.addEventListener("click",e=>{e.target.hasAttribute("src")||c.classList.remove("show")}),0<document.getElementsByClassName("product-detail__thumbs").length){const t=new Siema({selector:".product-detail__carousel",duration:200,easing:"ease-out",perPage:1,startIndex:0,draggable:!0,multipleDrag:!0,threshold:20,loop:!0,rtl:!1,onInit:()=>{},onChange:()=>{}});document.querySelector(".prev").addEventListener("click",()=>t.prev()),document.querySelector(".next").addEventListener("click",()=>t.next()),Siema.prototype.addPagination=function(){for(let e=0;e<this.innerElements.length;e++){const t=document.getElementById("thumb"+e);t.addEventListener("click",()=>this.goTo(e))}},t.addPagination()}}});var navitem=document.querySelectorAll(".expandable .nav-link");for(let t=0;t<navitem.length;t++)document.getElementById("subToggle-"+t).addEventListener("click",function(e){document.getElementById("sub-"+t).classList.toggle("--active")});var variants=document.getElementById("variants");variants&&document.querySelector(".variants__list").addEventListener("click",function(e){this.classList.toggle("--active");var t=e.target;e.currentTarget.querySelector(".--active").classList.remove("--active");t.querySelector("input").checked=!0;t.classList.add("--active");var n=t.dataset.code,o=t.dataset.stock,i=t.dataset.stockstatus,a=t.dataset.priceold,e=t.dataset.price,t=t.dataset.pricevat;document.getElementById("product-code").innerHTML=n,document.getElementById("stock").dataset.status=i,document.getElementById("stock").innerHTML=o,document.getElementById("price-old").innerHTML=null==a?"":a,document.getElementById("price-main").innerHTML=e,document.getElementById("price-vat").innerHTML=t}),document.getElementById("register-form")&&(document.getElementById("faToggle").onclick=function(){document.getElementById("register-fa-company").toggleAttribute("required"),document.getElementById("register-fa-ico").toggleAttribute("required"),document.getElementById("register-fa-street").toggleAttribute("required"),document.getElementById("register-fa-city").toggleAttribute("required"),document.getElementById("register-fa-psc").toggleAttribute("required"),document.getElementById("register-fa-state").toggleAttribute("required")}),document.getElementById("showLoginPassword")&&(document.getElementById("showLoginPassword").onclick=function(){var e=document.getElementById("login-password");"password"===e.type?e.type="text":e.type="password"}),document.getElementById("showRegisterPassword")&&(document.getElementById("showRegisterPassword").onclick=function(){var e=document.getElementById("heslo");"password"===e.type?e.type="text":e.type="password"}),document.getElementById("showCartRegisterPassword")&&(document.getElementById("showCartRegisterPassword").onclick=function(){var e=document.getElementById("cart-register-password");"password"===e.type?e.type="text":e.type="password"});
//# sourceMappingURL=maps/scripts.js.map
