import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./page/MainPage";
import Login from "./page/LoginPage";

function App() {
  return (
    <BrowserRouter basename="process.env.https://bkkim33.github.io/smartorderapp/">
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
