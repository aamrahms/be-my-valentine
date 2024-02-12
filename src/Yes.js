import {useState, useEffect} from "react";
export default function Yes() {
    const [imageUrl, setImageUrl]= useState("");

    useEffect(()=>{
        const url2=setTimeout( ()=>{
            setImageUrl("https://i.pinimg.com/originals/fd/60/15/fd6015dd3f31d0223374f993f66e85d3.gif") 
        },0)
        const url1=setTimeout( ()=>{
        //   setImageUrl("https://i.pinimg.com/originals/3b/e4/d7/3be4d74d5f8308b2e6edbc605f2efd2e.gif");
        // setImageUrl("https://i.pinimg.com/originals/04/01/d7/0401d7211d0d78935e6976e1e4628f2f.gif")
        setImageUrl("https://i.pinimg.com/originals/50/c2/f1/50c2f13c590fdb27c087d6a6736218e0.gif")
        // div.appendChild(h1);
        },1500)
        

      },[])
    return (
        <div id="yes">
            <img alt="bear" height="60%" src={imageUrl}/>
            <h1> Cant wait to see you!!</h1>
        </div> 
    )
}