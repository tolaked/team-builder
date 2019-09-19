import React from "react";

function FormComponent(props) {
  const { onNameChange, onFormSubmit } = props;
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
          name="name"
          type="text"
        />

        <label htmlFor="nameInput">Role</label>
        <input
          maxLength={50}
          onChange={onNameChange}
          id="nameInput"
          value={role}
          name="role"
          type="text"
        />

        <label htmlFor="ageInput">Age</label>
        <input
          onChange={onNameChange}
          id="ageInput"
          value={age}
          name="age"
          type="number"
        />

        <button disabled={isDisabled()} onClick={onFormSubmit}>
          submit
        </button>
      </form>
    </div>
  );
}

export default FormComponent;
