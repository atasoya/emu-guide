// test for database connection
import {NextResponse } from 'next/server';
import { connect } from "@/lib/db";

export async function GET() {
    try {
        await connect();
        return NextResponse.json({message:"Connection was successful"}, { status: 200 });
    } catch (error) {
        return NextResponse.json({message: (error instanceof Error) ? error.message : 'An unknown error occurred'}, { status: 500 });
    }
}