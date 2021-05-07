# Image Repository
This is an image repository created for the [Shopify Developer Intern Challenge](https://docs.google.com/document/d/1ZKRywXQLZWOqVOHC4JkF3LqdpO3Llpfk_CkZPR8bjak)

## Tech stack

    React, PHP, MySQl, Java, 

## Features

    Add images
        * Upload images - first one at a time then add bulk
        * Select who has access to images and can block user
        * Image uploaded securely -secure in transport and rest
    Delete images
        * Bulk delete
        * Can only delete image uploaded by user
        * secure deletion
    User management - this is meant to managed by a third party admin in the future
        * Users can register and fill out personal info
        * Users can view what they upload and set permission
        * Track banned users, attributes and specific file revocation

## TODO

* Use PHP auth to allow users to register
* Create function to create user attributes from info
* Create function to create system attributes
* Test storing file in databases and store folder structure 
* Test deleting file
* Test with encryption
* Incorporating uploading with users
* Make sure downloading works for user
* Allow users to browse their files
* Allow user to delete only their files 
* Allow mass deletion using checkbox selection and setting properties
* Track who viewed the files
* Add in [background](https://www.npmjs.com/package/particles-bg)

## Testing TODO
    * Make sure Login and Sign up work
    
## DONE

    * Fix mCP-ABE repository to allow us set properties 

## Running Program

    I recommend looking first checking out the live demo at INSERT_URL_HERE
    To run React locally clone this repository and run `npm start` and open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Related Repository

* mCP-ABE encryption used to encrypt files so even if n hacker got their hands on the file it would still be encrypted
* PHP Back-end and MySQl tables

## References
[Space background](https://wallpaperaccess.com/4k-space)