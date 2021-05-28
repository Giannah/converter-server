# server

This repo is the server.

It's a [NodeJS](https://nodejs.org/en/) project.

Formatting & code style are enforced by [Eslint](https://eslint.org/) & [Prettier](https://prettier.io/).

Server uses the web framework [ExpressJS](https://expressjs.com/).

### Note

**_The exercise is a two-part exercise and therefore there is two branches in that repo._**

This branch is the second part and corresponds to the Font-End (converter-client) repo **sse-client** branch.

In order to use this project:

Clone this repo and then...

## Project setup

```
npm install
```

## Run server

```
npm start
```

By default server will be up & running at http://localhost:5001/rest/converter.
Hot reload and watch for changes are made through [Nodemon](https://www.npmjs.com/package/nodemon).

## Run tests

```
npm test
```

This part uses the testing framework [Jest](https://jestjs.io/).

### API Endpoints

```
# POST /

curl -X POST \
 -H "Content-Type: application/json" \
 -d '{"input": 1}'\
 -s http://localhost:5001/rest/converter/

 RESPONSE

 {
     "I"
 }
```

```
# GET /conversions

curl -H Accept:text/event-stream http://localhost:5001/rest/converter/conversions

RESPONSE

[
    "1 converted to I",
    "2 converted to II"
]
```

```
# GET /status

curl -H Accept:text/event-stream http://localhost:5001/rest/converter/status

RESPONSE

{
    clients: 1
}
```
