import React from "react";

function FormComponent(props) {
  const { OnAgeChange, onNameChange, onRole, onFormSubmit } = props;
  const { name, age, role } = props.initialList;
  const isDisabled = () => {
    if (!name || !age || !role) {
      return true;
    }
  };

  return (
    <div>
      <form>
        <label htmlFor="nameInput">Name</label>
        <input
          maxLength={50}
          onChange={onNameChange}
          id="nameInput"
          value={name}
          type="text"
        />

        <label htmlFor="nameInput">Role</label>
        <input
          maxLength={50}
          onChange={onRole}
          id="nameInput"
          value={role}
          type="text"
        />

        <label htmlFor="ageInput">Age</label>
        <input onChange={OnAgeChange} id="ageInput" value={age} type="number" />

        <button disabled={isDisabled()} onClick={onFormSubmit}>
          submit
        </button>
      </form>
    </div>
  );
}

export default FormComponent;
