const router = require("express").Router();
const { userControllers } = require("../controllers");
const { body } = require("express-validator");
const { auth } = require("../helpers/authToken");
const {
  checkLogin,
  checkRegister,
  checkForgetPassword,
  checkNewPassword,
  checkChangePassword,
} = require("../validator/user");
const { handleValidationError } = require("../middleware/handleError");

router.put(
  "/register",
  checkRegister(),
  handleValidationError,
  userControllers.userRegister
);
router.post(
  "/login",
  checkLogin(),
  handleValidationError,
  userControllers.login
);
router.patch("/verified", auth, userControllers.verification);
router.post(
  "/forgetPassword",
  checkForgetPassword(),
  handleValidationError,
  userControllers.forgetPassword
);
router.post(
  "/resetPassword",
  checkNewPassword(),
  handleValidationError,
  userControllers.resetPassword
);
router.post(
  "/changePassword",
  checkChangePassword(),
  handleValidationError,
  userControllers.changePassword
);
router.get("/profile", userControllers.getUser);
router.patch("/picture/:id", userControllers.uploadPictureProfile);

module.exports = router;
