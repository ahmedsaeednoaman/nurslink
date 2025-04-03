describe('صفحة تسجيل الدخول', () => {
  it('يجب أن تعرض نموذج تسجيل الدخول', () => {
    cy.visit('http://localhost:3000/login');
    cy.contains('تسجيل الدخول').should('exist');
  });

  it('يجب أن يظهر خطأ عند إرسال بيانات غير صحيحة', () => {
    cy.visit('http://localhost:3000/login');
    cy.get('input[name=email]').type('wrong@email.com');
    cy.get('input[name=password]').type('wrongpass');
    cy.get('form').submit();
    cy.contains('بيانات الدخول غير صحيحة').should('exist');
  });
});
