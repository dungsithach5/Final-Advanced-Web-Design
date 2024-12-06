const foodRouter = require("./foodRoute");

module.exports = (app) => {
    app.use("/api/foods", foodRouter);
}
