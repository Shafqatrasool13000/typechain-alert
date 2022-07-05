import {
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home/Home';
import CreateToken from "./components/forms/CreateToken";
import CreateNft from "./components/forms/CreateNft";

// Window.ethereum type
declare var window: any
export const ethereum = window.ethereum;


function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create-token" element={<CreateToken />} />
      <Route path="create-nft" element={<CreateNft />} />
    </Routes>
  );
}

export default App;
