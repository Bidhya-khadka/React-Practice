import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  // after logout button click event navigate to sessions torage cleared and navigate to sign in page
  const navigate = useNavigate("");
  function logoutHandler() {
    sessionStorage.setItem("isLoggedIn", false);
    navigate("/");
  }
  return (
    <>
      <div>This is Product Home page</div>
      <button
        type="button"
        className="btn btn-primary btn-sm px-3"
        onClick={logoutHandler}
      >
        LogOut
      </button>
    </>
  );
};

export default Home;
