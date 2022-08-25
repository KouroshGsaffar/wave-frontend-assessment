
# Getting Started with Create React App

This is my soultion for frontend code challenge for Wave company. For the challenge description, please read following description!

useful links => https://codesandbox.io/s/react-fetch-async-data-redux-toolkit-forked-ekgzmr, https://youtu.be/SSy8CuJmh1o

# Wave Front-end Challenge

The purpose of this exercise is to create something that we can work on together during the onsite interview. We do this so that you get a chance to
collaborate with Wavers during the interview in a situation where you know something better than us (it's your code, after all!)

There isn't a hard deadline for this exercise; take as long as you need to complete it. However, in terms of total time spent actively
working on the challenge, we ask that you not spend more than a few hours, as we value your time and are happy to leave things open to
discussion in the on-site interview.

Please use whatever tools or frameworks you feel the most comfortable with.

## Project Description

Imagine that this is the early days of Wave's history, and that we are prototyping a new invoicing system in Canada. Our prototype will be entirely API-driven and use a Javascript single-page app as the interface to our APIs.

One piece of the application will be a settings page where users can manage their customer information. Another team has provided a RESTful API to supply the data. We need you to start working on the client-side portion that will consume this API. For now, we would like to see some early front-end scaffolding to see how you would architect this.

The front-end prototype only needs to do the following:

- Retrieve the data from the GET endpoint
- Show a compact list of customers (in the JSON under the "customers" key)
- Let the user select a customer for editing, which shows a form with name, email, channel (value may be one of 'website', 'email', 'phone', 'word-of-mouth', 'other'), address, postal, city, province
- All fields are required. Empty values should present an error message if submitted.
- On form submit, log the JSON payload to console (no need to mock out server calls!)

The JSON will be available by calling GET https://rawgit.com/wvchallenges/se-exp-challenge-invoice/master/settings.json and can be retrieved using fetch, XHR, JQuery or whatever library you're familiar with.

Our desire is to approach this in a way that gives us composable, reusable code for use in later features and products. So some thought should be given to how this code could be expanded upon and repurposed. For now this will be a Canada only product and all addresses are assumed to be in Canada but we plan to roll this out to other countries later. 
Do not worry about making the UI pretty! Just make it functional. All we ask is that it be easy to add more styling later.

Use whatever framework, tooling, scaffolding, starter-kits you are comfortable with that feel appropriate to this challenge. At Wave, we have used Backbone, Angular, React with the emphasis being heavily on React for current work. Your application should be easy to run and browse, and should run on either Linux or Mac OS X. It should not require any non open-source software.

## Instructions on how to run the application
For running the app, please unbundle the file and go to the code-challenge folder and do the
following command in the terminal:
1. Open terminal
2. Go to the code-challenge folder directory
3. Install node.js on your system(use the following documentation for installing node.js on
your system. https://nodejs.org/en/download/package-manager/#macos )
4. To install all packages in package.json, run npm i
5. After successfully installing all packages and dependencies, run npm start to start the
app
6. If the application is compiled successfully on your device, the browser probably will be
opened and the app starts to run. If the browser does not open the URL, the terminal will
show you the address to open on your browser (something similar to
http://localhost:3000 ). Copy the address and paste it into your browser.
7. Now you can see the result and Edit customers as well.
You can install a few Chrome extensions including (React Developer Tools and Redux
DevTools) to inspect the React component hierarchies and Redux development workflow.
## Implementation Explanation
Since the functionality and fast implementation matter most, I just make the app
functional in JavaScript and did not add much styling. If I want to spend more time I
would definitely write everything in TypeScript, use Redux-Saga as the middleware of
the Redux, and write unit and integration tests.
The parts that I am proud of are:
1. Using React-Redux for state management and Redux-Saga as middleware
2. Creating composable, reusable components to use in later features and
products.
