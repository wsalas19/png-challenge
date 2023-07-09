
# Movie Dashboard

Basic CRUD app to view, add, edit and delete movies added by the user.




## Setup
Before setup we must add a .env file that contains the MongoDB URI where the DB is hosted. (the address can be found in the email)

The variable must be named MONGO_URI.

To setup this project locally, first clone this repo into your local files.

Then open the terminal and search the directory:

```bash
  cd png-challenge
```
Then we have to initiate the client and the api separately, first we go the api and install dependencies:

```bash
  cd api
  npm i
  npm start
```

After that we go to the client and do somewhat the same:
```bash
  cd client
  npm i
  npm run dev
```
The client will serve, and we will start interacting with the app.
