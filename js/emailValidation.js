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
