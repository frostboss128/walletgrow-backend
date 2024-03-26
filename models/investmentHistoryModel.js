import { Schema, model } from "mongoose";

const InvestmentHistorySchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    type: {
      type: Schema.Types.ObjectId,
      ref: "InvestmentType"
    },
    amount: {
      type: Schema.Types.Decimal128,
      required: true
    }
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    },
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

InvestmentHistorySchema.virtual("coin").get(function () {
  return parseFloat(this.amount).toFixed(3);
});

const InvestmentHistoryModel = model("InvestmentHistory", InvestmentHistorySchema);

export default InvestmentHistoryModel;
