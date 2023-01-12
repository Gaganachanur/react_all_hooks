import React , {useEffect} from "react";


const Test = ({callbackTest}) =>{

  useEffect(()=>{
    console.log('function called in loginn')
   },[callbackTest]);

  return <div>{callbackTest()} </div>
}

export default Test