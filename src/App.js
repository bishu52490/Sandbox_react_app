import "./styles.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" component={<Home />} />
      </Routes>
    </div>
  );
}
