import { Schema, model } from "mongoose";

const RechargeSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    type: {
      type: String,
      enum: ["trx", "usdt"],
      required: true,
    },
    coin: {
      type: Number,
      required: true,
    },
    transactionId: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["Approved", "Pending", "Failed"],
      default: "Pending",
    },
    amount: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

const RechargeModel = model("Recharge", RechargeSchema);

export default RechargeModel;
