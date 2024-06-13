
import { useState } from 'react';
import '../App.css';
import Head from "./Head"
import Appinput from "./Appinput"
import Appbutton from './Appbutton'
import Display from './Display'


function List(){
 const[input,setinput] = useState('')
 const [tasks,settasks] = useState([])

 const handleChange = (event)=>{
  setinput(event.target.value)
 }

 const handleClick =()=>{
if(input.length < 1){
  alert("Add a task")
}
else{
settasks([...tasks,input])
setinput('')
}


 }
  return(
      <div>
        <Head />
  <Appinput value= {input} onChange ={handleChange} />
          <Appbutton onClick ={handleClick}  />
    <Display tasks={tasks} />
      </div>
    )

}

export default List ;
