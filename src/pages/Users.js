import React from "react";
import Modal from "../components/Modal";
import { useGlobalContext } from "../context/context";
import Loading from "../components/Loading";
import DeleteModal from "../components/DeleteModal";
import UserCards from "../components/UserCards";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Users = () => {
  const { people, loading, openModalForAdding } = useGlobalContext();
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  return (
    <div className=" section people-page">
      <Navbar />
      <button
        type="button"
        className="btn add-person-btn"
        onClick={openModalForAdding}
      >
        add person
      </button>
      <Link to={"/"} className="btn add-person-btn">
        back home
      </Link>
      <section className="cards-container">
        {people
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((user) => {
            return <UserCards key={user.id} {...user} />;
          })}
      </section>
      <Modal />
      <DeleteModal />
    </div>
  );
};

export default Users;
