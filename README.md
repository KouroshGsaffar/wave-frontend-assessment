# Getting Started with Create React App

This is my soultion for frontend code challenge for Wave company. For the challenge description, please read README_Code_Challenge.md file!

useful links => https://codesandbox.io/s/react-fetch-async-data-redux-toolkit-forked-ekgzmr, https://youtu.be/SSy8CuJmh1o

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
1. Using React-Redux for state management
2. Creating composable, reusable components to use in later features and
products.
Since I was only fetching data from an API and calling this API once at the beginning, I
used useEffect and createAsyncThunk to fetch the data. If I want to do more server
calls (e.g make a PUT request to update the customer or a POST request to create a
new customer) I will use Saga as middleware to make implementation more reusable.
I tried to create reusable components to use in later features and products. As an
example, the EditCustomer component can be used to add a new Customer as well.
The only modification needed is to pass an empty customer object to the component
and you can add more fields to the customer information form by passing the empty
customer object with specific keys and empty strings as values.
By using Redux, I can easily AddCustomer/DeleteCustomer reducers to add/delete
customers and update the customer’s list.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
