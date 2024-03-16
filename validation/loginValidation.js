import validator from "validator";
import isEmpty from "../utils/isEmpty.js";

const loginValidation = (req, res, next) => {
  let { email, password } = req.body;
  let errors = {};

  email = !isEmpty(email) ? email : "";
  password = !isEmpty(password) ? password : "";

  if (!validator.isEmail(email)) errors.email = "Invalid Email format";

  if (validator.isEmpty(email)) errors.email = "Email is required";

  if (validator.isEmpty(password)) errors.password = "Password is required";

  if (!isEmpty(errors)) return res.status(400).json({ message: Object.values(errors) });
  next();
};

export default loginValidation;
