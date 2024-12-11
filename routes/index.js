const foodRouter = require("./foodRoute");
const appetizersRouter = require("./appetizersRoute");
const beveragesRouter = require("./beveragesRoute");
const dessertsRouter = require("./dessertsRoute");

module.exports = (app) => {
    app.use("/api/foods", foodRouter);
    app.use("/api/appetizers", appetizersRouter);
    app.use("/api/beverages", beveragesRouter);
    app.use("/api/desserts", dessertsRouter);
}
