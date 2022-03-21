const mongoose = require("mongoose");
const app = require("./src/server");
const KEYS = require("./src/app/_config/keys");
mongoose
  .connect(KEYS.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    const PORT = process.env.PORT || 9000;
     app.listen(PORT, () => {
      console.log(`Server has started!... and running on port ${PORT}`);
    });
  });
