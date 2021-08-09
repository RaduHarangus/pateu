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

