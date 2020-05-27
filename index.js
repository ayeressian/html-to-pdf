const puppeteer = require('puppeteer');
const count = 10;
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  console.time("timer");
  for (let i = 0; i < count; ++i) {
    await page.goto(`file://${__dirname}/test.html`);
    await page.pdf({
      path: 'test.pdf',
      format: 'A4',
      margin: {
        top: "20px",
        left: "20px",
        right: "20px",
        bottom: "20px"
      }
    });
  }
  console.timeEnd("timer");
  await browser.close();
})();