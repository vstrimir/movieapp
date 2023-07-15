const { body, validationResult } = require("express-validator");

const storeUserValidation = [
  body("first_name").notEmpty().trim().withMessage("First name is required"),
  body("last_name").notEmpty().trim().withMessage("Last name is required"),
  body("email")
    .notEmpty()
    .trim()
    .isEmail()
    .withMessage("Email name is required"),
  body("contact")
    .notEmpty()
    .trim()
    .isMobilePhone()
    .withMessage("Contact name is required"),
];
const updateUserValidation = [
  body("first_name")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("First name is required"),
  body("last_name")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("Last name is required"),
  body("email")
    .optional()
    .trim()
    .isEmail()
    .notEmpty()
    .withMessage("Email name is required"),
  body("contact")
    .optional()
    .trim()
    .isMobilePhone()
    .notEmpty()
    .withMessage("Contact name is required"),
];

const handleValidattionErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = { storeUserValidation, handleValidattionErrors };
