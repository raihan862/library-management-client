import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'
const Home = () => {
    return (

        <Container style={{textAlign:"center",marginTop:"140px"}} id="btnStyle">
            <Link to='/librarian'>
                <Button   > <h1>Libraian</h1> </Button>
            </Link>
            <Link to='/student'>
                <Button> <h1>Student</h1> </Button>
            </Link>


        </Container>

    );
};

export default Home;  