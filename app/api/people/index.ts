
export const dynamic = 'force-dynamic' // 强制将组件标记为动态组件 每次请求时重新获取数据
const { db ,sql} = require('@vercel/postgres');
import type { NextApiRequest, NextApiResponse } from 'next'
let client:any 
async function main(){
     client = await db.connect();
}
main()
export async function handler(req:NextApiRequest,res:NextApiResponse) {
    try {
        if (req.method === 'POST') {    
            await  client.sql`UPDATE invoices SET amount = 1000 WHERE id = 3958dc9e-742f-4377-85e9-fec4b6a6442a ` 
            res.status(200).json({code:200,msg:"数据已更新"})
        }
    } catch (error) {
      throw Error("数据更新出错:"+error)
    }
   
}