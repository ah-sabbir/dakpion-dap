import { NextResponse } from "next/server";
// import { GUN } from "gun";


const Gun = require("gun");

const gun = Gun.serve();


export async function GET(){
    var mark = gun.put({
        username: "marknadal",
        name: "Mark Nadal",
        email: "mark@gunDB.io"
      });
    return NextResponse.json({role:'bot', content: mark});
}
