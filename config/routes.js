const express = require("express");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const controllers = require("../app/controllers");
const cors = require("cors");

const apiRouter = express.Router();
const swaggerDocument = YAML.load('./openapi.yaml')

apiRouter.use(cors())

apiRouter.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

/**
 * TODO: Implement your own API
 *       implementations
 */
apiRouter.get("/api/v1/whoami", 
  controllers.api.v1.authController.authorize, 
  controllers.api.v1.authController.whoami);
apiRouter.post("/api/v1/register", controllers.api.v1.authController.register);
apiRouter.post("/api/v1/login", controllers.api.v1.authController.login);
apiRouter.post("/api/v1/login/google", controllers.api.v1.authController.googleLogin);

// route for cars
apiRouter.get("/api/v1/cars", controllers.api.v1.carsController.list);
apiRouter.post("/api/v1/cars", controllers.api.v1.carsController.create);
apiRouter.put("/api/v1/cars/:id", controllers.api.v1.carsController.update);
apiRouter.get("/api/v1/cars/:id", controllers.api.v1.carsController.show);
apiRouter.delete(
  "/api/v1/cars/:id",
  controllers.api.v1.carsController.destroy
);


apiRouter.get("/api/v1/posts", controllers.api.v1.postController.list);
apiRouter.post("/api/v1/posts", controllers.api.v1.postController.create);
apiRouter.put("/api/v1/posts/:id", controllers.api.v1.postController.update);
apiRouter.get("/api/v1/posts/:id", controllers.api.v1.postController.show);
apiRouter.delete(
  "/api/v1/posts/:id",
  controllers.api.v1.postController.destroy
);

/**
 * TODO: Delete this, this is just a demonstration of
 *       error handler
 */
apiRouter.get("/api/v1/errors", () => {
  throw new Error(
    "The Industrial Revolution and its consequences have been a disaster for the human race."
  );
});

apiRouter.use(controllers.api.main.onLost);
apiRouter.use(controllers.api.main.onError);

module.exports = apiRouter;
