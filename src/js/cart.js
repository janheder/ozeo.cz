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


            var codePriceN = 0;

            const codePrice =  parseFloat(document.getElementById('codePrice').innerText);

            if (codePrice){
              codePriceN = codePrice;
            }else{
               codePriceN = 0;
            }


            const pricegoods = document.querySelectorAll('.cart-item-price span ');
            const result = Array.from(pricegoods).reduce((sum, spanElm) => sum + Number(spanElm.textContent), 0);

            if (document.getElementById('codePriceWrap').innerHTML.indexOf("%") != -1) { 
                codePriceNN = codePriceN*(-0.01);
                const result_f = (result-(result*codePriceNN)).toString().replace(/\./g, ',');
                document.getElementById('goodsprice').innerText = result_f;
            }else{
                const result_f = (result+codePriceN).toString().replace(/\./g, ',');
                document.getElementById('goodsprice').innerText = result_f;
            }
            
            

            const pricesum = document.querySelectorAll('.cart-item-price span, #delprice');
            const result2 = Array.from(pricesum).reduce((sum, spanElm) => sum + Number(spanElm.textContent), 0); 

            if (document.getElementById('codePriceWrap').innerHTML.indexOf("%") != -1) { 
                codePriceNN = codePriceN*(-0.01);
                const result2_f = (result2-(result*codePriceNN)).toString().replace(/\./g, ',');
                document.getElementById('sumprice').innerText = result2_f;
            }else{
                if(document.getElementById('codePrice').getAttribute("data-percentage") === null){
               
                    const result2_f = (result2+codePriceN).toString().replace(/\./g, ',');
                    document.getElementById('sumprice').innerText = result2_f;

                }else{
                   
                    const salePer = document.getElementById('codePrice').dataset.percentage;
                    document.getElementById('codePrice').innerHTML = result2*salePer;

                    const x = result2 - (result2*salePer);
              
                    const result2_f = (x).toString().replace(/\./g, ',');
                    document.getElementById('sumprice').innerText = result2_f;

                }

            }

     
            

            let shipping = document.getElementById('cartFreeShipping');
            let shippingTreshold = parseFloat(shipping.dataset.price);
            let goodsPrice = parseFloat(document.getElementById('goodsprice').innerText.replace(/,/g, '.'));
            let shippingLeft = shippingTreshold - goodsPrice;
            if(shippingLeft <= 0){
                shipping.innerHTML = "Dopravu máte zdarma";
            }else{
                shipping.innerHTML = "Nakupte ještě za " + shippingLeft + " Kč a máte dopravu zdarma";
            }
        

        };
        

        input.addEventListener('change', calcEvent);
        calcEvent.call(input); 
    }

    function recountCart(){
        let inputs = document.querySelectorAll('.cart-item-stepper .num_items');

        for (let i = 0; i < inputs.length; i++) {
            let input = inputs[i];
            addInputListener(input);
        }
    
    }
    recountCart();








    /* CART 2 */
    function recountDeliveryCart(){
    var elms = document.querySelectorAll('.cart-table-shipping-item');

    function deliveryCart() {
        const pricedel = document.querySelectorAll('.cart-table-shipping-item input:checked ~ .cart-table-shipping-price span');
        const deliveryprice = Array.from(pricedel).reduce((sum, spanElm) => sum + Number(spanElm.textContent), 0);
        document.getElementById('delprice').innerText = deliveryprice;

        var productprice = document.getElementById('goodsprice').textContent;
        var pricecart2 = deliveryprice +  parseInt(productprice)
        document.getElementById('sumprice').innerText = pricecart2;



    };

    for (var ia = 0; ia < elms.length; ia++) {
        elms[ia].addEventListener('click', deliveryCart, false);
    }
    }
    recountDeliveryCart();


    /* CART 3 */
    if(document.getElementById('cart-form-user')){

        document.getElementById('regToggle').onclick = function() {
            document.getElementById("cart-register-password").toggleAttribute("required");
        }
        document.getElementById('faToggle').onclick = function() {
            document.getElementById("cart-fa-company").toggleAttribute("required");
            document.getElementById("cart-fa-ico").toggleAttribute("required");
            document.getElementById("cart-fa-street").toggleAttribute("required");
            document.getElementById("cart-fa-city").toggleAttribute("required");
            document.getElementById("cart-fa-psc").toggleAttribute("required");
            document.getElementById("cart-fa-state").toggleAttribute("required");
        }
    
    }








}