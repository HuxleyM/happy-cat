# HappyCat

HappyCat is a service that will send users a number of animal GIF's per day.

# Design

This is an app to use to sign up to the HappyCat service, built using React.js and tested using Jest and Enzyme.

# TDD and testing

Im a strong believer in TDD and this project started using this. However I was learning more about react and remembering FE skills every couple of hours, therefore building using TDD was becoming a lengthy process. After running into a bug with enzyme - I left this here as i'd like to debug it - I swapped to retrospectively testing.

I need more time with testing and react as i found my tests where often measuring side effect within the out putted html. I did use cypress to run end to end tests.

# features

The form is fully accessible
Onchange handlers ensure a user can only submit a form once fields have been validated
field validations
toggle password visibility
css modules

# wireframes

Can be found on figma here: https://www.figma.com/file/yfITVmdEnBgy0wuq4zbL4m/Untitled?node-id=0%3A1

# Acknowledgements and known bugs

I do not think this is great quality code and things are muddled. I think I need a bit longer than a couple of days to get familiar with react hooks - i had hoped to use the use effect and use reducer hooks. I'd also like to understand how to test pure functions and not side effects of state changes.

The biggest bug right now is that users can not edit a value once they've submitted a form - they can see it but cannot edit it.

# challenges

I have not used React for over a year and a half. I had to quickly relearn the basics as well as trying to move to the new React standards and they're appropriate testing.

Functional react components are awesome, however a little tough to start testing as I had problems stubbing methods within the function.

State management was tricky, i looked into redux before discovering the useContext and useState hooks in React.

# future of the project

I'd like this project to send out a confirmation email as well as to send out the actual gif emails.

There should be a password strength bar.

I'd like to implement end to end testing with cypress but had time restraints and was unable to complete this.

Finish setting up eslint.

# Commands

## basic commands || get it running locally

To run these git clone this source code, check out to the directory and then run these command in you terminal after first running
yarn install.

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn run cypress open`

This will open cypress and run the test suites. You will need to ensure the app is running first

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Notes

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
