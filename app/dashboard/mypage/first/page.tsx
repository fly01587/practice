'use client'

import { useEffect } from "react"

export default  function First() {
   
    console.log("  浏览器渲染  ")

    async function getMeS() {
        const res = await fetch('/api/hello',{
            method:'GET'
        })
        console.log("res",res)
    }

    useEffect(()=>{
    },[])

    return (
        <div className='p-4'>
            <button onClick={getMeS}>点</button>
            First
        </div>
    )
}
