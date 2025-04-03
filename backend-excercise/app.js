const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const companiesRoute = require('./routes/routes');
app.use('/', companiesRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
