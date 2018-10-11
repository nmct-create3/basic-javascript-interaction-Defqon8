//
// document.addEventListener( 'DOMContentLoaded', function() {
//         console.log( 'Script loaded!' );
//         function handleFloatingLabel(){
//             document.querySelector("js-name-input").addEventListener('focusout',function{
//                 if(document.getElementById("username").value != ""){
//                     document.getElementById('username').classList.add("is-floating")
//
//                 }
//             });
//         }
//     });


document.addEventListener( 'DOMContentLoaded', function() {
    console.log( 'Script loaded!' );
    handleFloatingLabel();
    // handlePasswordSwitcher();
    handleQualityRange();

})

function handleFloatingLabel(){
    document.querySelector(".js-name-input").addEventListener('focusout', function(){
        if(document.getElementById('username').value != ""){
            document.querySelector('.js-floating-label').classList.add("is-floating")
            }

        else {
            document.querySelector('.js-floating-label').classList.remove("is-floating")
        }
    });
}

function handlePasswordSwitcher(){
    document.querySelector(".js-svg").addEventListener('click', function(){
        if(document.querySelector(".js-svg").checked){
            document.querySelector(".js-password-input").type='text'
        }
        else {
            document.querySelector(".js-password-input").type='password'

        }
    });
}

function handleQualityRange(){
    let rangeInput = document.querySelector('.js-quality-input');
    let rangeHolder = document.querySelector('.js-range-holder');

    rangeInput.addEventListener('input', function(){
        rangeHolder.setAttribute('data-value', rangeInput.value);
        rangeHolder.style.marginLeft= `${rangeInput.value}%`;
    });
}



// function handleDropdownButton (){
//
// }
