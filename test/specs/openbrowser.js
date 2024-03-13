const assert = require('assert');

describe('kasirAja Test', () => {
    it('berhasil membuka URL kasirAja', async () => {
        await browser.url('https://kasirdemo.belajarqa.com/');
        await browser.setTimeout({ 'pageLoad': 5000 });
        const currentURL = await browser.getUrl();
        const expectedURL = 'https://kasirdemo.belajarqa.com/login';
        await assert.strictEqual(currentURL, expectedURL, `URL is not as expected. Actual: ${currentURL}, Expected: ${expectedURL}`);
    });
});