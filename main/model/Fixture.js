class Fixture {

  async SetUp() {
    await browser.maximizeWindow();
  }

  TearDown(){
    console.log('Tear Down')
  }
}
module.exports = new Fixture();
