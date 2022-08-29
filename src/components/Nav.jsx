import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default function Nav() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setShow(true);
      }
      if (window.scrollY <= 50) {
        setShow(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <NavContainer show={show}>
      <NavLogo
        alt="Netflx logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png"
        onClick={() => window.location.reload()}
      />

      <NavAvatar
        alt="User logged"
        src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg"
      />
    </NavContainer>
  );
}

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height: 2rem;
  z-index: 1;
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition-timing-function: ease-in;
  transition: all 0.5s;
  background-color: ${props => (props.show ? "#111" : "#fff")};
`;

const NavLogo = styled.img`
  position: fixed;
  left: 2rem;
  width: 5rem;
  object-fit: contain;
`;

const NavAvatar = styled.img`
  width: 3rem;
  height: 3rem;
  position: fixed;
  right: 2.5rem;
  object-fit: contain;
`;
