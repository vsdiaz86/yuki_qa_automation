#language: en

@homePage
Feature: Manage Invoices
    As a Yuki QA App user
    Wants to add, edit or delete Invoices
    So I can manage Invoices

    
  Scenario: Validate Home page URL and content
    Given I am on the Home page
    Then I should be on the correct URL
    And the page should contain "Welcome"
    And the page should contain "Navigate to all pages using the menu."
    And the page should contain "Retrieve the amount for 'I634' and verify the amount is equal to '423.99 EUR'"
    And the page should contain "Are there opportunities to reuse certain code?"


