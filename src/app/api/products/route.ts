import { NextRequest, NextResponse } from 'next/server';
import { Product } from '@/models/product';
import mongooseConnect from '@/lib/mongoose';

export async function POST(request: NextRequest) {
  await mongooseConnect();

  const { name, description, price } = await request.json();

  const json_response = await Product.create({
    name,
    description,
    price,
  });

  return NextResponse.json(json_response);
}
