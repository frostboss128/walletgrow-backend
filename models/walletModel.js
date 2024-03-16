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
    invest: {
      type: Number,
      required: true,
      default: 0,
    },
    password: {
      type: String,
    },
    start: Date,
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
  return parseFloat(this.binance);
});

const WalletModel = model("Wallet", WalletSchema);

export default WalletModel;
