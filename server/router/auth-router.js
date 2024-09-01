const express = require("express");
const router = express.Router();
const authcontrollers = require("../controllers/auth-controller");

const {
    signupSchema,
    loginSchema,
    registerSchema,
    feedbackSchema,
    trainempSchema,
    salarySchema,
    cashSchema
} = require("../validators/auth-validator");

const validate = require("../middlewares/validate-middleware");
const authMiddleware = require("../middlewares/auth-middleware");
const validateFeedback = require("../middlewares/feedback-middleware");
const validateSalary = require("../middlewares/salary-middleware");
const validateTrainEmp = require("../middlewares/trainemp-middleware");
const validateCash = require("../middlewares/cash-middleware");
const Register = require('../models/register-model');

// Home route
router.route("/").get(authcontrollers.home);

// Registration routes (choose one and stick to it)
router.route("/register")
  .post(validate(registerSchema), authcontrollers.register);

// Alternatively, if you want a shorter path:
router.route("/reg")
  .post(validate(signupSchema), authcontrollers.registers);

// Login route
router.route("/login").post(validate(loginSchema), authcontrollers.login);

// User route (protected)
router.route("/user").get(authMiddleware, authcontrollers.user);

// Fetch registration details by ID
router.get('/register/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const registration = await Register.findOne({ employeeId: id });

    if (registration) {
      res.status(200).json(registration);
    } else {
      res.status(404).json({ error: 'Registration data not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Feedback route
router.route("/feedback")
  .post(validateFeedback(feedbackSchema), authcontrollers.submitFeedback);

// Train Employee route
router.route("/trainemp")
  .post(validateTrainEmp(trainempSchema), authcontrollers.submitTrainEmp);

// Salary route
router.route("/salary")
  .post(validateSalary(salarySchema), authcontrollers.submitSalary);

// Cash routes
router.route('/cash')
  .post(validateCash(cashSchema), authcontrollers.submitCash)
  .get(validateCash(cashSchema), authcontrollers.submitCash);
   // Assuming there's a get handler in your controller

router.route('/cash/:id')
  .delete(validateCash(cashSchema), authcontrollers.submitCash); // Assuming there's a delete handler in your controller

module.exports = router;
