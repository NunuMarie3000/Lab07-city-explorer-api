# Lab07-city-explorer-api

**Author**: Storm O'Bryant
**Version**: 1.0.3

## Overview

Problem domain: As an addition to Lab 06, which began creation of a city explorer application that allows the user to look up a city, location, destination, and view a map of that location, we know would like to implement server side that would allow the user to (in the future) be able to check the weather for their searched location. For now, we're using static placeholder data.

## Getting Started

To build this app on your own machine:

* create a server with Express(include all necessary files, including, but not limited to: placeholder weather data, gitignore/dotenv file, and a file that will hold all your server information)

*

## Architecture

In this application, I will be using:

* dotenv
* express
* cors
* axios
* weatherbit.io
* themoviedb

## Change Log

08-24-2022 10:38pm - commited feature 1 changes to github repo
08-25-2022 11:47 - step 1 of lab 8 complete, making axios get request to weatherbit.io to get and send forecast info to the client
08-26-2022 5:30pm - server deployed to heroku, we have movie information as well
08-29-2022 8:46 - modularized functions
8-29-2022 4:30pm - 7 day forecast
8-30-2022 11:30am - introduced middleware to cache api results to avoid additional unneccesary api calls

## Credit and Collaborations

### Time Estimates

1.Name of feature: Weather(placeholder)

Estimate of time needed to complete: 3 hours

Start time: 10:03am-12:02pm,5:00pm-rough breaks

Finish time: 10:36pm

Actual time needed to complete: approx. 6 hours

2.Name of feature: Weather(live)

Estimate of time needed to complete: 3 hours

Start time: 9:30am

Finish time: 11:49am

Actual time needed to complete: approx. 2.5 hours

3.Name of feature: Movies

Estimate of time needed to complete: 3 hours

Start time: 10:00am

Finish time: 5:30pm

Actual time needed to complete: approx. 4 hours

4.Name of feature: Publish

Estimate of time needed to complete: 3 hours

Start time: 6:45

Finish time: 9:50pm

Actual time needed to complete: approx. 3 hours

5.Name of feature: Refactor: Modularize the back-end codebase.

Estimate of time needed to complete: 1 hour

Start time: 8:35am

Finish time: 8:46am

Actual time needed to complete: 11 minutes

6.Name of feature: Performance: As a user, I want the application to work with recent results, so that I can see info without the app doing unnecessary API calls.

Estimate of time needed to complete: 3 hours

Start time: 11:10am

Finish time: 12:25

Actual time needed to complete: approx. 1 hour

7.Name of feature: STRETCH: As a user of City Explorer, I want to see info about restaurants in the city I searched, so that I find the best places to eat.

Estimate of time needed to complete: 2 hours

Start time: 10:47am

Finish time: 12:19am

Actual time needed to complete: approx. 1.5 hours
