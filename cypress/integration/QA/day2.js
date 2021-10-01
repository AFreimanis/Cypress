describe("log in",function() {
    it("Sign in", function () {
        cy.visit("https://www.saucedemo.com/")
        cy.get('[type="text"]').type(fixture["problem"].login)
        cy.get('input[type="password"]').type('secret_sauce')
        cy.get('input[type="submit"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()




    })

})


