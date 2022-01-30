const reducer = (state, action) => {
  if (action.type === "DELETE_USER") {
    const newPeople = state.people.filter(
      (person) => person.id !== action.payload
    );
    return {
      ...state,
      people: newPeople,
      isModalOpen: false,
      isDeleteModalOpen: false,
    };
  }
  if (action.type === "INITIAL_FETCH") {
    return { ...state, people: action.payload };
  }
  if (action.type === "OPEN_MODAL_FOR_EDITING") {
    const {
      0: id,
      1: email,
      2: name,
      3: username,
      4: street,
      5: suite,
      6: city,
    } = action.payload;
    return {
      ...state,
      isModalOpen: true,
      specificID: id,
      isEditing: true,
      isAdding: false,
      person: {
        name,
        username,
        email,
        city,
        street,
        suite,
      },
    };
  }
  if (action.type === "OPEN_MODAL_FOR_ADDING") {
    return {
      ...state,
      isModalOpen: true,
      isAdding: true,
      isEditing: false,
      person: {
        name: "",
        username: "",
        email: "",
        city: "",
        suite: "",
        street: "",
      },
    };
  }
  if (action.type === "OPEN_MODAL_FOR_DELETING") {
    return {
      ...state,
      isDeleteModalOpen: true,
      specificID: action.payload,
    };
  }
  if (action.type === "CLOSE_MODAL") {
    return { ...state, isModalOpen: false, isDeleteModalOpen: false };
  }
  if (action.type === "HANDLE_CHANGE") {
    const { name, value } = action.payload;
    return {
      ...state,
      person: { ...state.person, [name]: value },
    };
  }
  if (action.type === "ADD_PERSON") {
    if (
      state.person.name &&
      state.person.username &&
      state.person.email &&
      state.person.city &&
      state.person.suite &&
      state.person.email
    ) {
      const newPerson = {
        ...state.person,
        address: {
          city: state.person.city,
          suite: state.person.suite,
          street: state.person.street,
        },
        id: new Date().getTime().toString(),
      };
      return {
        ...state,
        people: [...state.people, newPerson],
        isModalOpen: false,
        person: {
          name: "",
          username: "",
          email: "",
          city: "",
          suite: "",
          street: "",
        },
      };
    } else {
      return { ...state, isModalOpen: false };
    }
  }
  if (action.type === "EDIT_PERSON") {
    if (
      state.person.name &&
      state.person.username &&
      state.person.email &&
      state.person.city &&
      state.person.suite &&
      state.person.email
    ) {
      const tempPeople = state.people.map((editedPeople) => {
        if (editedPeople.id === action.payload) {
          return {
            ...editedPeople,
            ...state.person,
            address: {
              city: state.person.city,
              suite: state.person.suite,
              street: state.person.street,
            },
          };
        }
        return editedPeople;
      });
      return {
        ...state,
        isModalOpen: false,
        people: tempPeople,
        person: {
          name: "",
          username: "",
          email: "",
          city: "",
          suite: "",
          street: "",
        },
      };
    }
    return { ...state, isModalOpen: true };
  }
  throw new Error("no matching action type");
};
export default reducer;
