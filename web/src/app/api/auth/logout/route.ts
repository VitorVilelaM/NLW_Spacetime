import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest){
    const redirectURL = new URL('/', request.url)

    // Salvando dados nos cookies e retornando para a Home
    return NextResponse.redirect(redirectURL, {
        headers:{
            'Set-Cookie': `token=; Path=/; max-age=${0};`
        }
    })
}