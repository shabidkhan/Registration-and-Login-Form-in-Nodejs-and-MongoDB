<h1 align="center">
    <b>User Registration & Login systems in<br> Node.js using MongoDB </b> 
<br>
</h1>


<p align="center">
  <a href="/LICENSE"><img src="https://img.shields.io/github/license/shabidkhan/IMDB-scraper.svg?style=flat-square"></a>
</p>


## What is this for?
This is a Simple User Registration & Login systems app done with ExpressJS framework of NodeJS using MongoDB as the data store, Express as the routing system, Body-parser as the parser for webpage, Express-cookie-parser used  to track the user's cookie and of course Mongoose to make interacting with Mongo from Node easy.

## Getting Started

## Running the tests

### •Registration Form:
Allows the user to register their account by filling their Email, Username, Password, and Mobile Number.

<img src="./doc/signupPage.png" height="250" width="390" style="border: 1px solid black;">

### •Login Form:
If the user has been registered on the app, can login by passing the credentials.

<img src="./doc/loginPage.png" height="220" width="390" style="border: 1px solid black;">

### •User's Profile:
After the user logged in, a simple profile with the user's username <br>displayed with a Logout button.

<img src="./doc/homePage.png" height="160" width="380" style="border: 1px solid black;">

### DataBase:
Here we use **[MongoDB](https://www.mongodb.com/)** as the database. Here we have one collection created, named as:
- users.

A Collection(**Users**) is populated with the user's credentials.

<img src="./doc/mongodbData.png" height="300" width="720" style="border: 1px solid black;"><br><br>

<br>
<br>
<br>

## Prerequisites
Tools that we need to run this app:

- ***[Node.js](https://nodejs.org/)***
- ***[Express.js](https://expressjs.com/)***
- ***[Node Package Manager](https://www.npmjs.com/get-npm)***
- ***[MongoDB](https://www.mongodb.com/)***

## Installing
```
npm install
```
## Connection to DataBase Access
At line 4 on ```./db/db.js``` change ***```process.env.dbUrl```*** with your DataBase Url or create a ```.env``` file with ***```dbUrl = <your_DataBase_Url>```*** .

## To Run the App
```
node bin/www
```

The server will start Running on
+ http://localhost:9000/


## Author

| Author                | Profile Link                                       |
| --------------------- | :------------------------------------------------- |
| **Shabid Khan** | **[Shabid Khan](https://github.com/shabidkhan)** |


<br>

##



<br><br>
<div align="center">
<a href="https://www.buymeacoffee.com/YwGKcxa" target="_blank"><img src="https://happycode.co.za/wp-content/uploads/2020/05/rsz_1happy-code-png.png" alt="Buy Me A Coffee" style="height: 51px !important;width: 217px !important;" ></a></div>
<p align="center">
  Made with ❤️ by <a href="https://github.com/shabidkhan">Shabid Khan</a>
</p>
