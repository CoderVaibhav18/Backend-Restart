import mongoose from "mongoose";

const productItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const orderSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    orderItems: {
      type: [productItemSchema],
    },
    address: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "cancelled", "delivered"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

export const Order = mongoose.model("order", orderSchema);
