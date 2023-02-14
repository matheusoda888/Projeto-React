
import {  Routes, Route, BrowserRouter} from 'react-router-dom'
import './App.css';
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';
import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Projects from './components/pages/Projects';
import Project from './components/pages/Project';
function App() {
  return (
    <BrowserRouter> 
      <Navbar/>

      <Container customClass = 'min-height'>
          <Routes>
            <Route exact path= "/" element={<Home/>}/> 
            
            <Route path= "/Projects" element={<Projects/>}/> 
            <Route path= "/Contact" element={<Contact/>}/> 
            <Route path= "/NewProject" element={<NewProject/>}/>
            <Route path= "/Project/:id" element={<Project/>}/>    
          </Routes>
          </Container>

          <Footer/>
      

    </BrowserRouter>
  );
}

export default App;
