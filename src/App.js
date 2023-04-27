import './App.css';
import HomePage from "./components/HomePage";
import BookingPage from "./components/BookingPage";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
