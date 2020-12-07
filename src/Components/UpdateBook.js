import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { HiCloudUpload } from 'react-icons/hi'
import Modal from 'react-modal'
import { useHistory, useLocation } from 'react-router-dom';
const UpdateBook = () => {
    const location = useLocation()
    const data1 = location.state.detail;
    const {_id,bookName,author,genre,status,releaseDate} = data1
     
    const [bookInfo, setBookInfo] = useState({ bookName:bookName , author: author,genre:genre,status:status,releaseDate:releaseDate ,file: "" })
    const [error, setError] = useState(false);
     const history = useHistory()
    
    const handleChage = e => {
        const newService = { ...bookInfo }
        newService[e.target.name] = e.target.value;
        setBookInfo(newService)
    }
    const handleChageFile = e => {
        const newService = { ...bookInfo }
        newService.file = e.target.files[0]
        setBookInfo(newService)
        setError(false)
    }

    const handleSubmit = e => {
        e.preventDefault();
        
        console.log(data1.bookImage);
        let data = new FormData();
        data.append('bookName', bookInfo.bookName)
        data.append('author', bookInfo.author)
        data.append('genre', bookInfo.genre)
        data.append('status', bookInfo.status)
        data.append('releaseDate', bookInfo.releaseDate)
        data.append('contentType', data1.bookImage.contentType)
        data.append('size', data1.bookImage.size)
        data.append('img', data1.bookImage.img)
        data.append('file', bookInfo.file)
        
       
            fetch(`https://frozen-sierra-38115.herokuapp.com/updateBook/${_id}`, {
                method: "PATCH",
                
                
                body:data

            }).then(res => {
               
               history.replace('/librarian')
                 
            })
                .catch(err => {
                   
                })
        

    }

    
    return (
        <div style={{ width: "80%", backgroundColor: "white",margin:"auto"  }}>
            
                    <Form onSubmit={handleSubmit} style={{padding:"20px",width:"60%",margin:"auto",marginTop:"40px"}} >
                        <div id="addService">
                            <div id="part1">
                                <Form.Group controlId="formBasicBookName">
                                    <Form.Label>Book Name</Form.Label>
                                    <Form.Control type="text" name="bookName" value={bookInfo.bookName} onChange={handleChage} required />

                                </Form.Group>

                                <Form.Group controlId="formBasicAuthor">
                                    <Form.Label>Author</Form.Label>
                                    <Form.Control type="text" name="author"  value={bookInfo.author} onChange={handleChage} required />
                                </Form.Group>

                                <Form.Group controlId="formBasicGenre">
                                    <Form.Label>Genre</Form.Label>
                                     <Form.Control  as="select" name="genre" onChange={handleChage} required defaultValue="Action and Adventure" value={bookInfo.genre}>
                                         <option value="Action and Adventure">Action and Adventure</option>
                                         <option value="Classics">Classics</option>
                                         <option value= "Comic Book or Graphic Novel">Comic Book or Graphic Novel</option>
                                         <option value="Detective and Mystery">Detective and Mystery</option>
                                         <option value="Fantasy">Fantasy</option>
                                         <option value= "Historical Fiction" >Historical Fiction</option>
                                         <option value= "Horror">Horror</option>
                                         <option value= "Literary Fiction">Literary Fiction</option>
                                         
                                     </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="formBasicStatus">
                                    <Form.Label>Status</Form.Label>
                                     <Form.Control  as="select" name="status" onChange={handleChage} required   value={bookInfo.status}>
                                         <option value="active">Active</option>
                                         <option value="deactive">Deactive</option>
                                     </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="formBasicDate">
                                    <Form.Label>Relece Date</Form.Label>
                                    <Form.Control type="date" name="releaseDate" value={bookInfo.releaseDate} onChange={handleChage} required />
                                </Form.Group>


                            </div >
                            <div id="part2" >
                                <Button className="btnstyle2" onClick={() => document.getElementById("file").click()}><HiCloudUpload /> Upload Photo</Button>
                                <input type="file" name="file" id="file"  onChange={handleChageFile} style={{ display: "none" }} />
                                <small style={{ padding: "10px", color: "#009444" }}>{bookInfo.file.name  }</small>
                                {
                                    error && <small style={{ padding: "10px", color: "red", fontWeight: "600" }}>have to to upload an image</small>
                                }
                            </div>
                        </div>
                        <Button className="btnstyle3" style={{marginTop:"20px",padding:"5px 20px"}} variant="primary" type="submit">
                            Update
                            </Button>

                    </Form>

                
            


        </div>
    );
};

export default UpdateBook;