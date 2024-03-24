import { Schema, model } from "mongoose";

const WalletSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    binance: {
      type: Schema.Types.Decimal128,
      required: true,
      default: 0,
    },
    investment: [{ type: Schema.Types.ObjectId, ref: "Investment" }],
    password: {
      type: String,
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

WalletSchema.virtual("coin").get(function () {
  return parseFloat(this.binance).toFixed(3);
});

const WalletModel = model("Wallet", WalletSchema);

export default WalletModel;
