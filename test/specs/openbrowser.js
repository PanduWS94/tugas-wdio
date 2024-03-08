const assert = require('assert');

describe('SauceDemo Test', () => {
    it('berhasil membuka URL saucedemo', async () => {
        // Buka URL
        await browser.url('https://www.saucedemo.com');
        await browser.setTimeout({ 'pageLoad': 5000 });

        // Lakukan assertion pada URL
        const currentURL = await browser.getUrl();
        const expectedURL = 'https://www.saucedemo.com/';

        await assert.strictEqual(currentURL, expectedURL, `URL is not as expected. Actual: ${currentURL}, Expected: ${expectedURL}`);
    });
});

describe('SauceDemo Login', () =>{
    it('harus bisa login', async () => {
        await browser.url('https://www.saucedemo.com/');
  
        // Input valid username and password
        await $('#user-name').setValue('standard_user');
        await $('#password').setValue('secret_sauce');
  
        // Click login button
        await $('#login-button').click();
  
        // Assertion on the title after login
        const pageTitle = await browser.getTitle();
        const expectedTitle = 'Swag Labs';
  
        assert.strictEqual(pageTitle, expectedTitle, `Title is not as expected. Actual: ${pageTitle}, Expected: ${expectedTitle}`);
    });
});