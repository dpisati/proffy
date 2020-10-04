<h3 align="center">
    <img alt="Logo" title="#logo" width="300px" src=".github/top.png">
    <br><br>
    <b>Find your best teacher at Proffy!</b>  
    <br>
</h3>

<p align="center">
  <a href="https://rocketseat.com.br">
    <img alt="Made by Rocketseat" src="https://img.shields.io/badge/made%20by-Rocketseat-%237519C1">
  </a>
</p>

# Index

- [About](#about)
- [Technologies](#technologies)
- [How to use](#how-to-use)
- [How to contribute](#how-to-contribute)

<a id="about"></a>

## :bookmark: About

<strong>Proffy</strong> is a web application and mobile to help people find teachers and connect them.

This application was made during the <strong>Next Level Week 2</strong> promoted by [Rocketseat](https://rocketseat.com.br/).

<a id="technologies"></a>

## :rocket: Technologies

The project is made with:

- [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/en/)
- [ReactJS](https://reactjs.org/)
- [React Native](https://reactnative.dev/)

## :heavy_check_mark: :computer: Web

<h1 align="center">
    <img alt="Web" src=".github/web.gif" width="900px">
</h1>

## :heavy_check_mark: :iphone: Mobile

<h1 align="center">
    <img alt="Mobile Detail" src=".github/mobile.gif" width="300px">
</h1>

<a id="how-to-use"></a>

## :fire: How to Use

- ### **Dependencies**

  - Is **required** to install **[Node.js](https://nodejs.org/en/)**
  - In order to run scripts and install dependencies you need to install a **package manager** (ie: **[NPM](https://www.npmjs.com/)**).
  - The **mobile** application requires **[Expo](https://expo.io/)**.

  <br><br>

1. First step, clone this github repository:

```sh
  $ git clone https://github.com/dpisati/proffy.git
```

2. Run the application:

```sh
  # Install dependencies for each folder: mobile, server, web.
  $ npm install

  ## Create the database
  $ cd server
  $ npm run knex:migrate
  $ npm run knex:seed

  # Start the API
  $ npm run dev

  # Start the web application
  $ cd web
  $ npm start

  # Start the mobile app
  $ cd mobile
  $ npm start
```

<a id="how-to-contribute"></a>

## :recycle: How to Contribute

- Create a Fork from this repo,
- Create a branch with your feature: `git checkout -b my-feature`
- Commit changes: `git commit -m 'feat: My new feature'`
- Push to your branch: `git push origin my-feature`
