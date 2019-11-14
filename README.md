# BestB4

                  (
                   )
              __..---..__
          ,-='  /  |  \  `=-.,
          :--..___________..--;
           \.,_____________,./



### Project Description

As our final project at Makers Academy - team BestB4 consisting of Eithel, Elsie, Jules, Mackenzie and Valeria had the challenge of changing the world in 8 days.  We came up with this - a website to help people waste less food by allowing users to easily give away food they won't use - or food that's about to expire - to other people in their local community. Here's our tasks based down into user stories-

```
As a user
So I can find unwanted food
I can view a list of available food

As a user
So I can access my account
I can log in

As a user
So I can create an account
I can sign up

As a user
So I can give away food I won't use
I can list a food item

As a user
So people can see who I am
I can add my gravatar profile picture

As a user
So I can find food available in my local area
I can see a list of food in my area
```

After having achieved our primary targets - we moved onto more ambitious ones - connecting our application to external API's. Firstly we used the Spoonacular API to allow users to see recipes based on what was in their own fridge as well as being given away by users in their local area-

```
As a user
So I can receive recipe ideas based on food items in my area
I can view a recipe suggestions
```

Once this goal had been attained we moved onto our final stretch goal - to allow users to see where their othe food was located. We did this using the google Maps API-

```
As a user
So I can see what items are available in my area
I can see items near my location on Google Maps
```

## Tech Stack

*After much deliberation at the start of the project we decided to use the MERN stack - Mongo, Express, React and Node in order to create our application. You're currently viewing our backend and the rest of this readme will be focussed on how we built our Mongo and Express backend. Please go here(link) to download and view more information on our React front-end.*

## Technologies Used

### Storing Data
* Mongo
  * We used mongo as our back-end. This decision was taken early on in order to fufill our goal of using the MERN stack
* Mongoose
  * In order to interact with Mongo in express we had to use mongoose. Mongoose allows for simple and easy communication between your database where information is stored and you server where information is recieved from the front-end

### Logging in and Tracking Users
* Bcrypt
  * All of our passwords where validated with bcrypt when the user first registered and then we then used *bcrypt.compare* in order to check passwords where users logged in
* Express-validator
  * Express-validator is a simple node package that allows for checking of form data. We used it to check if the user had entered in the correct-length password as well as a valid email
* JSONWebTokens
  * JSONWebTokens track users at the front end to see whether they are logged in or not. It also allows you to make checks in your server - the user can only post if they're logged in and they can't attempt to log in/sign up if they're already logged in
* Gravatar
  * Every time a user registered they were automatically assigned a gravatar profile picture. If they'd signed up to gravatar they'd get their own picture, otherwise they'd be given the standard default picture

### Our Controller
* Express
  * We used express as our server - this handled both our request and our response
* express.Router()
  * express.Router() makes our code cleaner by allowing us to groups routes into seperate files

### Testing Routes
* Insomnia
  * We needed to continuously check that our routes were firstly working and secondly giving back the data that we expected - we used insomnia to do this

### Screenshots

<img src="images/plane_class.png?" width="400px">

A screenshot of the plane class - notice how the plane class holds the 'land' method

<img src="images/weather_class.png?" width="400px">

An weather class with an SRP - return a random weather variable

<img src="images/tests.png?" width="400px">

The test spec for the airport class

<img src="images/14_passing_tests.png?" width="400px">

14/14 passing tests



React <br>
Node <br>
Cypress <br>
Jest <br>
Insomnia (https://insomnia.rest/) <br>
Java Script <br>
Google API <br>
Spoonacular API <br>
Redux <br>
Balsimiq <br>
Trello <br>

## Installation

* Git Clone the current repository into a local directory of your choice
* Run NPM Install in order to install the necassary modules to run the application
* Enter *node server.js* in order to run the backend server locally - this will be hosted on port 5000

### Features

List food to give away.
Delete food from your inventory when you have given it away or it has passed it's expiry date. <br>
Find food in your local area that people are giving away. <br>
Contact a user who is listing food you want. <br>
Get directions collect food via a Google API. <br>
Get recipe sugestions based on what ingredients are available in your local area vis a Spoonacular API <br>


### Installation

```bash
npm install
```

### Tests

#### How to run front end feature tests

1. Run back end server (from backend directory) <br>

$ BestB4 <br>

```
node server.js

```
2. Run front end server (from front end directory) <br>

$ client <br>

```
npm run start

```

3. Run Cypress (from front end directory)

$ Client

```
node_modules/.bin/cypress open
```

The Cypress UI will then open automatically and you will see a list of feature tests that can be run.

### How to use

To run back end repository.
```bash
node server.js
```

To run front end repository
```
npm run start
```

### Homepage

![Alt text](/Images/Homepage.png?raw=true "Home Page")


You can now view in your browser of choice by visiting:

http://localhost:3000/

#### User Stories

As a user <br>
So I can find unwanted food <br>
I can view a list of available food <br>

As a user <br>
So I can access my account <br>
I can log in <br>

As a user <br>
So I can create an account <br>
I can sign up <br>

As a user <br>
So I can give away food I won't use <br>
I can list a food item <br>

As a user <br>
So people can see who I am <br>
I can add my gravatar profile picture <br>

As a user <br>
So I can find food available in my local area <br>
I can see a list of food in my area <br>

As a user <br>
So I can see what items are available in my area <br>
I can see items near my location on Google Maps <br>

As a user <br>
So I can receive recipe ideas based on food items in my area <br>
I can view a recipe suggestions <br>


### Front End Repository
asdasd
The front end repository for this project is available at: <br>
https://github.com/eashworth/bestB4-Front-End/branches <br>


### Front-end
* Git Clone this repository into a local directory of your choice
* Run NPM Install in order to install the necassary modules to run the application
* Enter *npm run start* in order to host the React front-end - 
