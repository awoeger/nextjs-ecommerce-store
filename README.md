<!-- Todo: Insert Screenshots -->

# Vienna Vanguards E-Commerce Store

## Product Page

![Screenshot 1](./public/screenshot1.PNG)

## Shopping Cart Page

![Screenshot 2](./public/screenshot2.PNG)

## Checkout Page

![Screenshot 3](./public/screenshot3.PNG)

## Deployed Version

You can visit the deployed website under:
[Vienna Vanguards Online Store](https://vv-online-store.herokuapp.com/).

DISCLAIMER:
This project was created as part of the requirements for the Upleveled bootcamp in Vienna.
No actual merchandise can be purchased on this website.

So far, no mobile version of the website was designed.

## Functionalities

In this repository an e-commerce store with following features and functionalities was created.

- a product page, where all products are listed
- a single product page, where you can find more details about the products
- a shopping cart page and the possibility to change quantity of the products on it
- a checkout page, which asks for shipping and payment information
- a thank you page after checkout has been completed
- the header shows the total amount of products next to the shopping cart item.

## Technologies

- Next.js
- React.js
- Postgres
- Emotion
- Bootstrap
- Typescript
- Jest / Cypress

## SetUp Guide

To work on this project by yourself, please follow the upcoming steps:

- Clone repo to your local machine
- Download and install PostgreSQL
- Create a user and database for this project
- Modify the info in the .env-example file
- Rename the file to .env
- Install dotenv-cli with <yarn global add dotenv-cli>
- Run <yarn install> in your command line
- Run the migrations for your local database with <yarn migrateup>
- Start the server by running <yarn dev>

## Deploy your own website to Heroku

- Sign up for Heroku: signup.heroku.com
- Create a new App
- Choose a name and select the "Europe" Region
- Click on the button in the middle called "Connect to GitHub"
- Search for your repository in the search box at the bottom of the page and click on the "Connect" button Click on the button for "Enable Automatic Deploys"
- Go back to the Overview tab and click on "Configure Add-On"
- Search for "Postgres" and select "Heroku Postgres" from the results
- Trigger a deploy pushing to your github repo and enjoy.
