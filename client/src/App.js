import { useEffect, useState, CSSProperties } from "react";
import "./App.css";
import BounceLoader from "react-spinners/ClipLoader";
import Cart from "./Components/Cart";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "bisque",
  };
  return (
    <>
      {loading ? (
        <BounceLoader color="bisque" cssOverride={override} loading={loading} />
      ) : (
        <>
          {" "}
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
        </>
      )}
    </>
  );
}

export default App;
