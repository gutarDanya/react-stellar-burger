import React from "react";
<reference types="cypress" />


describe('проверка работы сервера', () => {
     before(() => {
        cy.visit('/');
    })

    it('процесс заказа', () => {
        cy.get('div[data-testid="ingredient"]').as('ingredient')
        cy.get('div[data-testid="constructor"]').as('constructor')

        cy.get('@ingredient').eq(0).trigger('dragstart');
        cy.get('@constructor').trigger('drop');

        cy.get('@ingredient').eq(2).trigger('dragstart');
        cy.get('@constructor').trigger('drop');

        cy.get('@ingredient').eq(3).trigger('dragstart');
        cy.get('@constructor').trigger('drop');

        cy.get('@ingredient').eq(4).trigger('dragstart');
        cy.get('@constructor').trigger('drop');

        cy.get('button').contains('Оформить заказ').as('confirmButton')
        cy.get('@confirmButton').click()

        cy.get('input[name=emailInput]').type('supertest@gyandex.ru');
        cy.get('input[name=password]').type(123412341234);

        cy.get('button').contains('Войти').click();
        cy.get('@confirmButton').click();

        cy.wait(20000).get('div[data-testid="closeModal"]').click()
    })

    // it('процесс заказа с изначальной авторизацией', () => {
    //     cy.visit('/')

    //     cy.get('button').contains('Личный кабинет').click();

    //     cy.get('input[name=emailInput]').type('supertest@gyandex.ru');
    //     cy.get('input[name=password]').type(123412341234);

    //     cy.get('button').contains('Войти').click();
    //     cy.get('p[testid="constructor-button"]').click()

    //     cy.get('div[data-testid="ingredient"]').as('ingredient')
    //     cy.get('div[data-testid="constructor"]').as('constructor')

    //     cy.get('@ingredient').eq(0).trigger('dragstart');
    //     cy.get('@constructor').trigger('drop');

    //     cy.get('@ingredient').eq(2).trigger('dragstart');
    //     cy.get('@constructor').trigger('drop');

    //     cy.get('@ingredient').eq(3).trigger('dragstart');
    //     cy.get('@constructor').trigger('drop');

    //     cy.get('@ingredient').eq(4).trigger('dragstart');
    //     cy.get('@constructor').trigger('drop');

    //     cy.get('button').contains('Оформить заказ').click();

    //     cy.wait(20000).get('div[data-testid="closeModal"]').click()
    // })
})