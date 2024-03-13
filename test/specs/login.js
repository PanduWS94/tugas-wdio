const Page = require("../pages/page");
const LoginPage = require("../pages/login.page");

describe('kasirAja Login Tests menggunakan POM', () => {
    beforeEach(async () => {
        Page.open('https://kasirdemo.belajarqa.com/')
    });

    it('harus menampilkan error ketika username salah', async () => {
        await LoginPage.login('subroto.panduwibisono', '123321saja');
        await LoginPage.assertErrorMessage('Epic sadface: Username and password do not match any user in this service');
    });

    it('harus menampilkan error ketika password salah', async () => {
        await LoginPage.login('subroto.panduwibisono@gmail.com', '123321');
        await LoginPage.assertErrorMessage('Epic sadface: Username and password do not match any user in this service');
    });

    it('harus berhasil login dengan data valid', async () => {
        await LoginPage.login('subroto.panduwibisono@gmail.com', '123321saja');
        await expect(browser).toHaveUrl('https://kasirdemo.belajarqa.com/dashboard');
    });
    
});