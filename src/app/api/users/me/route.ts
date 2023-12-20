import { connect } from "@/dbConfig/dbConfig";
import { getDataFromToken } from "@/helpers/getDataFromToken";
import User from "@/models/userModel";

import { NextRequest,NextResponse } from "next/server";

connect()

export async function GET(request:NextRequest){
    try {
        console.log("gathering information");
        
        const userId = await getDataFromToken(request)
        const userInformation = await User.findById(userId).select("-password -isAdmin -isVerified")
        console.log(userInformation);
        return NextResponse.json({
            message:"user found",
            data:userInformation
        })
    } catch (error:any) {
        return NextResponse.json({error:error.message},{status:400})
    }
}