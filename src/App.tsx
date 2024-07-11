import { Container } from "./AppStyle";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InterfaceAgenda from "./components/interface";

function App() {
  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/agenda" element={<InterfaceAgenda />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
