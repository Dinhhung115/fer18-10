import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'
import { Home, Album, Photo } from './components/Index'
import PhotoDetails from './components/PhotoDetails';

// function Component
function App() {
  return (
    <Container>
      <BrowserRouter>
        <Row>
          <Col xs={12}>
            <h1 style={{ textAlign: 'center' }}>Dashboard</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={2}>
            <ul>
              <li><Link to={'/'}>Home</Link></li>
              <li><Link to={'/Album'}>Album</Link></li>
              <li><Link to={'/Photo'}>Photo</Link></li>
            </ul>
          </Col>
          <Col xs={12} md={10}>
            <Routes>
              <Route path='/' element={<Home />} />  {/** http://localhost:3000/ */}
              <Route path='/album' element={<Album />} /> {/** http://localhost:3000/prduct */}
              <Route path='/photo' element={<Photo />} /> {/** http://localhost:3000/category */}
              <Route path='/photo/:id' element={<PhotoDetails />} /> {/** http://localhost:3000/category */}
            </Routes>
          </Col>
        </Row>
      </BrowserRouter>
    </Container>
  );
}

export default App;
