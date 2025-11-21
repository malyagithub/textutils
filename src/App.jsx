import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");

  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1000);
  };

  const removebodyclass = () => {
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-success");
  };

  const togglemode = (cls) => {
    removebodyclass();
    document.body.classList.add("bg-" + cls);
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "grey";
      showalert("dark mode has been enabled ", "success");
      document.title = "Textutils- dark mode";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showalert("light mode has been enabled ", "success");
    }
  };
  return (
    <>
      {/* <Router> */}
      <Navbar title="textutils1" mode={mode} togglemode={togglemode} />
      <Alert alert={alert} />
      {/* 
  <Routes>
    <Route exact path="/about" element={<About />} />
{/* exact for loading th e exact web path 
if we do not use exact react router will partailly match it  */}
      {/* <Route
      path="/"
      element={ */}
      <TextForm showalert={showalert} heading="enter text" mode={mode} />
      {/* }
//     /> */}
      {/* //   {/* </Routes> */}
      {/* // </Router> */}
    </>
  );
}

export default App;
