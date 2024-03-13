const Page = require("../pages/page");
const LoginPage = require("../pages/login.page");

describe("kategori", () => {
    beforeEach(async () => {
        Page.open('https://kasirdemo.belajarqa.com/')
        await LoginPage.login('subroto.panduwibisono@gmail.com', '123321saja');
        await expect(browser).toHaveUrl('https://kasirdemo.belajarqa.com/dashboard');
    });

    it('menambah kategori baru', async () => {
        await browser.pause(2000)
        await browser.$("a:nth-of-type(5) > div > div > div").click()
        await browser.$("aria/tambah").click()
        await browser.$("#nama").setValue("Rokok")
        await browser.$("#deskripsi").setValue("berisi seluruh merk rokok")
        await browser.$("aria/simpan").click()
        const toast = $("#chakra-toast-manager-top-right");
        await toast.waitForDisplayed();
        await expect(toast).toHaveTextContaining("success");
    });
});