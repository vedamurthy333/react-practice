
import React from "react"
import './App.css';
import Count from "./Count";
import datas from "./datas";

function App() {

  const [value,setValue]=React.useState(0)
  
function add(){
  setValue(prevvalue=>prevvalue+1)
}

function sub(){
  setValue(prevvalue=>prevvalue-1)
}


// const array1=[]
// const [array2,setArray2]=React.useState(array1)
// function next(){
//   console.log(array1)
//   array1.push(`things ${array1.length+1}`)
//       setArray2(array1)
      
//   // array1.push(`thing${array1.length+1}`)
  
// }
const array1=["thing1","thing2"]
const [array2,setArray1]=React.useState(array1)
function next(){
  setArray1(array1=>{
    return [...array1,`thing${array1.length+1}`]
  })
}
//  console.log("app")

const array6=["veda","vikas"]
const area = array6.map(key=>key)



const [squares,setSquares]=React.useState(datas)



function toggle(id){
 setSquares(prevValue=>{
  const newarray=[]
  for(let i=0;i<prevValue.length;i++){
    const cursq=prevValue[i]
    if(cursq.id===id){
      const updateSquare={
        ...cursq,
        on:!cursq.on
      }
      newarray.push(updateSquare)
    }
    else
    newarray.push(cursq)
  }
  return newarray
 })
}

const rend=squares.map(()=>
( <Count 
  key={squares.id}
  id={squares.id}
  on={squares.on}
  toggle={toggle}
/>)
)


const [messages,setMessages]=React.useState(["veda"])

  
function color(){
  setMessages(mes=>messages.length>1?mes:"murthy")
}


const [clear,setClear]=React.useState(["veda"])

const color1={
  backgroundColor:clear.length >0? "#222222" : "transparent"
}
 
function toggle23(){
  clear.name="vikas"
  setClear(val1=>clear.length>0 ? clear.name : "murthy")
}





const [formdata,setFormdata]=React.useState({
  firstName:"", lastName:"",email:"",comment:"",isfriendly:true,employment:"",favColor:""
})

function enter(event){
  event.preventDefault()
  // submitToApi(formdata)
  console.log(formdata)
}

console.log(formdata)

function changeHandle(event){
  const {name,value,type,checked}=event.target
  setFormdata(prevdata=>
   ( {
      ...prevdata,
      [name]:type==="checkbox"?checked:value
      
    })
  )
 
}

console.log("hello")
const [user,setUser]=React.useState({
  userName:"",userPass:"",confPass:"",testthat:true
})

function submit1(event){
  event.preventDefault()
  user.testthat===true ? console.log("thankyou for visiting to newsletter") : console.log("try once")
  user.userPass===user.confPass ? console.log("sign up successful") : console.log("sign up failed")

  // console.log(user)&& event.preventDefault()
}
console.log(user)
function changeone(event){
      const {name,value,type,checked}=event.target
      setUser(prevtext=>({
        ...prevtext,
           testthat:!user.testthat,
        [name]:type ==="checkbox" ? checked : value
      }))
}



  return (
    <div className="App">
      <button type="button" onClick={add} className="btn">+</button>
      <Count number={value}/>
      <button type="button" onClick={sub} className="btn">-</button>
      <br/>
      <button type="button" onClick={next}>click</button>
      <div >{array2}</div>
      {area}
      {rend}

      {messages.length === 0 ? <h1>no message</h1> : <h1>there is {messages.length}message{messages.length >1 && "s"}</h1>} 
      <div><button onClick={color}>{messages}</button></div>

      <div><button onClick={toggle23} style={color1}>{clear}</button></div>

      <form onSubmit={enter}>
      <input type="text" placeholder="first" onChange={changeHandle} name="firstName" value={formdata.firstName}/ >
      <br />
      <input type="text" placeholder="last" onChange={changeHandle} name="lastName" value={formdata.lastName}/ >
      <br />
      <input type="email" placeholder="email" onChange={changeHandle} name="email" / >
      <br />
      <input type="textarea" placeholder="textarea" onChange={changeHandle} value={formdata.comment} name="comment"/>
      <br />
      <input type="checkbox" id="isfriendly" checked={formdata.isfriendly} name="isfriendly" onChange={changeHandle }/>
      <label htmlFor="isfriendly" >how is he?</label>
      <br />
      <fieldset>
        <legend>hello all</legend>
        <input type="radio" id="unemployed" name="employment" onChange={changeHandle} value="unemployed" checked={formdata.employment==="unemployed"} />
        <label htmlFor="employment">unemployment</label>
        <input type="radio" id="parttime" name="employment" onChange={changeHandle} value="parttime" checked={formdata.employment==="parttime"} />
        <label htmlFor="employment">parttime</label>
      </fieldset>
      <br />
      <select id="favColor" value={formdata.favColor} onChange={changeHandle} name="favColor" >
      <option value="">choose</option>
        <option>red</option>
        <option>blue</option>
        <option>green</option>
      </select>
      <br />
      <br />
      <input type="submit" value="click"/>
      </form>
      <br />
      <br />
      <br />
      <form onSubmit={submit1}>
            <input type="text" placeholder="userName" name="userName" value={user.userName} onChange={changeone} />
            <br />
            <input type="password" placeholder="userPass" name="userPass" value={user.userPass} onChange={changeone} />
            <br />
            <input type="password" placeholder="confPass" name="confPass" value={user.confPass} onChange={changeone} />
            <br />
            <input type="checkbox" id="testthat" onChange={changeone} checked={user.testthat} name="testthat" />
            <label htmlFor="testthat" >I want to join the news letter"</label>
            <br />
            <br />
            <a href="https://www.figma.com/" target="_blank" ><input type="submit" value="Sign Up" /></a>
      </form>
    </div>
  );
}

export default App;
