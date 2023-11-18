const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const sequelize = require('./utils/sequelizeConnection')
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api/user', userRoutes);
app.use((error, req, res, next) => {
  return res.send(error);
})
sequelize.sync( ).then(() => {
  console.log("database Connected");
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}).catch((error) => {
  console.log("Error while connecting to database",error);
})

