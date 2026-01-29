import puppeteer from "puppeteer";

describe("Form", () => {
  let browser;
  let page;

  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 100,
      devtools: true,
    });

    page = await browser.newPage();
  });

  test("Formation of elements", async () => {
    await page.goto("http://localhost:9090");
    await page.waitForSelector("#result-message");
    expect(true).toBeTruthy();
  });

  test("Entering a valid card number", async () => {
    jest.setTimeout(20000);

    await page.goto("http://localhost:9090");

    await page.waitForSelector("#credit-card-widget");
    const form = await page.$("#credit-card-widget");
    const input = await form.$("#card-number-input");
    const submit = await form.$("#validate-button");

    await input.type("4556658505858758");
    await submit.click();
    await page.waitForSelector(".active");
    expect(true).toBeTruthy();
  }, 20000);

  afterEach(async () => {
    await browser.close();
  });
});
