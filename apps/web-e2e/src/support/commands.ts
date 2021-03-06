import '@testing-library/cypress/add-commands'
import { CreateAppGql, CreateAppInput } from '@codelab/codegen/graphql'
import { Library_Insert_Input } from '@codelab/codegen/hasura'
import { AtomType } from '@codelab/frontend/shared'
import { SelectorMatcherOptions } from '@testing-library/cypress'
import { ByRoleOptions, Matcher } from '@testing-library/dom'
import { print } from 'graphql'
import * as JQuery from 'jquery'

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
      getCurrentUserId: typeof getCurrentUserId
      getByTestId: typeof getByTestId
      /** Makes an post request to the next.js proxy graphql api endpoint as the logged in user */
      graphqlRequest: typeof graphqlRequest
      dGraphGraphqlRequest: typeof dGraphGraphqlRequest
      /** Creates an app for the current logged in user */
      createApp: typeof createApp
      createAtom: typeof createAtom
      deleteAllAtoms: typeof deleteAllAtoms
      createComponent: typeof createComponent
      /** Creates an app for the current logged in user */
      createLibrary: typeof createLibrary
      createPage: typeof createPage
      findByButtonText: (
        text: Matcher,
        options?: SelectorMatcherOptions,
      ) => Cypress.Chainable<JQuery<HTMLButtonElement>>
      /** Finds a button within the visible tab pane's header, that has a "plus" icon inside it **/
      findMainPanelHeaderPlusButton: typeof findMainPanelHeaderPlusButton
      findElementByText: typeof findElementByText
      findByModalTitle: typeof findByModalTitle

      openSelectByLabel: (
        text: Matcher,
        options?: SelectorMatcherOptions,
      ) => ReturnType<typeof openSelectByLabel>
      getSelectedOptionByLabel: typeof getSelectedOptionByLabel
      getSelectOptionsContent: typeof getSelectOptionsContent
      getSelectDropdown: typeof getSelectDropdown
      getSelectOptionItemByValue: typeof getSelectOptionItemByValue
      getSpinner: typeof getSpinner
      getOpenedModal: typeof getOpenedModal
      getPaneMain: (
        options?: Parameters<typeof cy.get>[1],
      ) => Cypress.Chainable<JQuery<HTMLButtonElement>>
      getOpenedDropdownMenu: typeof getOpenedDropdownMenu
      findSettingsButtonByAppName: (
        text: Matcher,
        options?: SelectorMatcherOptions,
      ) => Cypress.Chainable<JQuery<HTMLButtonElement>>
      findMainPaneButtonByItemName: (
        pageName: Matcher,
        settingTitle: string,
        options?: SelectorMatcherOptions,
      ) => Cypress.Chainable<JQuery<HTMLButtonElement>>
    }
  }
}

const graphqlRequest = (body: string | Record<string, any>) =>
  cy.request({
    body,
    url: '/api/graphql',
    method: 'POST',
  })

Cypress.Commands.add('graphqlRequest', graphqlRequest)

const dGraphGraphqlRequest = (body: string | Record<string, any>) =>
  cy.request({
    body,
    url: Cypress.env('dgraphGraphqlEndpoint'),
    method: 'POST',
    headers: {
      'DG-AUTH': Cypress.env('dgraphApiKey'),
    },
  })

Cypress.Commands.add('dGraphGraphqlRequest', dGraphGraphqlRequest)

const getCurrentUserId = () => {
  return cy.request('/api/auth/me').then((r) => {
    return r.body.sub
  })
}

Cypress.Commands.add('getCurrentUserId', getCurrentUserId)

const getByTestId = (testId: string, selectorAddon?: string) => {
  return cy.get(`[data-testid=${testId}]${selectorAddon || ''}`)
}

Cypress.Commands.add('getByTestId', getByTestId)

const createComponent = (libraryId: string, label = 'Test component') => {
  return new Promise((resolve, reject) => reject('not implemeneted'))
}

Cypress.Commands.add('createComponent', createComponent)

const createAtom = (atomType: AtomType) => {
  return new Promise((resolve, reject) => reject('not implemeneted'))
}

Cypress.Commands.add('createAtom', createAtom)

const defaultCreateAppInput: CreateAppInput = {
  name: 'Test app',
}

const createApp = (input: CreateAppInput = defaultCreateAppInput) => {
  return cy
    .graphqlRequest({
      query: print(CreateAppGql),
      variables: { input },
    })
    .then((r) => r.body.data?.createApp)
}

Cypress.Commands.add('createApp', createApp)

const createPage = (appId: string, pageName = 'default') => {
  return new Promise((resolve, reject) => reject('not implemeneted'))
}

Cypress.Commands.add('createPage', createPage)

const defaultLibraryData: Library_Insert_Input = {
  name: 'Test library',
}

