$(document).ready(function(){
    $('.carousel').slick({
        infinite: true,
        dots: false,
        speed: 500,
        autoplay: true,
        // autoplaySpeed: 2000,
        fade: true,
        cssEase: 'linear',
        arrows: true,
        // prevArrow: '<button type="button" className="slick-prev"><span>&#8249;</span></button>',
        // nextArrow: '<button type="button" className="slick-prev"><span>&#8250;</span></button>'
    });
});



$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});

// const email = document.getElementById('exampleInputEmail1');
// const pass = document.getElementById('exampleInputPassword1');
//
// const div = document.createElement('div');
// div.setAttribute('class', 'popup-wrapper');
// pass.parentElement.appendChild(div);
//
// const mypopup = document.createElement('p');
// mypopup.setAttribute('class','popup-text');
// mypopup.setAttribute('id','myPopup');
// mypopup.innerText = 'The password must be at least 8 characters long';
// div.appendChild(mypopup);
//
// email.addEventListener('focus',(event) => {
//     event.target.value = "name@name.com";
// });
//
// pass.onfocus = function() {
//     mypopup.classList.toggle("show");
// }
//
// pass.onblur = function() {
//     mypopup.classList.toggle("show");
// }
//
// pass.onkeyup = function() {
//     let passLength = this.value.length;
//     mypopup.innerText = passLength >= 8 ? 'Thank you!' : 'Enter more characters!';
// };
//
// document.getElementById('form').onsubmit = function() {
//     if ((email.value.length <= 0) || (pass.value.length <= 0) ) {
//         alert('Nu ati introdus toate datele necesare (email si parola)!');
//     } else {
//         alert(`Are you sure you want to submit these values: \n
//                 email: ${email.value} \n
//                 password: ${pass.value} ?`);
//     }
// };




const categoryWrapper = document.getElementById('categoryWrapper');
const menuButton = document.getElementById('menuButton');

menuButton.classList.add('notransition');

menuButton.addEventListener('click', function () {
    categoryWrapper.classList.toggle('show');
});

$(document).ready(function() {
    // display the text "Added to cart" when clicked on a menu icon
    $('.category__item').on('click', function() {
        $(this).html("<span>Added to cart</span>");
    });
});

$('#modalForm').on('submit', function(event) {
    event.preventDefault();
    let formValues = $(this).serialize();
    // console.log(formValues);

    $.ajax({
        url: "../ajax/ajaxtest.txt",
        type: "POST",
        async: false,
        data: formValues,
        success: function(result) {
            console.log(result);
        },
        error: function(err) {
            console.log("error: ", err);
        }
    });
});



// var triggerTabList = [].slice.call(document.querySelectorAll('#myTab button'))
// triggerTabList.forEach(function (triggerEl) {
//     var tabTrigger = new bootstrap.Tab(triggerEl)
//
//     triggerEl.addEventListener('click', function (event) {
//         event.preventDefault()
//         tabTrigger.show()
//     })
// })

const $discountForm = $('#discountForm');
const $discountEmail = $('#discountEmail');
const $discountSubmit = $('#discountSubmit');
const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

$discountSubmit.on('click', function(e) {
    e.preventDefault();
    let validationMessageBox = $('#validationMessageBox');
    let validationText = regex.test($discountEmail.val()) ? "Valid e-mail" : "The e-mail address entered is invalid.";

    if (!validationMessageBox.length) {
        let validationMessageBox = $("<div></div>");
        validationMessageBox.attr('id', 'validationMessageBox');
        validationMessageBox.append(validationText);
        $discountForm.append(validationMessageBox);
    } else {
        validationMessageBox.html(validationText);
    }

    if (validationText === true) {
        // $discountForm.trigger("submit");
        $discountForm.submit();
    }
});


$(document).ready(function() {
    let $scrollTop = $('#scrollTop');
    $(window).scroll(function() {
        if ($(document).scrollTop() > 600) {
            $scrollTop.addClass('scroll-top--active');
        } else {
            $scrollTop.removeClass('scroll-top--active');
        }
    });
});