import '../App.css';
import Card from '@mui/material/Card';
import { Container } from '@mui/material';
import Email from '../component/Hello';
import But from '../component/button';
import FormPropsTextFields from '../component/text';
import Continue from '../component/continue';
import Caution from '../component/caution';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sign from '../component/sign';

function App() {
  return (
    <Container maxWidth="xl">
      <Card sx={{ width: 450, maxHeight: '100vh', padding: '4ch', mx: "auto", my: "auto" }}>
        <div className="App">
          <Email />
        </div>
        <div>
          <FormPropsTextFields />
          <But />
          <Router>
            <Routes>
              <Route
                path="/sign"
                element={<Sign />} />
            </Routes>
          </Router>
          <Caution />
        </div>
        <div>
          <Continue />
        </div>
      </Card>
    </Container>

  );
}

export default App;