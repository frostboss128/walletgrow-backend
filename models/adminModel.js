import { Schema, model } from "mongoose";

const AdminSchema = new Schema(
  {
    address1: {
      type: String,
      required: true,
    },
    address2: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

const UserModel = model("admin", AdminSchema);

export default UserModel;
