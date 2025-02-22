# BestB4

                  (
                   )
              __..---..__
          ,-='  /  |  \  `=-.,
          :--..___________..--;
           \.,_____________,./



### Project Description

As our final project at Makers Academy - team BestB4 consisting of Eithel, Elsie, Jules, Mackenzie and Valeria had the challenge of changing the world in 8 days.  We came up with this - a website to help people waste less food by allowing users to easily give away food they won't use - or food that's about to expire - to other people in their local community. Here's our tasks broken down into user stories-

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

As a user
So I can contact my fellow users
I want to be able to send them a message

As a user
So I can remove food from the application if it's been eaten/used
I want to be able to delete my own food items from the website
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

*After much deliberation at the start of the project we decided to use the MERN stack - Mongo, Express, React and Node in order to create our application. You're currently viewing our backend and the rest of this readme will be focussed on how we built our Mongo and Express backend.*

## Technologies Used

### Storing Data
* Mongo
  * We used mongo as our back-end. This decision was taken early on in order to fufill our goal of using the MERN stack
* Mongoose
  * In order to interact with Mongo in express we had to use mongoose. Mongoose allows for simple and easy communication between your database where information is stored and you server where information is recieved from the front-end

<img src="Images/Mongo/mongo_db.png" width="400px">

We checked that users had been entered into our database correctly in the terminal

<img src="Images/Mongo/post_model.png" width="400px">

An example of a model

### Logging in and Tracking Users
* Bcrypt
  * All of our passwords were validated with bcrypt when the user first registered and then we then used *bcrypt.compare* in order to check passwords where users logged in
* Express-validator
  * Express-validator is a simple node package that allows for checking of form data. We used it to check if the user had entered in the correct-length password as well as a valid email
* JSONWebTokens
  * JSONWebTokens track users at the front end to see whether they are logged in or not. It also allows you to make checks in your server - the user can only post if they're logged in and they can't attempt to log in/sign up if they're already logged in
* Gravatar
  * Every time a user registered they were automatically assigned a gravatar profile picture. If they'd signed up to gravatar they'd get their own picture, otherwise they'd be given the standard default picture

<img src="Images/Logging_In/bcrypt.png" width="400px">

Every time the user registers their password is encrypted - it's then saved to the database

<img src="Images/Logging_In/jwt.png" width="400px">

We created custom middleware that always ran when a user tried to perform an action that they needed to be signed in for. Their individual user object is then returned 

<img src="Images/Logging_In/jwt_signup.png" width="400px">

here the user gets their token when they sign in

<img src="Images/Logging_In/validation.png" width="400px">

We used *express-validator* for our validation. It checks to see if the user has entered in the correct information. If they haven't an array is returned that can be used in the front end to tell the user what information is missing

### Our Controller
* Express
  * We used express as our server - this handled both our request and our response
* express.Router()
  * express.Router() makes our code cleaner by allowing us to groups routes into seperate files

<img src="Images/Express/express.png" width="400px">

An exmaple of our routes - they were fully consumed by a restful API

<img src="Images/Express/router.png" width="400px">

We used different files for different routes (users, posts, messages)


### Testing Routes
* Insomnia
  * We needed to continuously check that our routes were firstly working and secondly giving back the data that we expected - we used insomnia to do this

<img src="Images/Insomnia/Register.png" width="400px">

Here a test user registers - they get back a token that has been generated with JWTokens

<img src="Images/Insomnia/Post.png" width="400px">

And now the user posts - notice they get back the post object that can be used as neccassary throughout the application

<img src="Images/Insomnia/Token.png" width="400px">

Finally, here's a shot of when the user posts. The application checks for the token prior to allowing the user to post

## Installation

* Git Clone the current repository into a local directory of your choice
* Run NPM Install in order to install the necassary modules to run the application
* Enter *node server.js* in order to run the backend server locally - this will be hosted on port 5000
