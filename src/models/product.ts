import { model, Schema, models } from 'mongoose';

const ProductSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
});

export const Product = models.Products || model('Product', ProductSchema);
