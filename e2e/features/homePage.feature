#language: en

@homePage
Feature: Manage Invoices
    As a Yuki QA App user
    Wants to add, edit or delete Invoices
    So I can manage Invoices

    
  Scenario: Validate Home page URL and content
    Given I am on the Home page
    Then I should be on the correct URL
    And I should see the text "Welcome"
    And I should see the text "In this exercise, you're expected to:"
    And I should see the text "Navigate to all pages using the menu."
    And I should see the text "On the Invoices page, verify the sum of all the invoices is correct in the summary row."
    And I should see the text "Retrieve the amount for '1634' and verify the amount is equal to '423.99 EUR'"
    And I should see the text "Remark:"
    And I should see the text "Assume more pages or functionality can be added/changed at any given time."
    And I should see the text "Are there opportunities to reuse certain code?"




