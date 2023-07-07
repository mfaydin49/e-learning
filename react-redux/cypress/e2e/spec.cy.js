import courses from '../../src/data/coursesData.json'
import contact from '../../src/data/contactData.json'

Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes('window.__TAURI_IPC__ is not a function')) {
        return false;
    }
});

describe('Home Page', () => {

    beforeEach(() => {
        cy.visit('/');
    });

    it('should shown home page', () => {
        cy.contains('h2', 'e-Learning Courses')
    })

    it('should display the course items correctly', () => {
        cy.get('.course-inner-wrapper').should('have.length', 12);
        cy.contains('Privacy Basics');
        cy.contains('IT security basics (V1.01.3)');
    });

    it('should exist Sidebar', () => {
        cy.contains('p', 'Navigation')
    })

    it('should display the course items in sidebar correctly', () => {
        const coursesLength = courses.data.length
        cy.get('.sidebar').find('li').should('have.length', coursesLength);
    })

    it('should display the contact items in sidebar correctly', () => {
        const contactDataLength = contact.data.length
        cy.get('.sidebar-contact').siblings('div').should('have.length', contactDataLength);
    })

})