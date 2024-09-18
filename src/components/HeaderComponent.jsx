import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function header() {
  return (
    <>
      <Navbar expand="lg" className="my-navbar">
        <Container>
          <Navbar.Brand href="#"><img src="/Rocco (4).png" alt="" /></Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default header;