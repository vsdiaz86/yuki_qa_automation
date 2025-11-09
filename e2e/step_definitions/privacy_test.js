const { I, PrivacyPage } = inject();

When('I navigate to the Privacy page', async () => {
  await PrivacyPage.navigateToPrivacyPage();
});

Then('I should see the Privacy Policy title and content', async () => {
  await PrivacyPage.verifyHeader();
  await PrivacyPage.verifyContent();
});
