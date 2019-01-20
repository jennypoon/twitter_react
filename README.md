## Mock Twitter Project

A simple single page application that fetches tweets in real-time from the database. Each tweet can be “liked” or “unliked” by clicking on the heart icon. Your click will update the database and seamlessly update the color of the heart without affecting the rest of the page. The project was completed within the time limit of 3 hours.

## Final Product
!["Full Window"](https://github.com/jennypoon/twitter_react/blob/master/screenshots/Screenshot_max.png)
!["Responsive Design"](https://github.com/jennypoon/twitter_react/blob/master/screenshots/Screenshot_min.png)
!["Responsive Design"](https://github.com/jennypoon/twitter_react/blob/master/screenshots/Screenshot_w500px.png)

## Running the Application in Development Mode

1. Install dependencies using the `npm install` command.
2. Create a .env file and define the following parameters: DB_HOST, DB_USER, DB_PASS, DB_NAME, DB_PORT.
3. Run the migrations (`knex migrate:latest`) and seeds (`knex seed:run`).
4. Start the Express back-end server using `node index.js` inside the main project directory.
5. Go into the client folder `cd client` and run `npm start` to start the web server.
4. Go to <http://localhost:3000/> in your browser and explore the app!

## Tech Stack
- React
- Webpack
- Babel
- Axios
- Express
- Knex
- Postgres