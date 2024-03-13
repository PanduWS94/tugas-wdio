const Page = require("../pages/page");
const LoginPage = require("../pages/login.page");

describe("hapus produk dan kategori", () => {
    beforeEach(async () => {
        Page.open('https://kasirdemo.belajarqa.com/')
        await LoginPage.login('subroto.panduwibisono@gmail.com', '123321saja');
        await expect(browser).toHaveUrl('https://kasirdemo.belajarqa.com/dashboard');
    });

  it("tests hapus produk", async () => {
    await browser.pause(10000);
    await browser.$("//*[@id=\"root\"]/div/div/div[1]/div/a[6]/div/div/div").click()
    await browser.$("//tbody[@class='css-0']/tr[1]//button[@class='chakra-button chakra-menu__menu-button css-pu8osu']").click()
    await browser.$("//tbody[@class='css-0']/tr[1]//button[@class='chakra-menu__menuitem css-13c7rae']").click()
    await browser.$("aria/Delete").click()
    await browser.$("//*[@id=\"root\"]/div/div/div[1]/div/a[5]/div/div/div").click()
    await browser.$("//tbody[@class='css-0']/tr[1]//button[@class='chakra-button chakra-menu__menu-button css-pu8osu']").click()
    await browser.$("//tbody[@class='css-0']/tr[1]//button[@class='chakra-menu__menuitem css-13c7rae']").click()
    await browser.$("aria/Delete").click()
    const toast = $("#chakra-toast-manager-top-right");
    await toast.waitForDisplayed();
    await expect(toast).toHaveTextContaining("success");
  });
});
