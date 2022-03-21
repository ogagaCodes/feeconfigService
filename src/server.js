const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
const morgan = require("morgan");

// const routes = require("");
const KEYS = require("./app/_config/keys");
const createError = require("./app/_helpers/createError");
const { RESPONSE } = require("./app/_constants/response");
const { HTTP } = require("./app/_constants/statusCodes");

const app = express();

app.disable("x-powered-by");

// global middlewares
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());
app.use(morgan("dev"));

app.use(function (_err, _req, _res, _) {


  if (_err instanceof SyntaxError) {
    return _res.status(HTTP.BAD_REQUEST).json({
      code: HTTP.UNPROCESSABLE_ENTITY,
      status: RESPONSE.ERROR,
      message: "Invalid JSON payload passed.",
      data: null,
    });
  }
});

const apiRouter = express.Router();
// const routes = require("../src/app/modules");

// expose routes here
// apiRouter.use(routes());
// app.use('/', routes);
// handler for route-not-found
apiRouter.use((_req, _res, next) => {
  next(
    createError(HTTP.NOT_FOUND, [
      {
        code: HTTP.NOT_FOUND,
        status: RESPONSE.ERROR,
        message: "Route not found.",
        data: null,
      },
    ])
  );
});

// error handler for api router
apiRouter.use((error, _req, res, _next) => {
  console.log(error);
  const initialError = error;
  if (!error.statusCode) {
    error = createError(HTTP.SERVER_ERROR, [
      {
        code: HTTP.SERVER_ERROR,
        status: RESPONSE.ERROR,
        message: initialError.message || "Internal Server Error.",
        data: error.data,
        stack: error.stack,
      },
    ]);
  }

  return res.status(error.statusCode).json({
    code: error.code,
    status: error.status,
    message: error.message,
    data: error.data || null,
    ...(process.env.NODE_ENV === "development" && { stack: error.stack }),
  });

});


module.exports = app;
