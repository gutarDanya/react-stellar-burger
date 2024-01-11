import { wait } from "@testing-library/react";
import React from "react";
<reference types="cypress" />

describe('проверка работы сервера', () => {
     before(() => {
        cy.visit('http://localhost:3000');
    })

    it('процесс заказа', () => {
        cy.get('div[data-testid="ingredient"]').eq(0).trigger('dragstart');
        cy.get('div[data-testid="constructor"]').trigger('drop');

        cy.get('div[data-testid="ingredient"]').eq(2).trigger('dragstart');
        cy.get('div[data-testid="constructor"]').trigger('drop');

        cy.get('div[data-testid="ingredient"]').eq(3).trigger('dragstart');
        cy.get('div[data-testid="constructor"]').trigger('drop');

        cy.get('div[data-testid="ingredient"]').eq(4).trigger('dragstart');
        cy.get('div[data-testid="constructor"]').trigger('drop');

        cy.get('button').contains('Оформить заказ').as('confirmButton')
        cy.get('@confirmButton').click()

        cy.get('input[name=emailInput]').type('supertest@gyandex.ru');
        cy.get('input[name=password]').type(123412341234);

        cy.get('button').contains('Войти').click();
        cy.get('button').contains('Оформить заказ').click();

        cy.wait(2000).get('div[data-testid="closeModal"]').click()
    })


})