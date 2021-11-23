import { Router } from "express";
import { loginUser } from "./authLogController";
import { validateSchema } from "../../middleware/validation";
import { schemaAuth } from "./authLogValidations";

const router = Router({ mergeParams: true });

// route for login 
router
  .route("/login")
  .post([validateSchema(schemaAuth.loginValidation, "body")], loginUser);

// export router
export default router;
