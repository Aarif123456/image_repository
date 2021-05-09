# Image Repository

# What is this? 🤔
This is an image repository created for
the [Shopify Developer Intern Challenge](https://docs.google.com/document/d/1ZKRywXQLZWOqVOHC4JkF3LqdpO3Llpfk_CkZPR8bjak)

# Quick Start :rocket:
## Features 

    Add images
        * Upload images - first one at a time then add bulk
        * Select who has access to images and can block user
        * Image uploaded securely -secure in transport and rest
    View images
        * view what images they have uploaded
    Delete images
        * Bulk delete
        * Can only delete image uploaded by user
        * secure deletion
    User management - this is meant to managed by a third party admin in the future
        * Users can view what they upload and set permission
        * Track banned users, attributes and specific file revocation

# How to use? :artificial_satellite:
I recommend looking first checking out the live demo at INSERT_URL_HERE
To run React locally clone this repository and run `npm start` and open [http://localhost:3000](http://localhost:3000) to view it in the browser.

# Building :construction:
## Technology stack :gear:

    React, PHP, MySQl, Java, 
    Describe frameworks used - and add in diagrams
        *React-Intl
        *Jest
    Front End (React), Back-end(PHP), Encryption (Java hosted on Google Cloud), Database(Maria DB [MySQL])

## DONE :star2:

* Fix CP-ABE repository to allow us set properties
* Create function to create user attributes from info
* Allow users to register
* Allow users to login

## TODO :alarm_clock:
* View
    * view files user has uploaded
    * download chosen file - make sure it is the same as when u uploaded
    * view image in tile form (after)
    * view files in folder (after)
* Upload
    * upload file to user's account
    * make sure file if encrypted
* Delete
    * delete selected file - make sure user can only delete file in their folder
    * Test mass deletion (after)
    * delete folder (after)
* Change permission
    * change permission of file
    * change permission of all files in folder (after)

* Allow user to logout (after)
* Create test cases - for php and react
    * Test to make sure front-end can remember user
* Create diagrams explaining what the system does and add explanation of how to build
    * ER diagram
    * System design diagram - how everything ties together
    * Check out other read-me

## Testing TODO

* Make sure Login and Sign up work
   

## Related Repository :detective:

* CP-ABE encryption used to encrypt files so even if n hacker got their hands on the file it would still be encrypted
* PHP Back-end and MySQl tables

## References :books:

[Space background](https://wallpaperaccess.com/4k-space)
