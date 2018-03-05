function validate() {
    $("#registerForm").on("submit", function (e) {
        let isValid = validateFirst();
        if(!isValid) {
            e.preventDefault();
            $("#valid").css("display", "none");
        }else{
            $("#valid").css("display", "block")
        }
    })


    $("#company").on("change", function () {
        $("#companyInfo").toggle();
    })

    function validateFirst() {
        let result = true;

        let username = $("#username");
        let password = $("#password");
        let confirmPassword= $("#confirm-password");
        let email = $("#email");
        let company = $("#company");

        isValid(username, /^[a-z0-9]{3,20}$/i);
        isValid(password, /^\w{5,15}$/);
        isValid(confirmPassword, /^\w{5,15}$/, password);
        isValid(email, /\@.{0,}\./);

        if(company.is(":checked")) {
            let companyNumber = $("#companyNumber");
            let companyNumberValue = Number(companyNumber.val());

            if(companyNumberValue < 1000 || companyNumberValue > 9999){
                validateNow(companyNumber, false);
                result = false;
            }else{
                validateNow(companyNumber, true);
            }
        }

        //console.log(username);

        function isValid(element, regex, confirm) {
            confirm === undefined ? confirm = element : confirm;

            if(regex.test(element.val()) && confirm.val() === element.val())
            {
                validateNow(element, true);
            }else {
                validateNow(element, false);
                if(confirm.val() !== element.val())
                {
                    validateNow(confirm, false);
                }
                result = false;
            }
        }

        function validateNow(element, isValid) {
            if(isValid){
                element.css("border-color", "");
            }else{
                element.css("border-color", "red");
            }
        }

        return result;
    }



}
