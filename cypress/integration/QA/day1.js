describe("log in",function(){
    it("Sign in",function (){
        cy.visit("https://www.saucedemo.com/")

        cy.contains("Login").click()
        cy.get('input[type="user-name"]').type('standart_user.com')
        cy.get('input[type="password"]').type('gt1234@gmail.com')
        cy.get('input[type="submit"]').click()

    })


})
