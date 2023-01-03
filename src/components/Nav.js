import React, { useEffect, useState } from "react";

const Nav = () => {
  const [bgt, setbgt] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setbgt(true);
      } else {
        setbgt(false);
      }
    });
    return ()=>{
      window.removeEventListener('scroll')
    };
  }, []);

  return (
    <>
      <nav>
        <div className={`container-fluid m-nav ${bgt && "scrol"}`}>
          <img className="logo" src="/img/logo.png" alt="logo" />
          <img className="profile" src="/img/Netflix-avatar.png" alt="logo" />
        </div>
      </nav>
    </>
  );
};

export default Nav;
