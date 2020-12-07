import React, { useEffect, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import LoadingGif from '../LoadingGif';

const StudentBooks = () => {
    const [name,setName] = useState("");
     const [lodding,setLodding] = useState(true)
    const [data, setData] = useState([]);
      

    useEffect(() => {
        fetch('https://frozen-sierra-38115.herokuapp.com/Books')
            .then(response => response.json())
            .then(Data => {
                 
                setData(Data)
            })
    }, [])
    const handleChange=event=>{
        setName(event.target.value)
    }
    const handleSubmit=e=>{
        e.preventDefault();
        
        fetch(`https://frozen-sierra-38115.herokuapp.com/getBook/${name}`)
        .then(res=>res.json())
        .then(data=>{
            setData(data)
            setLodding(false)
        })
    }
    return (
        
        <div style={{ width: "80%", margin: "auto", padding: "30px" }}>
                 <form onSubmit={handleSubmit} style={{margin:"auto",width:"60%"}} id="form">
                <input  type="text" placeholder="write book name" name="searchText" value={name} onChange={handleChange} />
                <Button style={{marginLeft:"10px"}} type="submit" >Search</Button>
                </form>
            {
                data.length==0 && lodding  && <LoadingGif></LoadingGif>
            }
            {
                data.length==0 && !lodding  && <h1>No Data Found</h1>
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
                            
                        </Col>
                      
                    </Row>
                )
            }
              
        </div>
    )
};

export default StudentBooks;