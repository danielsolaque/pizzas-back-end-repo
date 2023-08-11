const dotenv = require("dotenv"); //

dotenv.config(); //

// Import the application
const app = require('./app');

const PORT = process.env.PORT || 8888;

app.listen(PORT, () =>
  console.log(`Server running and listening on port ${PORT}`)
);
