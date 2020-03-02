[![Maintainability](https://api.codeclimate.com/v1/badges/5354d76d61fcf7fc4704/maintainability)](https://codeclimate.com/github/alexmalott/json-resume-react-demo/maintainability)

# json-resume-react-demo
A barebones [JSON Resume](https://github.com/jsonresume) compliant react web app.

There are some capabilities that exist outside the published schema: specifically `awards` supports the `website` field - although it's not mandatory.

### Getting Started
Run the following command to install dependencies:
```shell script
npm install
```
Then run the following to start the development web server:
```shell script
npm start
```

Edit `Resume.json` with your information - if you wish to leave a section unused, simply remove it from `App.js`

### Deploying
Run the following:
```shell script
npm run-script build
```
The project directory should now contain a `build` directory.  Copy the entire directory to where your webserver can find it and serve `index.html`