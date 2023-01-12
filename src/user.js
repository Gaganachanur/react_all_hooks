import React,{useContext} from "react";
import   {userContext}  from './App.js'

export default function  User () {
     const {user} = useContext(userContext)
  return(

   <h1> got the state {user}</h1>
        
    
    )
}