export const createLibrary = (
  data: Library_Insert_Input = defaultLibraryData,
) => {
  return new Promise((resolve, reject) => reject('not implemeneted'))
}

Cypress.Commands.add('createLibrary', createLibrary)

export const findByButtonText = (
  subject: any,
  text: ByRoleOptions['name'],
  options?: SelectorMatcherOptions,
): Cypress.Chainable<JQuery> => {
  return (subject ? cy.wrap(subject) : cy).findByRole('button', {
    name: text,
    exact: false,
    timeout: 5000,
    ...options,
  })
}

Cypress.Commands.add(
  'findByButtonText',
  {
    prevSubject: 'optional',
  },
  findByButtonText,
)

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
): Cypress.Chainable<JQuery> => {
  return cy
    .findByText(text, { exact: true, timeout: 5000, ...options })
    .closest('.ant-modal-wrap ')
}

Cypress.Commands.add('findByModalTitle', findByModalTitle)

export const findMainPanelHeaderPlusButton = () =>
  cy
    .findByRole('tabpanel')
    .find('.ant-page-header-heading button [data-icon=plus]')
    .closest('button')
    .first()

Cypress.Commands.add(
  'findMainPanelHeaderPlusButton',
  findMainPanelHeaderPlusButton,
)

export const openSelectByLabel = (
  subject: any,
  text: Matcher,
  options?: SelectorMatcherOptions,
): Cypress.Chainable<JQuery<HTMLElement>> => {
  return (subject ? cy.wrap(subject) : cy)
    .findByLabelText(text, options)
    .closest('.ant-select')
    .click()
}

Cypress.Commands.add(
  'openSelectByLabel',
  {
    prevSubject: 'optional',
  },
  openSelectByLabel,
)

export const getSelectDropdown = () => {
  // NOTE: the list appears in DOM only after first
  return cy.get('.ant-select-dropdown:not(.ant-select-dropdown-hidden)')
}

Cypress.Commands.add('getSelectDropdown', getSelectDropdown)

export const getSelectedOptionByLabel = (
  text: Matcher,
  options?: SelectorMatcherOptions,
): Cypress.Chainable<JQuery> => {
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
): Cypress.Chainable<JQuery> => {
  return cy
    .getSelectDropdown()
    .find('.rc-virtual-list')
    .findByText(value)
    .closest('.ant-select-item')
}

Cypress.Commands.add('getSelectOptionItemByValue', getSelectOptionItemByValue)

const deleteAllAtoms = () => {
  return new Promise((resolve, reject) => reject('not implemeneted'))
}

Cypress.Commands.add('deleteAllAtoms', deleteAllAtoms)

export const getSpinner = (): Cypress.Chainable<JQuery<HTMLButtonElement>> => {
  return cy.get('.ant-spin')
}

Cypress.Commands.add('getSpinner', getSpinner)

export const getOpenedModal = (
  // options?: any,
  options?: Parameters<typeof cy.get>[1],
): Cypress.Chainable<JQuery> => {
  return cy.get('.ant-modal-content', options)
}

Cypress.Commands.add('getOpenedModal', getOpenedModal)

export const getOpenedDropdownMenu = (
  // options?: any,
  options?: Parameters<typeof cy.get>[1],
): Cypress.Chainable<JQuery<HTMLButtonElement>> => {
  return cy.get('.ant-dropdown-menu', options)
}

Cypress.Commands.add('getOpenedDropdownMenu', getOpenedDropdownMenu)

export const findSettingsButtonByAppName = (
  subject: any,
  text: Matcher,
  options?: SelectorMatcherOptions,
): Cypress.Chainable<JQuery<HTMLButtonElement>> => {
  return (subject ? cy.wrap(subject) : cy)
    .findByText(text, { exact: true, timeout: 0, ...options })
    .closest('.ant-card-head-wrapper')
    .find('.anticon-ellipsis')
    .closest('button')
}

Cypress.Commands.add(
  'findSettingsButtonByAppName',
  {
    prevSubject: 'optional',
  },
  findSettingsButtonByAppName,
)

Cypress.Commands.add(
  'findMainPaneButtonByItemName',
  {
    prevSubject: 'optional',
  },
  (
    subject: any,
    itemName: Matcher,
    settingTitle: string,
    options?: SelectorMatcherOptions,
  ): Cypress.Chainable<JQuery> => {
    return (subject ? cy.wrap(subject) : cy)
      .findByText(itemName, { exact: false, timeout: 0, ...options })
      .closest('.ant-list-item')
      .findByTitle(settingTitle)
  },
)

Cypress.Commands.add('getPaneMain', (): Cypress.Chainable<JQuery> => {
  return cy.getByTestId('pane-main').findByRole('tablist')
})
