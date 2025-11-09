const { I } = inject();
const BasePage = require('./base_page.js');

class HomePage extends BasePage {

  async navigateToHome() {
    await I.amOnPage('/');
    //await super.isCurrentPage();
  }

  async verifyUrl() {
    I.seeInCurrentUrl('/');
  }

  async verifyTextVisible(text) {
    I.see(text);
  }
}

module.exports = new HomePage();
