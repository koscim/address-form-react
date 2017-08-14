## Introduction

In this exercise, you will convert a HTML form into a controlled React component.

## Getting Started

```no-highlight
$ et get address-form
$ cd address-form
$ npm install
$ npm start
```
Open up your browser and navigate to `http://localhost:8080`. You should have no errors in your console.

## Instructions

Take a look at the `FormContainer` component. It is your job to convert this
into a set of React form element components. Have the parent `FormContainer`
component manage the state of the form by storing the form data in `this.state`.

## Tips

* Focus on turning the form into a series of controlled components.
* In order to prove to yourself that your form is wired up correctly, have the
  "Submit" button print the state of the Form container to the console.

## Stretch Goals (non-core)

* Write validations for the form fields and notify the user if the validations fail.
* Turn the state field into a select menu that contains all of the U.S. states.
