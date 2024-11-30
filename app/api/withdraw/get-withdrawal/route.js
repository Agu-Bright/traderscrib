import { authOptions } from "@app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import connectDB from "@utils/connectDB";
import { NextResponse } from "next/server";
import Wallet from "@models/wallet";
import Deposit from "@models/Deposit";
import Withdrawal from "@models/withdrawal";

export const GET = async (req) => {
  //check if user is authenticated
  const session = await getServerSession(
    req,
    {
      ...NextResponse,
      getHeader: (name) => NextResponse.headers?.get(name),
      setHeader: (name, value) => NextResponse.headers?.set(name, value),
    },
    authOptions
  );
  if (!session) {
    return Response.json(
      { message: "You must be logged in." },
      { status: 401 }
    );
  } else if (session?.user?.role === "user") {
    return Response.json({ message: "Forbidden request" }, { status: 403 });
  }
  try {
    await connectDB;
    const withdraws = await Withdrawal.find().populate("user").populate("wallet");

    if (!withdraws) {
      return Response.json(
        { success: false, message: "No wallet Found" },
        { status: 404 }
      );
    }

    return Response.json({ message: "success", withdraws }, { status: 200 });
  } catch (error) {
    return Response.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
};
