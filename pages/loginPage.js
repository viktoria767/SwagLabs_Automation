const { I } = inject();

module.exports = {

  fields: {
    email: '#user-name',
    password: '#password'
  },
  loginButton: '#login-button',

  login(email, password) {
    I.fillField(this.fields.email, email);
    I.fillField(this.fields.password, password);
    I.click(this.loginButton);
  },

  open(){
    I.amOnPage('https://www.saucedemo.com/'); 
  }
}
