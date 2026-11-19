import { expect } from '@wdio/globals';
import LoginScreen from '../screenobjects/login.screen.js';

describe('Login no WDIO Demo App', () => {
    it('deve exibir confirmação ao entrar com e-mail e senha válidos', async () => {
        await LoginScreen.open();
        await expect(LoginScreen.emailInput).toBeDisplayed();

        await LoginScreen.login('aluno@example.com', 'Teste123!');

        await expect(LoginScreen.alertTitle).toHaveText('Success');
        await expect(LoginScreen.alertMessage).toHaveText('You are logged in!');
        await LoginScreen.alertOkButton.click();
        await expect(LoginScreen.alertTitle).not.toBeExisting();
    });

    it('deve exibir erro abaixo do campo ao informar e-mail inválido', async () => {
        await LoginScreen.open();
        await LoginScreen.login('email-invalido', 'Teste123!');

        await expect(LoginScreen.emailError).toBeDisplayed();
        await expect(LoginScreen.emailError).toHaveText('Please enter a valid email address');
        await expect(LoginScreen.alertTitle).not.toBeExisting();
    });
});
