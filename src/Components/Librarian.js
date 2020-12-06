import React from 'react';
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import AddBook from './AddBook/AddBook';
import AllBooks from './AllBooks/AllBooks';
import Sidebar from './Sidebar/Sidebar';

const Librarian = () => {
    const [Them, setThem] = useState({ them: "allBooks", title: "All Books" });
    return (
        <Row style={{ backgroundColor: "#F4F7FC", width: "100%" }} id="librarian">
            <Col xs={4} sm={4} md={3} lg={3} xl={2} style={{ padding: "0px" }}>
                <Sidebar setThem={setThem} />
            </Col>
            <Col xs={8} sm={8} md={9} lg={9} xl={10} style={{ padding: "0px" }}>
                <div className="title" style={{ backgroundColor: "#FFFF", padding: "0px 15px", display: "flex", justifyContent: "space-between" }}>
                    <h4 className="h1Style">{Them.title}</h4>
                </div>
                <div>
                    {
                        Them.them == "allBooks" && <AllBooks />
                    }
                    {
                        Them.them == "addBook" && <AddBook />
                    }
                </div>
            </Col>
        </Row>
    );
};

export default Librarian;