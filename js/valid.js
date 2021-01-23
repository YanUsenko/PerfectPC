$(document).ready(function() {
    $('#form').validate({
        rules: {
            name: {
                required: true,
            },
            email: {
                required: true,
                email: true,
            }
        },
        messages: {
            name: "Введите имя",
            email: "Введите E-mail",
        }
    });
});