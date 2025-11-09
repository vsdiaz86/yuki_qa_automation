const { I, InvoicePage } = inject();

When('I click on the Invoices tab', async () => {
  await InvoicePage.clickInvoicesTab();
});

Then('the amount for invoice {string} should be {float} EUR', async (invoiceNumber, expectedAmount) => {
  await InvoicePage.verifyInvoiceAmount(invoiceNumber, expectedAmount);
});

Then('the total sum of invoices should be correct', async () => {
  await InvoicePage.verifySumIsCorrect();
});
