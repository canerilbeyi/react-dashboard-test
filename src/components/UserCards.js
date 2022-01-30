import React from "react";
import { useGlobalContext } from "../context/context";
import { FaEdit, FaTrash } from "react-icons/fa";

const UserCards = ({
  id,
  name,
  username,
  email,
  address: { street, city, suite },
}) => {
  const { openModalForEditing, openModalForDeleting } = useGlobalContext();
  return (
    <article className="card">
      <div
        className="person-info"
        onClick={() =>
          openModalForEditing(id, email, name, username, street, suite, city)
        }
      >
        <p style={{ color: `${name === "Chelsey Dietrich" && "red"}` }}>
          Name : {name}
        </p>
        <p>Username : {username}</p>
        <p>Email : {email}</p>
        <p>
          Adress : {street} / {suite} / {city}{" "}
        </p>
      </div>
      <div className="button-container">
        <button
          className="delete-btn"
          onClick={() => {
            openModalForDeleting(id);
          }}
        >
          <FaTrash />
        </button>
        <button
          className="edit-btn"
          onClick={() =>
            openModalForEditing(id, email, name, username, street, suite, city)
          }
        >
          <FaEdit />
        </button>
      </div>
    </article>
  );
};

export default UserCards;
