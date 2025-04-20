import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { ToastContainer } from "react-toastify";

const  App =() =>{
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow p-4">
          <Outlet/>
        </main>

        <Footer />
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </>
  );
}

export default App;
