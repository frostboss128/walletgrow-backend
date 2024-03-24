import { Schema, model } from "mongoose";

const WithdrawSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    binance: {
      type: Schema.Types.Decimal128,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["Approved", "Pending", "Failed"],
      default: "Pending",
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

WithdrawSchema.virtual("coin").get(function () {
  return parseFloat(this.binance).toFixed(3);
});

const WithdrawModel = model("Withdraw", WithdrawSchema);

export default WithdrawModel;
