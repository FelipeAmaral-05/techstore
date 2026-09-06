import { useState, useEffect } from 'react'
const imagens = [
"https://plus.unsplash.com/premium_photo-1681426687411-21986b0626a8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
"https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
"https://plus.unsplash.com/premium_photo-1682124710157-d1573373a4f5?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"



]
export default function Carrossel(){
const [i,setI]=useState(0)
useEffect(()=>{
const t=setInterval(()=>setI(p=>(p+1)%3),3000)
return()=>clearInterval(t)
},[])
return(
<div className="carrossel">
<button onClick={()=>setI((i-1+3)%3)}>&lt;</button>
<img src={imagens[i]} alt="banner" />
<button onClick={()=>setI((i+1)%3)}>&gt;</button>
</div>
)
}