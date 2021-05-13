# Image Repository

# What is this? 🤔
This is an image repository created for
the [Shopify Developer Intern Challenge](https://docs.google.com/document/d/1ZKRywXQLZWOqVOHC4JkF3LqdpO3Llpfk_CkZPR8bjak)

# Quick Start :rocket:
## Features

    Add images
        * Upload images one at a time or in bulk
        * Image uploaded securely -secure in transport and rest
        * Select who has access to images
    View images
        * view what images they have uploaded
    Delete images
        * Bulk delete
        * Can only delete image uploaded by user
        * secure deletion
    File management
        * Users can choose what files they want to share with the world. This will become relevant when we add in the search functionalities 

# How to use? :artificial_satellite:
I recommend looking first checking out the live demo at: https://arif115.myweb.cs.uwindsor.ca/imagerepository/docs
To run React locally clone this repository and run `npm start` and open [http://localhost:3000](http://localhost:3000) to view it in the browser.

# Building :construction:

## System Architecture 
![System Context Diagram](https://i.imgur.com/edeuHA6.png)

## Technology stack :gear:

* **React**: [React](https://reactjs.org/) is declarative, component-based language that makes it easier to quickly single-page applications.
* **Typescript**: [TypeScript](https://www.typescriptlang.org/) is a JavaScript extension, which is used to encourage developers to write more maintainable code. It compiles to JavaScript so it can be run on any modern browser.
* **ESLint**: [ESLint](https://eslint.org/) is a static analyzer for JavaScript. In our code we also use it to ensure our translation json files are also in the correct format.
* **Jest**: [Jest](https://jestjs.io/) is a simple, yet comprehensive testing framework which works well with React. 
* **React-Intl**: [React-intl](https://formatjs.io/docs/react-intl/) is a JavaScript library that makes simplifies the process of internalization for web-applications.
* **Formik**:[Formik](https://formik.org/docs/overview) is a light weight library that handles form creation and management in React.
* **Axios**: [Axios](https://axios-http.com/) is a promise based HTTP client which simplifies the connecting to the API for this website. 
* **Dropzone**: [Dropzone](https://react-dropzone.js.org/) is HTML5-compliant and drag and drop component for file uploading. It allows us to select multiple files at once and handles basic file validation.
* **Material-UI**: [Material-UI](https://material-ui.com/) is a React library that implements [Google's Material Design](https://material.io/design). It lets quickly create beautiful components so we can focus more on the functionality.


Front End (React), Back-end(PHP), Encryption (Java hosted on Google Cloud), Database(Maria DB [MySQL])

## DONE :star2:
* File encryption
    * Fix CP-ABE repository to allow us set properties
    * Create function to create user attributes from their info
* User Management
    * Allow users to register
    * Allow users to login
* Upload
    * upload file to user's account
    * make sure file is encrypted

## TODO :alarm_clock:
* View
    * view files user has uploaded
    * download chosen file - make sure it is the same as when u uploaded
    * view image in tile form (after)
    * view files in folder (after)
* Upload
  Make sure users don't overwrite their file - eventually give them a prompt to confirm they are
* Delete
    * delete selected file - make sure user can only delete file in their folder
    * Test mass deletion (after)
    * delete folder (after)
* File encryption
    * change permission of file
    * change permission of all files in folder (after)

* User Management (after)
    * Make sure user stays logged in after refreshing the page...
    * Allow user to logout

* Searching (after)
    * Allow users to search public files by name
    * Allow users to search public files by tags
    * Allow users to search files in their organization

* Create test cases - for php and react
    * Test to make sure front-end can remember user
* Create diagrams explaining what the system does and add explanation of how to build
    * ER diagram
    * System design diagram - how everything ties together
    * Check out other read-me



## Related Repository :detective:

* [CP-ABE](https://github.com/Aarif123456/mCP-ABE_API/tree/cpabe) encryption used to encrypt files so even if a hacker got their hands on the file it would still be encrypted
* [PHP Back-end](https://github.com/Aarif123456/image_repository_api)

## References :books:

[Space background](https://wallpaperaccess.com/4k-space)
