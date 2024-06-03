# Xcite Homework

## Tech Stack

- **Frontend:** `React` *(using `TypeScript`)*, `Tailwind CSS`, `NextJS`
- **Backend:** `Node.js` *(using `Express`)* server
- **Containerization:** `Docker`

## Prerequisites

If run with Docker :

- `Docker`

## Starting the Project with docker

- Clone the repository
- Run the docker containers: **`docker compose up --build`**
- Stop the docker containers via: **`docker compose down`**

## Starting the Project without docker
- **`cd server`**
- **`npm install`**
- **`npm start`**
- **`cd ../app`**
- **`npm install`**
- **`npm run dev`**

## Accessing the Application

- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend: [http://localhost:4000](http://localhost:4000)

## Testing

- the backend endpoint has tests

## Description  

- see the [video description](https://drive.google.com/file/d/1FYl5UNGKrLl7dwEIODLzknn3Ht6xZnpV/view?usp=sharing)

- the assignment is divided in two:
- server - the express server
- app - the nextjs server; I've kept them separately to not add the express server over the nextjs one

- server - includes the endpoint and the unit tests for it (jest)
- app, I've configured tailwind with two other colors to match the logo
- I've used the app router structure from nextjs since it's recomanded over the pages
