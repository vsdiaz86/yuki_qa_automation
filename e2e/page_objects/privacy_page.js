const { I } = inject();
const BasePage = require('./base_page.js');

class PrivacyPage extends BasePage {
  constructor() {
    super();
    this.privacyTab = '#nav-item-link-privacy';
    this.header = 'h1';
    this.content = 'p';
    this.expectedHeader = 'Privacy Policy';
    this.expectedText = "Use this page to detail your site's privacy policy.";
  }

  async navigateToPrivacyPage() {
    await this.click(this.privacyTab);
  }

  async verifyHeader() {
    I.see(this.expectedHeader, this.header);
  }

  async verifyContent() {
    I.see(this.expectedText, this.content);
  }
}

module.exports = new PrivacyPage();
