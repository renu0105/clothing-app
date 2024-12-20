import { NextRequest, NextResponse } from "next/server";
import connectToDb from "../../../../middleware/connectToDb";
import ProductModel from "../../../../models/ProductModel";

export async function GET(req, res) {
  await connectToDb();
  try {
    const { searchParams } = new URL(req.url);
    const slug = searchParams.get("slug");
    console.log(slug);
    if (slug) {
      const products = await ProductModel.findOne({ slug: slug });
      return NextResponse.json(products);
    }
    const products = await ProductModel.find();
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: error.message,
    });
  }
}

export async function POST(req, res) {
  await connectToDb();
  try {
    const body = await req.json();
    const products = await ProductModel.create(body);
    return NextResponse.json(products);
  } catch (error) {
    return;
  }
}
