import { Schema, model } from "mongoose";

const InvestmentTypeSchema = new Schema(
  {
    name: { type: String, required: true },
    daily: { type: String, required: true },
    cycle: { type: Number, required: true },
    cycle_description: { type: String, required: true },
    duration: { type: Number, required: true },
    duration_description: { type: String, required: true },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

const InvestmentTypeModel = model("InvestmentType", InvestmentTypeSchema);

export default InvestmentTypeModel;
