#language: en

@invoices
Feature: Manage Invoices
    As a Yuki QA App user
    Wants to add, edit or delete Invoices
    So I can manage Invoices


  Background:
    Given I am on the Home page
    
  Scenario Outline: Validate individual invoice amount
    When I click on the Invoices tab
    Then the amount for invoice "<invoiceNumber>" should be <expectedAmount> EUR

    Examples:
      | invoiceNumber | expectedAmount |
      | I523           | 499.99         |
      | I634           | 423.99         |
      | I125           | 39.99          |

  Scenario: Validate total invoice sum
    When I click on the Invoices tab
    Then the total sum of invoices should be correct