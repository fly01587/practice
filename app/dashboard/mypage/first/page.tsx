'use client'

import { useEffect } from "react"

export default  function First() {
   
    console.log("  浏览器渲染  ")

    async function getMeS() {
        const res = await fetch('/api',{
            method:'GET'
        })
        console.log("res",res)
    }

   async function getMe() {
    const res = await fetch('/api/user',{
        method:'GET'
    })
    console.log("ss",res)
    }
    useEffect(()=>{
    },[])

    return (
        <div className='p-4'>
            <button onClick={getMeS}>点1</button>
            <button onClick={getMe}>点2</button>
            First
        </div>
    )
}
