import { updateData } from "@/lib/firebase/service";
import { NextRequest, NextResponse } from "next/server";

export async function  POST(request: NextRequest, res: NextResponse) {
    if (request.method === "POST") {
        const req = await request.json();
        const res = await updateData("todo", req, req.id);
        
        return NextResponse.json({ status: 200, message: res.message});
    } else {
        return NextResponse.json({ status: 405, message: "Method not allowed}"});
    }
}