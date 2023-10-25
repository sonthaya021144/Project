import {Routes,Route} from "react-router-dom";
import Login from "./login";
import Profile from "./profile";
import Register from "./Register";

function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="Login" element={<Login />}/>
          <Route path="Profile" element={<Profile />}/>
          <Route path="Register" element={<Register />}/>
        </Routes>
    </div>
  );
}

export default App;
