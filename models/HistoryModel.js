import { Schema, model } from "mongoose";

const HistorySchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    type: {
      type: String,
      enum: ["in", "out"],
      required: true,
    },
    amount: {
      type: Schema.Types.Decimal128,
      required: true,
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

HistorySchema.virtual("coin").get(function () {
  return parseFloat(this.amount);
});

const HistoryModel = model("History", HistorySchema);

export default HistoryModel;
