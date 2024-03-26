import { Schema, model } from "mongoose";

const AdminSchema = new Schema(
  {
    address: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const AddressModel = model("address", AdminSchema);

export default AddressModel;
