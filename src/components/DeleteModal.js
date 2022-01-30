import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../context/context";

const DeleteModal = () => {
  const { isDeleteModalOpen, closeModal, deleteUser, specificID } =
    useGlobalContext();
  return (
    <div
      className={`${
        isDeleteModalOpen ? "modal-overlay show-modal" : "modal-overlay"
      }`}
    >
      <div className="modal-container">
        <h3>Are you sure ?</h3>
        <div className="button-container">
          <button
            className="btn delete-btn"
            onClick={() => deleteUser(specificID)}
          >
            delete
          </button>
          <button className="btn dont-delete-btn" onClick={closeModal}>
            don't delete
          </button>
        </div>
        <button className="close-modal-btn" onClick={closeModal}>
          <FaTimes></FaTimes>
        </button>
      </div>
    </div>
  );
};

export default DeleteModal;
