import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <Wrapper>
      <ul className="users-link">
        <li>
          <Link to={"/users"}> users</Link>
          <Link to={"/products"}> Products</Link>
        </li>
      </ul>
    </Wrapper>
  );
};

export default Sidebar;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 200px;
  li {
    list-style: none;
  }
`;
