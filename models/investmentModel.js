import { Schema, model } from "mongoose";
import Wallet from "./walletModel.js";
import moment from "moment";

const InvestmentSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    type: {
      type: Schema.Types.ObjectId,
      ref: "InvestmentType",
      required: true,
    },
    amount: {
      type: Schema.Types.Decimal128,
      required: true,
      default: 0,
    },
    total: {
      type: Schema.Types.Decimal128,
      required: true,
      default: 0,
    },
    end: Date,
    completed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: {
      createdAt: "stated",
      updatedAt: "updated_at",
    },
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

InvestmentSchema.virtual("coin").get(function () {
  return parseFloat(this.amount).toFixed(3);
});

InvestmentSchema.virtual("total_coin").get(function () {
  return parseFloat(this.total).toFixed(3);
});

InvestmentSchema.methods.updateTotal = async function () {
  if (this.completed) return;

  await InvestmentModel.populate(this, { path: "type" });

  if (moment.utc().isBefore(this.end)) {
    const increaseAmount = (parseFloat(this.amount) * parseFloat(this.type.daily)) / 100;
    this.total = parseFloat(this.total_coin) + parseFloat(increaseAmount.toFixed(3));
  } else {
    this.completed = true;
    const wallet = await Wallet.findOneAndUpdate({ user: this.user }, { $inc: { binance: parseFloat(this.total) } });
    console.log(wallet.coin);
  }

  this.save();
};

const InvestmentModel = model("Investment", InvestmentSchema);

setInterval(async () => {
  const investments = await InvestmentModel.find();

  for (const investment of investments) {
    await investment.updateTotal();
  }
  // 24 * 60 * 60 * 1000
}, 24 * 60 * 60 * 1000);

export default InvestmentModel;
