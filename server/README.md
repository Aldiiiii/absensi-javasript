# How to run server for the first time

### 1. Setup database
##### Run in terminal : 
- npm install
- npx sequelize db:migrate (create database)
- npx sequelize db:migrate (run migration)
- npx sequelize db:seed:all (run every seeder)

### 2. Start server
##### Run in terminal :
- node app.js

### 3. Test APIs in http://localhost:3000/

## References
- https://sequelize.org/docs/v7/cli/
- https://expressjs.com/en/starter/hello-world.html
- https://expressjs.com/en/resources/middleware/cors.html
- https://expressjs.com/en/api.html
- https://sequelize.org/