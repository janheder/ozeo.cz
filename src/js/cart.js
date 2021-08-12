var cart = document.getElementsByClassName('cart-content');
if (cart.length>0){


    /* CART 1 */

    function addInputListener(input) {

        let row = input.parentElement.parentElement.parentElement;
        
        let overallPriceElement = row.querySelector('.cart-item-price span');
        let price = parseFloat(row.querySelector('.cart-item-price-pc span').innerText.replace(/,/g, '.')); 


        let calcEvent = function() {

            if (this.value > 0) {
                overallPriceElement.innerText = (price * this.value).toString();
            } else {
                overallPriceElement.innerText = "0";
            }


            const pricegoods = document.querySelectorAll('.cart-item-price span ');
            const result = Array.from(pricegoods).reduce((sum, spanElm) => sum + Number(spanElm.textContent), 0);
            const result_f = result.toString().replace(/\./g, ',');
            document.getElementById('goodsprice').innerText = result_f;

            const pricesum = document.querySelectorAll('.cart-item-price span, #delprice');
            const result2 = Array.from(pricesum).reduce((sum, spanElm) => sum + Number(spanElm.textContent), 0); 
            const result2_f = result2.toString().replace(/\./g, ',');
            document.getElementById('sumprice').innerText = result2_f;
            

        };
        

        input.addEventListener('change', calcEvent);
        calcEvent.call(input); 
    }

    let inputs = document.querySelectorAll('.cart-item-stepper .num_items');


    for (let i = 0; i < inputs.length; i++) {
        let input = inputs[i];
        addInputListener(input);
    }



    /* CART 2 */

    var elms = document.querySelectorAll('.cart-table-shipping-item');

    var cart2 = function() {
        const pricedel = document.querySelectorAll('.cart-table-shipping-item input:checked ~ .cart-table-shipping-price span');
        const deliveryprice = Array.from(pricedel).reduce((sum, spanElm) => sum + Number(spanElm.textContent), 0);
        document.getElementById('delprice').innerText = deliveryprice;

        var productprice = document.getElementById('goodsprice').textContent;
        var pricecart2 = deliveryprice +  parseInt(productprice)
        document.getElementById('sumprice').innerText = pricecart2;

        var dph = document.getElementById('dphprice').dataset.dph;
        document.getElementById('dphprice').innerText = Math.round(pricecart2 * (1 - dph));

    };

    for (var ia = 0; ia < elms.length; ia++) {
        elms[ia].addEventListener('click', cart2, false);
    }

    /* CART 3 */
    if(document.getElementById('cart-form-user')){

        document.getElementById('regToggle').onclick = function() {
            document.getElementById("cart-register-username").toggleAttribute("required");
            document.getElementById("cart-register-password").toggleAttribute("required");
            document.getElementById("cart-register-password-r").toggleAttribute("required");
        }
        document.getElementById('faToggle').onclick = function() {
            document.getElementById("cart-fa-company").toggleAttribute("required");
            document.getElementById("cart-fa-ico").toggleAttribute("required");
            document.getElementById("cart-fa-street").toggleAttribute("required");
            document.getElementById("cart-fa-city").toggleAttribute("required");
            document.getElementById("cart-fa-psc").toggleAttribute("required");
            document.getElementById("cart-fa-state").toggleAttribute("required");
        }
        document.getElementById('daToggle').onclick = function() {
            document.getElementById("cart-da-name").toggleAttribute("required");
            document.getElementById("cart-da-street").toggleAttribute("required");
            document.getElementById("cart-da-city").toggleAttribute("required");
            document.getElementById("cart-da-psc").toggleAttribute("required");
            document.getElementById("cart-fa-state").toggleAttribute("required");
        }
    
    }



}
