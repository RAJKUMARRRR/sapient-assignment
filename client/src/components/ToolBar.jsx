import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function ToolBar() {
  return (
    <Navbar bg="primary" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Credit Card System</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default ToolBar;