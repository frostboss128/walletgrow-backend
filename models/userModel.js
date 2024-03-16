import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: "Email already exists",
      match: [/.+\@.+\..+/, "Please fill a valid email address"],
      required: "Email is required",
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    pay_password: String,
    verified: {
      type: Boolean,
      default: false,
    },
    level: {
      type: Number,
      default: 0,
    },
    binance: {
      type: Schema.Types.Decimal128,
      default: 0.0,
    },
    roles: {
      type: String,
      enum: ["user", "admin", "superAdmin"],
      default: "user",
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

UserSchema.methods = {
  matchPassword: async function (password) {
    return await bcrypt.compare(password, this.password);
  },
};

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) next();

  const salt = await bcrypt.genSalt(5);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.virtual("coin").get(function () {
  return parseFloat(this.binance);
});

const UserModel = model("User", UserSchema);

export default UserModel;
