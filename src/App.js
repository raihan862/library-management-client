import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container } from 'react-bootstrap'
import { BrowserRouter, Route } from 'react-router-dom';
import Switch from 'react-bootstrap/esm/Switch';
import Home from './Components/Home';
import Librarian from './Components/Librarian';
 
import UpdateBook from './Components/UpdateBook';
import StudentBooks from './Components/StudentBooks/StudentBooks';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path="/librarian">
            <Librarian></Librarian>
          </Route>
          <Route path="/updateBook">
            <UpdateBook></UpdateBook>
          </Route>
          <Route path="/student">
             <StudentBooks></StudentBooks>
          </Route>

        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
