import React from 'react';
import { Button } from 'react-bootstrap';
 
 
import './sidebar.css'
const Sidebar = (props) => {
    const handleOption=(them,title)=>{
      
        props.setThem({them,title})
      }
    return (
        <div style={{backgroundColor:"#FFFF",height:"100vh",padding:"25px"}}>
            
            <div className="sidelink">
            <Button variant="" className="btnStyle" onClick={()=>handleOption('allBooks','Books')}>
                 <span className="btnText">All Books</span>
            </Button>
            
            <Button variant="" className="btnStyle" onClick={()=>handleOption('addBook', 'Add Book')}>
                  <span className="btnText">Add Books</span>
            </Button>
            
             
            </div>
        </div>
    );
};  

export default Sidebar;