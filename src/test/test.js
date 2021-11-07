const loginPage = require("../main/pageObject/LoginPage");
const Fixture = require("../main/model/Fixture");
const data = require("../test/resource/testdata.json");
const assert = require("assert");

describe("Test", () => {
  beforeEach("Before each Test", async () => {
    await Fixture.SetUp();
    await loginPage.open(data.Url);
  });

  afterEach("After each Test", () => {
    Fixture.TearDown();
  });

  it("Test Login Page", async () => {
    await loginPage.inputUserName(data.account.username);
    await loginPage.inputPassword(data.account.password);
    await loginPage.clickOnLoginButton();
    assert.ok(await loginPage.isFullNameDisplayed(), "Disable");
  });
});
