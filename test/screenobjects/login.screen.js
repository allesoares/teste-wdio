import { $, driver } from '@wdio/globals';

class LoginScreen {
    get loginTab() { return $('~Login'); }
    get emailInput() { return $('~input-email'); }
    get passwordInput() { return $('~input-password'); }
    get loginButton() { return $('~button-LOGIN'); }
    get alertTitle() { return $('id=com.wdiodemoapp:id/alert_title'); }
    get alertMessage() { return $('id=android:id/message'); }
    get alertOkButton() { return $('id=android:id/button1'); }

    async open() {
        await this.loginTab.click();
        await this.emailInput.waitForDisplayed();
    }

    async login(email, password) {
        await this.emailInput.setValue(email);
        await this.passwordInput.setValue(password);
        if (await driver.isKeyboardShown()) {
            await driver.hideKeyboard();
        }
        await this.loginButton.click();
    }
}

export default new LoginScreen();
