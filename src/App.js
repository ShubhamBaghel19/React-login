import './App.css';
import Login from './component/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import Signup from './component/Signup';
import ProtectedRoute from './component/ProtectedRoute';
import Home from './component/Home';
import { UserAuthContextProvider } from './context/UserAuthContext';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Container>
          <UserAuthContextProvider>
          <Routes>
            <Route exact path="/" element={<Login/>}/>
            <Route exact path="/signup" element={<Signup/>}/>
            <Route exact path="/home"
             element={<ProtectedRoute><Home /></ProtectedRoute>}/>
          </Routes>
          </UserAuthContextProvider>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
