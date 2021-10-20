# portfolio

This is a copy of the source code in order to build my latest portfolio website. Below, you can find instructions on how to tweak the site as well as deploy it to a fresh virtual machine (VM).

## Developing the Site

In the project directory, you can run:

### `yarn install`

Installs all dependencies of the project into the local directory. This is **required** before all other steps.

### `yarn start`

Runs the app in development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will automatically reload if you make edits to the javascript files.
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.
See the section about [running tests](#running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

## Running Tests

Information about testing goes here.

## Production Environment

For ease of setup, a convenience script has been written for Docker-based deployment. It has been tested on Ubuntu Server 21.10 and has been designed around a fresh install.

```bash
$ bash -c "$(wget -qO- https://raw.githubusercontent.com/gitmarkhubmunar/portfolio/master/server/deploy-web.sh)"
```

## Deployment

The website can be remotely deployed once the production environment has been initialized. Use the following command to do so:

```bash
$ ssh -i <keyfile> jeff@<host> deploy-web update
```
