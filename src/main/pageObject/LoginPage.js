const AbstractPage = require("../AbstractPage");
const username_txt = "#customer_email";
const password_txt = "#customer_password";
const login_btn = ".btn-signin";
const name_txt = "//div[@id='customer_sidebar']/h2";

class loginPage extends AbstractPage {
  async inputUserName(username) {
    await this.waitForElementDisplayed(username_txt);
    await this.inputTextInElement(username_txt, username);
    await browser.pause(3000);
    return this;
  }

  async inputPassword(password) {
    await this.waitForElementDisplayed(password_txt);
    await this.inputTextInElement(password_txt, password);
    await browser.pause(3000);
    return this;
  }

  async clickOnLoginButton() {
    await this.waitForElementDisplayed(login_btn);
    await this.clickOnButton(login_btn);
    await browser.pause(3000);
    return this;
  }

  async isFullNameDisplayed() {
    return this.isElementDisplayed(name_txt);
  }

  async open(url) {
    super.open(url);
  }
}

module.exports = new loginPage();
