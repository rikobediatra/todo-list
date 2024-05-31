// make api to delete data from database
import { deleteData } from "@/lib/firebase/service";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest) {

    if (request.method === "DELETE") {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get("id");

        if (!id) {
            return NextResponse.json({ status: 400, message: "ID is required" });
        }
        
        try {
            await deleteData("todo", id);
            return NextResponse.json({ status: 200, message: "Success" });
        } catch (err) {
            return NextResponse.json({ status:400, message: err });
        };

    } else {
        return NextResponse.json({ status: 405, message: "Method not allowed}"});
    }
}