const page = require ("./page");

class LoginPage {
    get emailInput(){
        return $('#email');
    }

    get passwordInput(){
        return $('#password');
    }

    get loginButton(){
        return $('.chakra-button.css-1n8i4of');
    }

    get errorMsg(){
        return $('//*[@data-test="error"]');
    }

    async login(email, password){
        await this.emailInput.setValue(email);
        await this.passwordInput.setValue(password);
        await this.loginButton.click();
    }

    async assertErrorMessage(expectedErrorMessage){

    }
}

module.exports = new LoginPage();