import puppeteer from "puppeteer";

describe("Page start", () => {
  let browser;
  let page;

  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 100,
      devtools: false,
    });

    page = await browser.newPage();
  });

  test("my test", async () => {
    await page.goto("http://localhost:9090");
    await page.waitForSelector("body");
    expect(true).toBeTruthy();
  });

  afterEach(async () => {
    if (browser) {
    await browser.close();
    }
  });
});
