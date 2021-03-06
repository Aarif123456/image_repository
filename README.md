# Image Repository

[![BCH compliance](https://bettercodehub.com/edge/badge/Aarif123456/image_repository?branch=main)](https://bettercodehub.com/)
[![DeepScan grade](https://deepscan.io/api/teams/14096/projects/17188/branches/386798/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=14096&pid=17188&bid=386798)
[![MIT license](https://img.shields.io/github/license/Aarif123456/image_repository?style=for-the-badge)](https://lbesson.mit-license.org/)
[![Vulnerability count](https://img.shields.io/snyk/vulnerabilities/github/Aarif123456/image_repository?style=for-the-badge)](https://snyk.io/)
[![Code grade](https://img.shields.io/lgtm/grade/javascript/github/Aarif123456/image_repository?style=for-the-badge)](https://lgtm.com/projects/g/Aarif123456/image_repository/)
[![W3C Validation](https://img.shields.io/w3c-validation/default?style=for-the-badge&targetUrl=https%3A%2F%2Fabdullaharif.tech%2Fimage_repository%2F)](https://about.validator.nu/)
[![Website status](https://img.shields.io/website?style=for-the-badge&url=https%3A%2F%2Fabdullaharif.tech%2Fimage_repository%2F)](https://abdullaharif.tech/image_repository/)
![lines of code](https://img.shields.io/tokei/lines/github/Aarif123456/image_repository?style=for-the-badge)
![Top Language](https://img.shields.io/github/languages/top/Aarif123456/image_repository?style=for-the-badge)

## What is this? 🤔

This is an image repository created for
the [Shopify Developer Intern Challenge](https://docs.google.com/document/d/1ZKRywXQLZWOqVOHC4JkF3LqdpO3Llpfk_CkZPR8bjak)

## Quick Start :rocket:

I recommend looking first checking out the [live demo](https://abdullaharif.tech/image_repository) \
To run locally, clone this repository and run `npm start`. Then open up [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Features :eyes:

* Add images
    * Upload images one at a time or in bulk
    * Image uploaded securely -secure in transport and rest
    * Select who has access to images
* View images
    * view what images they have uploaded
* Delete images
    * Bulk delete
    * Can only delete image uploaded by user
    * secure deletion
* File management
    * Users can choose what files they want to share with the world. This will become relevant when we add in the search functionalities

## Building :construction:

### System Architecture :european_castle:

![System Context Diagram](https://i.imgur.com/edeuHA6.png)

### Technology stack :gear:

* **React**: [React](https://reactjs.org/) is declarative, component-based language that makes it easier to quickly single-page applications.
* **Typescript**: [TypeScript](https://www.typescriptlang.org/) is a JavaScript extension, which is used to encourage developers to write more maintainable code. It compiles to JavaScript so it can be run on any modern browser.
* **ESLint**: [ESLint](https://eslint.org/) is a static analyzer for JavaScript. In our code we also use it to ensure our translation json files are also in the correct format.
* **Jest**: [Jest](https://jestjs.io/) is a simple, yet comprehensive testing framework which works well with React.
* **React-Intl**: [React-intl](https://formatjs.io/docs/react-intl/) is a JavaScript library that makes simplifies the process of internalization for web-applications.
* **Formik**: [Formik](https://formik.org/docs/overview) is a light weight library that handles form creation and management in React.
* **Axios**: [Axios](https://axios-http.com/) is a promise based HTTP client which simplifies the connecting to the API for this website.
* **Dropzone**: [Dropzone](https://react-dropzone.js.org/) is HTML5-compliant and drag and drop component for file uploading. It allows us to select multiple files at once and handles basic file validation.
* **Material-UI**: [Material-UI](https://material-ui.com/) is a React library that implements [Google's Material Design](https://material.io/design). It lets quickly create beautiful components so we can focus more on the functionality.

### DONE :star2:

* View
    * Download chosen file - make sure it is the same as when you uploaded

* Delete
    * Delete selected file - make sure user can only delete file in their folder

* User Management
    * Allow users to register
    * Allow users to login

* Upload
    * Upload file to user's account
    * Make sure file is encrypted
    * Make sure users don't overwrite their file

### Related Repository :detective:

* [CP-ABE](https://github.com/Aarif123456/mCP-ABE_API/tree/cpabe) encryption used to encrypt files so even if a hacker got their hands on the file it would still be encrypted
* [PHP Back-end](https://github.com/Aarif123456/image_repository_api)

## TODO :alarm_clock:

* View
    * View image in tile form
    * View files in folder

* Delete
    * Test mass deletion (after)
    * Delete folder (after)

* File encryption
    * Change permission of file
    * Change permission of all files in folder (after)

* User Management (after)
    * Allow user to logout
    * Let user request password reset

* Searching (after)
    * Allow users to search public files by name
    * Allow users to search public files by tags
    * Allow users to search files in their organization

## References :books:

[Space background](https://wallpaperaccess.com/4k-space)
