import logo from './logo.svg';
import './App.css';
import LoginForm from './formComponents/LoginForm';
import About from './intro/about';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
                          
function App() {
  return (
    <div className="App">
          <Router>
            <Switch>
              <Route path="/login">
                <LoginForm />
              </Route>
              <Route path="/">
                <div>
                  <nav className="navbar navbar-expand-sm navbar-dark bg-dark px-2 py-2 me-auto mb-2 mb-lg-0">
                    <a className="navbar-brand" href="/">Dan</a>
                      <MDBContainer fluid={true}>
                        <ul class="nav">
                          <li className="nav-item">
                            <a className="nav-link" href="https://cloud.danjeremynavarro.com">Documentation</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="https://proxmox.danjeremynavarro.com">Proxmox</a> 
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="/login">Login</a> 
                          </li>
                        </ul>   
                      </MDBContainer>       
                    </nav>
                  <div className="main container">                    
                    <About />                                  
                  </div>
                </div>
              </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
