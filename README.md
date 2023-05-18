# constraint_validation_api

Constraint Validation API - Form Validation

## Description

This project demonstrates the use of the Constraint Validation API in JavaScript to validate form inputs such as email, zip code, country, password, and password confirmation.

The Constraint Validation API provides a set of properties and methods that allow you to perform client-side form validation without the need for custom JavaScript code. It leverages the built-in HTML5 validation attributes and adds additional functionality to enhance the validation process.

## Features

- Email validation using the Constraint Validation API:

  - Checks if the email address is in a valid format.
  - Displays an error message if the email is invalid or missing.

- Zip code validation using the Constraint Validation API:

  - Ensures the zip code is a numeric value and not empty.
  - Validates the length of the zip code (should be <= 5 numbers).
  - Displays appropriate error messages based on validation results.

- Country validation using the Constraint Validation API:

  - Checks if the country field is empty.
  - Displays an error message if the country is missing.

- Password validation using the Constraint Validation API:

  - Validates the password length (should be at least 8 characters).
  - Displays an error message if the password is too short or missing.

- Password confirmation validation using the Constraint Validation API:
  - Validates that the password confirmation matches the original password.
  - Displays an error message if the passwords do not match or if the confirmation is missing.

## Usage

1. Clone the repository:
