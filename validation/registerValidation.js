import validator from "validator";
import isEmpty from "../utils/isEmpty.js";

const registerValidation = (req, res, next) => {
  let { username, email, password, password2 } = req.body;
  let errors = {};

  email = !isEmpty(email) ? email : "";
  username = !isEmpty(username) ? username : "";
  password = !isEmpty(password) ? password : "";
  password2 = !isEmpty(password2) ? password2 : "";

  if (validator.isEmpty(username)) errors.username = "Username is required";

  if (!validator.isEmail(email)) errors.email = "Invalid Email format";

  if (validator.isEmpty(email)) errors.email = "Email is required";

  if (!validator.isLength(password, { min: 8 })) errors.password = "Password length must be more than 8";

  if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-])[A-Za-z\d@$!%*?&]{8,10}$/.test(password))
    errors.password = "Invalid password format";

  if (validator.isEmpty(password)) errors.password = "Password is required";

  if (!validator.equals(password, password2)) errors.password2 = "Passwords must match";

  if (validator.isEmpty(password2)) errors.password2 = "Password confirmation is required";

  if (!isEmpty(errors)) return res.status(400).json({ message: Object.values(errors) });
  next();
};

export default registerValidation;
