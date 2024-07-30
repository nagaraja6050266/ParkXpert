import { Routes, Route } from 'react-router-dom';
import Intro from './Intro';
import SignIn from './SignIn';
import './index.css';
import SignUp from './SignUp';

function App() {
    return (
        <Routes>    
            <Route path="/" element={<Intro />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
        </Routes>
    );
}

export default App;
