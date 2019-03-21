import { Selector } from 'testcafe'; // first import testcafe selectors


const pageObjectMap = {
    loginButton: '#app > div > div > div > div > div > form > div:nth-child(3) > button',
    userNameField: '#app > div > div > div > div > div > form > div:nth-child(1) > input',
    passwordField: '#app > div > div > div > div > div > form > div:nth-child(2) > input',
    userNameErrorField: '#app > div > div > div > div > div > form > div:nth-child(1) > div',
    passwordErrorField: '#app > div > div > div > div > div > form > div:nth-child(2) > div'
};
fixture `Getting Started`// declare the fixture
    .page `localhost:3000`;  // specify the start page


test('validation messages should display when username and password are blank', async t => {
    await t
        .click(pageObjectMap.loginButton)

        // Use the assertion to check if the actual header text is equal to the expected one
        .expect(Selector(pageObjectMap.userNameErrorField).innerText).eql('Username is required')
        .expect(Selector(pageObjectMap.passwordErrorField).innerText).eql('Password is required');
});

test('login should fail when invalid username and password is given and throw a toast message', async t => {
    await t
        .typeText(pageObjectMap.userNameField, 'test')
        .typeText(pageObjectMap.passwordField, 'invalid')
        .click(pageObjectMap.loginButton)

        // Use the assertion to check if the actual header text is equal to the expected one
        .expect(Selector('#app > div > div > div > div.alert.alert-danger').innerText).eql('Username or password is incorrect');
});

test('login should be successful when valid username and password is given', async t => {
    await t
        .typeText(pageObjectMap.userNameField, 'test')
        .typeText(pageObjectMap.passwordField, 'test')
        .click(pageObjectMap.loginButton)

        // Use the assertion to check if the actual header text is equal to the expected one
        .expect(Selector('#app > div > div > div > div > div > h1').innerText).eql('Hi Test User!');
});
