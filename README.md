# Fit for me (Workout App) 

Tired of going to the gym and not knowing which work out you should. Why not check out, Fit For Me, an applcation that makes cataloguing  your workout simple and easy

## How it will work.

* The user will be able to add individual exercises to each work out.
* Add the time and amount of reps it took to complete
* User can read, edit, and delete these workouts, to complete the CRUD process.

## Technologies being used:
* Javascript
* HTML
* CSS 
* Node.js

## Wireframes
![Wireframe](Wireframe.png)
## ERDs
![ERD](ERD2.jpeg)

## Restful Route For Contacts

|      Entity      |      HTTP Verb      |       Route            |
|------------------|---------------------|------------------------|
| User             | GET                 | /users                 |
|                  | POST                | /users                 | 
|                  | GET                 | /users/:userID         |
|                  | PUT                 | /users/:userID         |
|                  | DELETE              | /users/:userID         |
||
| Workout          | GET                 | /workouts              |
|                  | POST                | /workouts              |
|                  | GET                 | /workouts/:workoutID   |
|                  | PUT                 | /workouts/:workoutID   |
|                  | DELETE              | /workouts/:workoutID   |
||
| Exercise         | GET                 | /exercises             |
|                  | POST                | /exercises             |
|                  | GET                 | /exercises/:exerciseID |
|                  | PUT                 | /exercises/:exerciseID |
|                  | DELETE              | /exercises/:exerciseID |



## User Stories
* 1. As a user, i want to custom make my workout for the day before i go to the gym.
* 2. As a user, I want to be able to add the amount of reps and sets i do during each workout. i also want add the time it took me as well
* 3. As a user, i would like an app that is easy and simple to use so as to not interrupt my work to much

##  MVP 
* Be able to add, delete and edit workouts 
* Allow users to register and log in to the application.
* Create, Read, Update, and Delete (CRUD) for Exercises: Users should be able to:
* * Create new exercises with a name and description.
* * View a list of all exercises.
* * View the details of a specific exercise.
* * Update the details of an existing exercise.
* * Delete an exercise.

## Stretch Goals
* Tracking: Create a log model to track and store the data
* User Authentication:
* Workout Categories: Add the ability to categorize workouts (e.g., cardio, strength training, yoga) and allow users to filter or search workouts by category.
* Timer