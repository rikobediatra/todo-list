import { retrieveData, retrieveDataById } from "@/lib/firebase/service";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    if (id) {
        const todo = await retrieveDataById("todo", id);
        if (todo) {
            return NextResponse.json({ status: 200, message: "success", data: todo});
        } else {
            return NextResponse.json({ status: 404, message: "failed", data: []});
        }
    }

    const todos = await retrieveData("todo");
    return NextResponse.json({ status: 200, message: "success", data: todos});
}