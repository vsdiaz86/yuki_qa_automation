const { I, HomePage } = inject();

Given('I am on the Home page', async () => {
  await HomePage.navigateToHome();
});

Then('I should be on the correct URL', async () => {
  await HomePage.verifyUrl();
});

Then('I should see the text {string}', async (text) => {
  await HomePage.verifyTextVisible(text);
});
