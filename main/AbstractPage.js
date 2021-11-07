module.exports = class AbstractPage {
  async clickOnButton(element) {
    await $(element).click();
  }

  async waitForElementDisplayed(element) {
    await $(element).waitForDisplayed(5000);
  }

  async inputTextInElement(element, value) {
    await $(element).setValue(value);
  }

  async getTextElement(element) {
    let text = await $(element).getText();
    return text;
  }

  async isElementDisplayed(element) {
    return await $(element).isDisplayed();
  }

  async open(url) {
    return browser.url(url);
  }
};
