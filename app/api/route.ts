
// export const dynamic = 'force-dynamic' // 强制将组件标记为动态组件 每次请求时重新获取数据
// const { db ,sql} = require('@vercel/postgres');
// let client
// async function main(){
//      client = await db.connect();
// }
// main()
// export async function handler(req:NextApiRequest,res:NextApiResponse) {
//     try {
//         if (req.method === 'POST') {    
//             await  client.sql`UPDATE invoices SET amount = 1000 WHERE id = 3958dc9e-742f-4377-85e9-fec4b6a6442a ` 
//             res.status(200).json({code:200,msg:"数据已更新"})
//         }
//     } catch (error) {
//       throw Error("数据更新出错:"+error)
//     }
// }

export async function GET(request:Request){
    return new Response('Hello, Next.js!', {
        status: 200,
        headers: { 'Set-Cookie': `token=token123` },
      }) 
}

// export  default async function handler(req, res){
//     if(req.method === 'POST'){
//         // return NextResponse.json({ message: 'Hello from API!' });
//         res.status(200).json({ name: 'John Doe' }) 

//     }else if(req.method === 'GET'){
//         // return NextResponse.json({ message: 'Hello from API!' });
//         res.status(200).json({ name: 'Get John Doe' }) 

//     }
//     res.status(200).json({ name: 'Get John Doe' }) 
// }