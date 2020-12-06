import React, { useEffect } from 'react';
import { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UpdateBook from '../UpdateBook';
import Modal from 'react-modal'
import LoadingGif from '../LoadingGif';
const AllBooks = () => {
    const [data, setData] = useState([]);
      

    useEffect(() => {
        fetch('https://frozen-sierra-38115.herokuapp.com/Books')
            .then(response => response.json())
            .then(Data => {
                 
                setData(Data)
            })
    }, [data])

    const handleDelete=(e,id)=>{
       
        fetch(`https://frozen-sierra-38115.herokuapp.com/deleteBook/${id}`, {
            method:"DELETE"
    }).then(res=>{  
          setData([])
    })
}
     
    return (
        
        <div style={{ width: "80%", margin: "auto", padding: "30px" }}>
            {
                data.length==0 && <LoadingGif></LoadingGif>
            }
            {
                data.map(dt =>
                    <Row style={{ backgroundColor: "#eee", marginTop: "15px", padding: "20px" }}>
                        <Col>
                            <img src={`data:image/png;base64,${dt.bookImage.img}`} width="60%" alt="" />
                        </Col>
                        <Col>
                            <h2>{dt.bookName}</h2>
                            <h6>{dt.author}</h6>
                            <h6>{dt.genre}</h6>
                            <h6>{dt.status}</h6>
                            <h6>{dt.releaseDate}</h6>
                            <div id="btnStyle" style={{display:"flex", marginTop:"20px"}}>
                                <Link to={{
                                    pathname:"/updateBook",
                                    state:{detail: dt}
                                }}>
                                    <Button variant="warning" > Update</Button>
                                </Link>
                                
                                <Button variant="danger" onClick={(e)=>handleDelete(e,dt._id)}>Delete</Button>
                                
    
                            </div>
                        </Col>
                      
                    </Row>
                )
            }
              {/* <Modal isOpen={isModelOpen}>
                     <UpdateBook data={data[0]} isModelOpen= {isModelOpen} setIsmodalOpen = {setIsmodalOpen} ></UpdateBook>
            </Modal> */}
        </div>
    )
};

export default AllBooks;