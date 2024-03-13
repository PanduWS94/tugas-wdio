const Page = require("../pages/page");
const LoginPage = require("../pages/login.page");

describe("kategori", () => {
    beforeEach(async () => {
        Page.open('https://kasirdemo.belajarqa.com/')
        await LoginPage.login('subroto.panduwibisono@gmail.com', '123321saja');
        await expect(browser).toHaveUrl('https://kasirdemo.belajarqa.com/dashboard');
    });

  it("tests tambah produk", async () => {
    await browser.pause(5000);
    await browser.$("//*[@id=\"root\"]/div/div/div[1]/div/a[6]/div/div/div").click()
    await browser.$("aria/tambah").click()
    await browser.$("#nama").setValue("garpit")
    await browser.$("#deskripsi").setValue("satu bungkus")
    await browser.$("#harga\\ beli").setValue("2.5000")
    await browser.$("#harga\\ jual").setValue("2.7000")
    await browser.$("#stok").setValue("100")
    await browser.$("#kategori").click()
    await browser.$('.//td[.="Rokok"]').click()
    await browser.$("aria/simpan").click()
    const toast = $("#chakra-toast-manager-top-right");
    await toast.waitForDisplayed();
    await expect(toast).toHaveTextContaining("success");
  });
});