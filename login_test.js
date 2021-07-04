Feature('For standard user role login with  '); 

Scenario('valid email + valid password ', ({ I, loginPage}) => {
   loginPage.open();
   loginPage.login('standard_user', 'secret_sauce');
   I.see('PRODUCTS');
 });

 Scenario('valid email + invalid password', ({ I, loginPage}) => {
  loginPage.open();
  loginPage.login('standard_user', 'invalidPassword');
  I.see('Epic sadface: Username and password do not match any user in this service');
});

Scenario('invalid email + valid password', ({ I, loginPage}) => {
  loginPage.open();
  loginPage.login('invalidemail', 'secret_sauce');
  I.see('Epic sadface: Username and password do not match any user in this service');
});
Scenario('invalid email + invalid password', ({ I, loginPage}) => {
  loginPage.open();
  loginPage.login('invalidemail', 'invalidPassword');
  I.see('Epic sadface: Username and password do not match any user in this service');
});
Scenario('empty Email + empty Password', ({ I, loginPage}) => {
  loginPage.open();
  loginPage.login('','');
  I.see('Epic sadface: Username is required');
});
Scenario('valid Email + empty Password', ({ I, loginPage}) => {
    loginPage.open();
    loginPage.login('standard_user','');
    I.see('Epic sadface: Password is required');
  });
  Scenario.only('email with space + valid password', ({ I, loginPage}) => {
    loginPage.open();
    loginPage.login('sta  ndard_user','secret_sauce');
    I.see('Epic sadface: Username and password do not match any user in this service');

});







