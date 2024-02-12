import {useState, useEffect} from "react";
export default function Yes() {
    const [imageUrl, setImageUrl]= useState("");

    useEffect(()=>{
        const url2=setTimeout( ()=>{
            setImageUrl("https://i.pinimg.com/originals/fd/60/15/fd6015dd3f31d0223374f993f66e85d3.gif") 
        },0)
        const url1=setTimeout( ()=>{
       setImageUrl("https://i.pinimg.com/originals/50/c2/f1/50c2f13c590fdb27c087d6a6736218e0.gif")
        
        },1500)
        

      },[])
    return (
        <div id="yes">
            <img alt="bear" height="60%" src={imageUrl}/>
            <h1> Cant wait to see you!!</h1>
        </div> 
    )
}