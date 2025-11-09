#language: en

@privacy
Feature: Manage Invoices
    As a Yuki QA App user
    Wants to add, edit or delete Invoices
    So I can manage Invoices


  Background:
    Given I am on the Home page

  Scenario: Validate Privacy Policy page content
    When I navigate to the Privacy page
    Then I should see the Privacy Policy title and content