var cart=document.getElementsByClassName("cart-content");function addInputListener(e){let t=e.parentElement.parentElement.parentElement,m=t.querySelector(".cart-item-price span"),l=parseFloat(t.querySelector(".cart-item-price-pc span").innerText.replace(/,/g,"."));function r(){0<this.value?m.innerText=(l*this.value).toString():m.innerText="0";var e=0;e=document.getElementById("codePrice")?parseFloat(document.getElementById("codePrice").innerText):0;var t,r=document.querySelectorAll(".cart-item-price span ");const n=Array.from(r).reduce((e,t)=>e+Number(t.textContent),0);document.getElementById("codePrice")?null===document.getElementById("codePrice").getAttribute("data-percentage")?(t=(n+e).toString().replace(/\./g,","),document.getElementById("goodsprice").innerText=t):(t=document.getElementById("codePrice").dataset.percentage,document.getElementById("codePrice").innerHTML=parseInt(n*t),t=n-n*t,t=parseInt(t),document.getElementById("goodsprice").innerText=t):(d=n.toString().replace(/\./g,","),document.getElementById("goodsprice").innerText=d);var c,d=document.querySelectorAll(".cart-item-price span, #delprice");const o=Array.from(d).reduce((e,t)=>e+Number(t.textContent),0);document.getElementById("codePrice")?null===document.getElementById("codePrice").getAttribute("data-percentage")?(c=(o+e).toString().replace(/\./g,","),document.getElementById("sumprice").innerText=c):(c=document.getElementById("codePrice").dataset.percentage,document.getElementById("codePrice").innerHTML=parseInt(o*c),c=o-o*c,c=parseInt(c),document.getElementById("sumprice").innerText=c):(i=o.toString().replace(/\./g,","),document.getElementById("sumprice").innerText=i);let a=document.getElementById("cartFreeShipping");var i=parseFloat(a.dataset.price)-parseFloat(document.getElementById("goodsprice").innerText.replace(/,/g,"."));a.innerHTML=i<=0?"Dopravu máte zdarma":"Nakupte ještě za "+i+" Kč a máte dopravu zdarma"}e.addEventListener("change",r),r.call(e)}function recountCart(){var t=document.querySelectorAll(".cart-item-stepper .num_items");for(let e=0;e<t.length;e++)addInputListener(t[e])}function recountDeliveryCart(){var e=document.querySelectorAll(".cart-table-shipping-item");function t(){var e=document.querySelectorAll(".cart-table-shipping-item input:checked ~ .cart-table-shipping-price span"),t=Array.from(e).reduce((e,t)=>e+Number(t.textContent),0);document.getElementById("delprice").innerText=t;e=document.getElementById("goodsprice").textContent,e=t+parseInt(e);document.getElementById("sumprice").innerText=e}for(var r=0;r<e.length;r++)e[r].addEventListener("click",t,!1)}0<cart.length&&(recountCart(),recountDeliveryCart(),document.getElementById("cart-form-user")&&(document.getElementById("regToggle").onclick=function(){document.getElementById("cart-register-password").toggleAttribute("required")},document.getElementById("faToggle").onclick=function(){document.getElementById("cart-fa-company").toggleAttribute("required"),document.getElementById("cart-fa-ico").toggleAttribute("required"),document.getElementById("cart-fa-street").toggleAttribute("required"),document.getElementById("cart-fa-city").toggleAttribute("required"),document.getElementById("cart-fa-psc").toggleAttribute("required"),document.getElementById("cart-fa-state").toggleAttribute("required")}));
//# sourceMappingURL=maps/cart.js.map
