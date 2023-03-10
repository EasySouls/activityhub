import React from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import logo from "../assets/stellar.png";

export default function Header() {
  const navigate = useNavigate();

  function returnToHomepage(e: React.MouseEvent) {
    e.preventDefault();
    navigate("/");
  }

  return (
    <div className='h-fit w-full'>
      <div className='h-40 w-full bg-[url("./assets/stars.jpg")] bg-cover flex items-center justify-center'>
        <button
          className='bg-black rounded-full h-20 aspect-square flex items-center'
          onClick={returnToHomepage}
        >
          <img src={logo} alt='logo' className='h-3/5 m-auto' />
        </button>
      </div>
      <Navbar />
    </div>
  );
}
