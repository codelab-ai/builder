import { SelectorMatcherOptions } from '@testing-library/cypress'
import { Matcher } from '@testing-library/dom'
import * as JQuery from 'jquery'
import '@testing-library/cypress/add-commands'

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

/**
 * Merges with @testing-library/cypress, need to follow their global declare
 */
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable<Subject> {
      login(): Chainable<void>
      impersonateUser(): void
      findByButtonText: typeof findByButtonText
      findElementByText: typeof findElementByText
      findByModalTitle: typeof findByModalTitle
      openSelectByLabel: typeof openSelectByLabel
      getSelectedOptionByLabel: typeof getSelectedOptionByLabel
      getSelectOptionsContent: typeof getSelectOptionsContent
      getSelectDropdown: typeof getSelectDropdown
      getSelectOptionItemByValue: typeof getSelectOptionItemByValue
    }
  }
}

Cypress.Commands.add('login', () => {
  Cypress.log({
    name: 'loginViaAuth0',
  })

  //Ideally, we would login using the Password grant, with an API call, like this:
  //https://auth0.com/blog/end-to-end-testing-with-cypress-and-auth0/
  //But we use nextjs-auth0 to manage our authentication process.
  //And it encrypts the cookies and doesn't expose the encryption process
  //Meaning that even if we did make the login request and got the token, we can't easily store it in our cookie
  //since we don't have access to how it stores it
  //See this for context https://github.com/auth0/nextjs-auth0/issues/335
  //So just login using the UI
  //We can maybe use this https://github.com/sir-dunxalot/cypress-nextjs-auth0 but after this gets merged https://github.com/sir-dunxalot/cypress-nextjs-auth0/pull/14

  const email = Cypress.env('AUTH0_USER') //Username and password are from .env
  const password = Cypress.env('AUTH0_PASSWORD') //Username and password are from .env

  cy.visit('/')
  cy.get('.login-button').click()

  cy.get('body').then((body) => {
    if (body.find('input[name=username]').length) {
      cy.get('input[name=username]').type(email)
      cy.get('input[name=password]').type(password)
      cy.get('button[type=submit][value=default]').click()
    } else {
      //Already logged in
      cy.url().should('be.equal', `${Cypress.config('baseUrl')}/`)
    }
  })
})

export const findByButtonText = (
  text: Matcher,
  options?: SelectorMatcherOptions,
): Cypress.Chainable<JQuery<HTMLButtonElement>> => {
  return cy
    .findByText(text, { exact: true, timeout: 5000, ...options })
    .closest('button')
}

Cypress.Commands.add('findByButtonText', findByButtonText)

export const findElementByText = <K extends keyof HTMLElementTagNameMap>(
  text: Matcher,
  element: K,
  options?: SelectorMatcherOptions,
): Cypress.Chainable<JQuery<HTMLElementTagNameMap[K]>> => {
  return cy
    .findByText(text, { exact: true, timeout: 5000, ...options })
    .closest<K>(element)
}

Cypress.Commands.add('findElementByText', findElementByText)

export const findByModalTitle = (
  text: Matcher,
  options?: SelectorMatcherOptions,
): Cypress.Chainable<JQuery<HTMLElement>> => {
  return cy
    .findByText(text, { exact: true, timeout: 5000, ...options })
    .closest('.ant-modal-wrap ')
}

Cypress.Commands.add('findByModalTitle', findByModalTitle)

export const openSelectByLabel = (
  text: Matcher,
  options?: SelectorMatcherOptions,
): Cypress.Chainable<JQuery<HTMLElement>> => {
  return cy.findByLabelText(text, options).closest('.ant-select').click()
}

Cypress.Commands.add('openSelectByLabel', openSelectByLabel)

export const getSelectDropdown = () => {
  // NOTE: the list appears in DOM only after first
  return cy.get('.ant-select-dropdown:not(.ant-select-dropdown-hidden)')
}

Cypress.Commands.add('getSelectDropdown', getSelectDropdown)

export const getSelectedOptionByLabel = (
  text: Matcher,
  options?: SelectorMatcherOptions,
): Cypress.Chainable<JQuery<HTMLElement>> => {
  // NOTE: the list appears in DOM only after first
  return cy
    .findByLabelText(text, options)
    .closest('.ant-select-selector')
    .find('.ant-select-selection-item')
}

Cypress.Commands.add('getSelectedOptionByLabel', getSelectedOptionByLabel)

export const getSelectOptionsContent = (): Cypress.Chainable<
  JQuery<HTMLElement>
> => {
  // NOTE: the list appears in DOM only after first
  return getSelectDropdown().find('.ant-select-item-option-content')
}

Cypress.Commands.add('getSelectOptionsContent', getSelectOptionsContent)

export const getSelectOptionItemByValue = (
  value: Matcher,
): Cypress.Chainable<JQuery<HTMLElement>> => {
  return cy
    .getSelectDropdown()
    .find('.rc-virtual-list')
    .findByText(value)
    .closest('.ant-select-item')
}

Cypress.Commands.add('getSelectOptionItemByValue', getSelectOptionItemByValue)
