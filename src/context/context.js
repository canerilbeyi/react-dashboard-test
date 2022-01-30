import React, { useContext, useReducer, useEffect } from "react";
import { useFetch } from "../components/fetchData";
import reducer from "../reducer/reducer";
const AppContext = React.createContext();

const initialState = {
  people: [],
  isModalOpen: false,
  specificID: null,
  isEditing: true,
  isAdding: true,
  isDeleting: false,
  isDeleteModalOpen: false,
  person: {
    name: "",
    username: "",
    email: "",
    city: "",
    suite: "",
    street: "",
  },
};
const url = "https://jsonplaceholder.typicode.com/users";

const AppProvider = ({ children }) => {
  let { loading, users } = useFetch(url);
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    if (loading) return;
    dispatch({ type: "INITIAL_FETCH", payload: users });
  }, [loading, users]);
  const openModalForEditing = (...rest) => {
    dispatch({ type: "OPEN_MODAL_FOR_EDITING", payload: { ...rest } });
  };
  const openModalForAdding = () => {
    dispatch({ type: "OPEN_MODAL_FOR_ADDING" });
  };
  const openModalForDeleting = (id) => {
    dispatch({ type: "OPEN_MODAL_FOR_DELETING", payload: id });
  };
  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };
  const deleteUser = (id) => {
    dispatch({ type: "DELETE_USER", payload: id });
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch({ type: "HANDLE_CHANGE", payload: { name, value } });
  };
  const addPerson = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_PERSON" });
  };
  const editPerson = (id) => {
    dispatch({ type: "EDIT_PERSON", payload: id });
  };
  return (
    <AppContext.Provider
      value={{
        ...state,
        openModalForEditing,
        openModalForAdding,
        closeModal,
        deleteUser,
        loading,
        handleChange,
        addPerson,
        editPerson,
        openModalForDeleting,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// custom hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
