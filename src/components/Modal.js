import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../context/context";
const Modal = () => {
  const {
    isModalOpen,
    closeModal,
    person,
    handleChange,
    editPerson,
    addPerson,
    isEditing,
    isAdding,
    specificID,
  } = useGlobalContext();
  return (
    <div
      className={`${
        isModalOpen ? "modal-overlay show-modal" : " modal-overlay"
      } `}
    >
      <div className="modal-container">
        <article className="form">
          <form>
            <div className="form-control">
              <label htmlFor="name">name : </label>
              <input
                type="text"
                id="name"
                name="name"
                value={person.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-control">
              <label htmlFor="username">username : </label>
              <input
                type="text"
                id="username"
                name="username"
                value={person.username}
                onChange={handleChange}
              />
            </div>
            <div className="form-control">
              <label htmlFor="email">email : </label>
              <input
                type="text"
                id="email"
                name="email"
                value={person.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-control">
              <label htmlFor="city">city : </label>
              <input
                type="text"
                id="city"
                name="city"
                value={person.city}
                onChange={handleChange}
              />
            </div>
            <div className="form-control">
              <label htmlFor="street">street : </label>
              <input
                type="text"
                id="street"
                name="street"
                value={person.street}
                onChange={handleChange}
              />
            </div>
            <div className="form-control">
              <label htmlFor="suite">suite : </label>
              <input
                type="text"
                id="suite"
                name="suite"
                value={person.suite}
                onChange={handleChange}
              />
            </div>
          </form>
        </article>
        <button className="close-modal-btn" onClick={closeModal}>
          <FaTimes></FaTimes>
        </button>
        {isAdding && (
          <button type="button" className="btn add-btn" onClick={addPerson}>
            add person
          </button>
        )}
        {isEditing && (
          <button
            type="button"
            className="btn edit-btn"
            onClick={() => editPerson(specificID)}
          >
            edit person
          </button>
        )}
      </div>
    </div>
  );
};

export default Modal;
