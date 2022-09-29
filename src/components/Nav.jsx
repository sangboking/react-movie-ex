import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Nav() {
  const [show, setShow] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();

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

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    navigate(`/search?q=${e.target.value}`);
  };

  return (
    <NavContainer show={show}>
      <NavLogo
        alt="Netflx logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png"
        onClick={() => navigate('/')}
      />

      <SearchInput 
        value={searchValue}
        onChange={handleChange}
        type="text"
        placeholder="영화를 검색해주세요."
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
  height: 30px;
  z-index: 1;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition-timing-function: ease-in;
  transition: all 0.5s;
  background-color: ${props => (props.show ? "#111" : "none")};
`;

const NavLogo = styled.img`
  position: fixed;
  left: 2rem;
  width: 5rem;
  object-fit: contain;
  cursor: pointer;
`;

const SearchInput = styled.input`
  position: fixed;
  left: 50%;
  transform: translate(-50%, 0);
  background-color: #000000c7;
  border-radius: 5px;
  color: white;
  padding: 5px;
  border: none;
`;

const NavAvatar = styled.img`
  width: 3rem;
  height: 3rem;
  position: fixed;
  right: 2.5rem;
  object-fit: contain;
`;
