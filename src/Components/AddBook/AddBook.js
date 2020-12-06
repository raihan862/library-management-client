import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { HiCloudUpload } from 'react-icons/hi'
const AddBook = () => {
    const [bookInfo, setBookInfo] = useState({ bookName: "", author: "",genre:"",status:"active",releaseDate:"", file: "" })
    const [error, setError] = useState(false);
    const [content, setContent] = useState(true);
    const handleChage = e => {
        const newService = { ...bookInfo }
        newService[e.target.name] = e.target.value;
        setBookInfo(newService)
    }
    const handleChageFile = e => {
        const newService = { ...bookInfo }
        newService.file = e.target.files[0];
        setBookInfo(newService)
        setError(false)
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(bookInfo.file);
        if (bookInfo.file == "") {
            setError(true)
        }
        else {
            setError(false)
            let data = new FormData();
            data.append('bookName', bookInfo.bookName)
            data.append('author', bookInfo.author)
            data.append('genre', bookInfo.genre)
            data.append('status', bookInfo.status)
            data.append('releaseDate', bookInfo.releaseDate)
            data.append('file', bookInfo.file)
            
            fetch('https://frozen-sierra-38115.herokuapp.com/addBook', {
                method: "POST",
                body: data

            }).then(res => {
                console.log("come");
                setContent(false);
                setBookInfo({ bookName: "", author: "",genre:"",releaseDate:"", file: "" })
            })
                .catch(err => {
                    console.log(err);
                })
        }

    }


    return (
        <div style={{ width: "80%", backgroundColor: "white",margin:"auto"  }}>
            {
                content ? (
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
                                <input type="file" name="file" id="file" required onChange={handleChageFile} style={{ display: "none" }} />
                                <small style={{ padding: "10px", color: "#009444" }}>{bookInfo.file.name}</small>
                                {
                                    error && <small style={{ padding: "10px", color: "red", fontWeight: "600" }}>have to to upload an image</small>
                                }
                            </div>
                        </div>
                        <Button className="btnstyle3" style={{marginTop:"20px",padding:"5px 20px"}} variant="primary" type="submit">
                            Submit
                            </Button>

                    </Form>

                ) : (
                        <div style={{marginTop:"15px"}}>
                            <h3 className="h1Style">Add service Successfully</h3>
                            <Button className="btnstyle2" onClick={() => setContent(true)}>Add Another</Button>
                        </div>
                    )
            }


        </div>
    );
};

export default AddBook;