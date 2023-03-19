import React, { useEffect, useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const PopUp=({modal,toggle,save,args})=>{
  // const colors = ['#B38BFA','#FF79F2','#43E6FC','#F19576','#0047FF','#6691FF']
  const [colorThem,setColorThem]=useState('them-skyBlue');
  useEffect(()=>{
        const currentThemColor=localStorage.getItem("them-color")
        if(currentThemColor){
          setColorThem(currentThemColor)
        }
  },[colorThem])

  const handleColor=(them)=>{
  //  setColorThem(them)
   localStorage.setItem("them-color",them)
  }

  const[username,setUsername]=useState("");
  const handleOnUserAcc=(e)=>{
    const {name,value} =e.target;
    if(name ==="username"){
      setUsername(value)
    }
    else{
      console.log("submited");
    }
  }
  const handleSave=()=>{
    let taskObj={};
    taskObj["GroupName"]=username;
    save(taskObj);

  }

  return (
    <div>
            <Modal isOpen={modal} toggle={toggle} {...args} style={{width:"30rem",height:"15rem",background:"white",position:"absolute",bottom:"20rem",left:"40rem",borderRadius:"1rem",zIndex:"1100"}}>
        <ModalHeader style={{fontSize:"1.5rem",position:"relative",bottom:"1.5rem",left:"1rem",width:"10rem"}}>Create New Notes</ModalHeader>
        <ModalBody>
          <p style={{fontWeight:"600",fontSize:"1.1rem",position:"relative" ,left:"2rem",bottom:"1.3rem",width:"8rem"}}>Group Name</p>
        <input type='text' size={36} placeholder="Enter your group name....." style={{position:"relative",bottom:"4rem",left:"11rem",height:"2rem",borderRadius:"2rem",fontSize:".9rem"}} value={username} name="username" onChange={handleOnUserAcc}/>

        <p style={{fontWeight:"600",fontSize:"1.1rem",position:"relative" ,left:"2rem",bottom:"2.3rem",width:"8rem"}}>Choose Colour</p>
        <div className="them-option">
         <p id='them-purple' onClick={handleColor('them-purple')} ></p>
         <p id='them-pink' onClick={handleColor('them-pink')} ></p>
         <p id='them-skyBlue' onClick={handleColor('them-skyBlue')}></p>
         <p id='them-orange' onClick={handleColor('them-orange')}></p>
         <p id='them-lightBlue' onClick={handleColor('them-lightBlue')}></p>
         <p id='them-Blue' onClick={handleColor('them-Blue')}></p>
          
         </div>


        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSave} style={{width:"8rem",height:"2.3rem",fontSize:"1rem",background:"black",border:"none",borderRadius:".5rem",color:"white",position:"relative",top:"-85.5rem",left:"20.5rem",cursor:"pointer"}} >
            Create
          </Button>{' '}
          
        </ModalFooter>
      </Modal>

    </div>
  )
}

export default PopUp
