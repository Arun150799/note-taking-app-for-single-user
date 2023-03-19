import { useEffect, useState } from "react";
import PopUp from "../Modals/PopUp"
import '../Modals/PopUp.css';
import img from '../assets/noteSub.png';

function Note() {
  const [modal, setModal] = useState(false);
  const [usernameList,setUsernameList] =useState([])
  const [showNote,setShowNote]=useState(false);
  const [inputNote,setInputNote]=useState('');
  const [note,setNote] =useState([]);

  const toggle = () => {
  setModal(!modal);
  }
 const  saveList=(taskObj)=>{
let tempList =usernameList
tempList.push(taskObj)
localStorage.setItem("usernameList",JSON.stringify(tempList))
setUsernameList(tempList)
setModal(false);
}
  useEffect(()=>{
    let myarr =localStorage.getItem("usernameList")
    if(myarr){
      let obj =JSON.parse(myarr)
    setUsernameList(obj)
    }
  },[])


const addNote=(e)=>{
  if(!inputNote){

  }
  else if(e.key==="Enter"){
    setNote([...note,inputNote])
    setInputNote('');
  } 
  // else {
  //  setNote([...note,inputNote])
  //   setInputNote(''); 
  // }
}
 
const HandleUserPage=()=>{


return(
  <>
  <div className="leftContainer" id="my-components" style={{background:"#E8E8E8",width:"72.4rem",height:"46rem",position:"fixed",left:"22.6rem",top:"0rem",borderBottomLeftRadius:".7rem"}} >
  {usernameList.map((obj,index2)=><ul key={index2}  style={{color:"white",marginTop:"0rem",width:"1.5rem",padding:"1rem",paddingBottom:"3.4",fontSize:"1.2rem",fontWeight:"550",position:"absolute",top:".2rem",left:"3.8rem",zIndex:"1190",background:"blue",borderRadius:"50%",display:"flex",justifyContent:"center"}}>{(obj.GroupName.substring(0,2).toUpperCase())}</ul>)}
        {usernameList.map((obj,index3)=><ul key={index3} style={{color:"black",background:"#E8E8E8",position:"absolute",top:"-1.5rem",left:"3.6rem",fontSize:"1.6rem",paddingTop:".9rem",fontWeight:"550",width:"64.8rem",height:"3rem",zIndex:"1100",paddingLeft:"7rem",borderTopLeftRadius:"1.8rem",borderBottomLeftRadius:"1.8rem"}} onClick={()=>setShowNote(true)}>{(obj.GroupName.charAt(0).toUpperCase()+obj.GroupName.slice(1))}</ul>)}
    <div className="mainContainer"  style={{background:"#F7ECDC",position:"relative",top:"4rem",zIndex:"1070",height:"30rem",overflowY:"scroll"}} >
        {
        note.map((elem,ind)=>{
 var  now = new Date();
    var   month = now.getMonth() +1;
    localStorage.setItem("notes",JSON.stringify(note))
     var day = now.getDate();
     var year1 = now.getFullYear();
     var hours = now.getHours();
     var mins = now.getMinutes();
     let  period = "AM";
     if(hours>11){
      period="PM";
if(hours>12) hours-=12;
     }
     if(mins<10){
      mins="0"+mins;
       }      
           return(
            <div className="showNote" style={{color:"black",width:"52.4rem",paddingLeft:"15rem",height:"4rem",position:"relative",top:"1rem",right:"0rem",zIndex:"1090"}} key={ind}>
              <h2 style={{fontSize:"1rem",fontWeight:"500",width:"58rem",position:"relative",left:"-5rem"}}>{elem}</h2>
              <h2 style={{fontSize:"1rem",fontWeight:"600",position:"relative",right:"12rem",bottom:"1.5rem"}}>{day+"/"+month+"/"+year1}</h2>
              <h2 style={{fontSize:"1rem" ,fontWeight:"600",position:"relative",bottom:"5rem",right:"12rem"}}>{hours+ ":" + mins +" " +period}</h2>
      </div>

          );
        })
        
      }
      
    </div>
    <img style={{position:"absolute",top:"42rem",left:"67rem",zIndex:"1020",cursor:"pointer"}} value={inputNote} src={img} alt="" onClick={addNote}/>
      <input type='text' className="inputNote" onKeyDown={addNote} size={102}  value={inputNote} placeholder="Enter your text here......." onChange={(e)=>setInputNote(e.target.value)} autoFocus/>
  </div>
  
  </>
);
}

useEffect(()=>{
  let myarr2=(localStorage.getItem("notes"))
  if(myarr2){
      let obj2 =JSON.parse(myarr2)
    setNote(obj2)
  }
    },[])

  return (  
    <div>
      <>
      <div className="aboutUser">
      <p style={{fontSize:"1.6rem",fontWeight:"bold",position:"relative",left:"1rem",top:"1rem"}}>Pocket Notes</p>
      <p style={{position:"relative",top:"2rem",left:"4rem",fontSize:"1.5rem",fontWeight:"bold",color:"white",background:"black",width:"15rem",display:"flex",justifyContent:"center",height:"2.4rem",borderRadius:"2rem",paddingTop:".5rem",cursor:"pointer"}} onClick={()=>setModal(true)}>+ Create Note</p>
      <div id={"my-components"} style={{position:"fixed",top:"9rem",height:"38rem" ,overflowY:"scroll"}}>
        {usernameList.map((obj,index)=><ul key={index}   onClick={()=>setShowNote(true)} id="click" >{(obj.GroupName.charAt(0).toUpperCase()+obj.GroupName.slice(1))}</ul>)} 
        <div className="icon" style={{position:"fixed",top:"11rem",paddingTop:"1rem" ,lineHeight:"1.5"}}>

        {usernameList.map((obj,index1)=><ul key={index1}  onClick={()=>setShowNote(true)} style={{paddingTop:".8rem",width:"2rem",height:"2rem",padding:".8rem",borderRadius:"50%",background:"blue",color:"white",fontSize:"1.2rem",fontWeight:"600",position:"relative",cursor:"pointer",top:"-1.5rem",left:"2.5rem",display:"flex",justifyContent:"center",marginBottom:"1.3rem"}}>{(obj.GroupName.substring(0,2).toUpperCase())}</ul>)}
        </div>
        {showNote && <HandleUserPage />}
        </div>

      </div>
      <PopUp toggle={toggle} modal={modal} save={saveList} />

      </>
    </div>
  )
}

export default Note
