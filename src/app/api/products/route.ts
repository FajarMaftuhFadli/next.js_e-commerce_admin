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

export async function GET(request: NextRequest) {
  await mongooseConnect();

  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (id) return NextResponse.json(await Product.findOne({ _id: id }));

  return NextResponse.json(await Product.find());
}
