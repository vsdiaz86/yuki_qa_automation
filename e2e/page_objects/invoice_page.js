const { I } = inject();
const assert = require('assert');
const BasePage = require('./base_page.js');

class InvoicePage extends BasePage {
  constructor() {
    super();
    // Locators
    this.invoicesTab = '#nav-item-link-invoices';
    this.amountCells = 'table tbody tr:not(.summary-row) td.number-cell';
    this.summaryRow = 'table tbody tr.summary-row td.number-cell';
  }

  async clickInvoicesTab() {
    I.click(this.invoicesTab);
  }

  async verifyTextVisible(text) {
    I.see(text);
  }

  async getAmounts() {
    const amounts = await I.grabTextFromAll(this.amountCells);
    return amounts.map(a => parseFloat(a.replace(' EUR', '')));
  }

  async getSummaryTotal() {
    const totalText = await I.grabTextFrom(this.summaryRow);
    return parseFloat(totalText.replace(' EUR', ''));
  }

  async verifyInvoiceAmount(invoiceNumber, expectedAmount) {
    const amountSelector = locate('tr')
      .withDescendant(locate('td').withText(invoiceNumber))
      .find('td.number-cell');

    const actualAmountText = await I.grabTextFrom(amountSelector);
    const actualAmount = parseFloat(actualAmountText.replace(' EUR', ''));

    assert.strictEqual(
      actualAmount,
      expectedAmount,
      `Amount for invoice ${invoiceNumber} does not match. Expected: ${expectedAmount}, Got: ${actualAmount}`
    );
  }

  async verifySumIsCorrect() {
    const amounts = await this.getAmounts();
    const expectedSum = amounts.reduce((a, b) => a + b, 0);
    const displayedSum = await this.getSummaryTotal();

    assert.strictEqual(
      expectedSum,
      displayedSum,
      `❌ Total mismatch: Expected ${expectedSum}, but got ${displayedSum}`
    );
  }
}

module.exports = new InvoicePage();