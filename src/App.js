
import logo from './assets/sweet1.jpg';
import Header from './components/Header';
/*import './App.css'; */
import './index.css';
import Cakes from './components/Cakes';
import About from './components/About';
import Contact from './components/Contact'

import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar, } from 'react-bootstrap';












function App() {
  return (
    <div className="App">
      
      <Navbar  bg="myRed" variant="dark">
        <Navbar.Brand>
          <img src={logo} alt="" />
          

        </Navbar.Brand>


        <Nav>
          <Nav.Link href="home">Home</Nav.Link>
          <Nav.Link href="cakes">Cakes</Nav.Link>
          <Nav.Link href="about">About</Nav.Link>
          <Nav.Link href="contact-me">Contact Me</Nav.Link>
        </Nav>
        
        </Navbar>

        <Header />

        <Cakes />

        <About />

        <Contact />




      


 


 

       
</div>




        


      



   




      
      


);
}

  


export default App;
