import React from "react";

function FormComponent(props) {
  const { onMemberChange } = props;
  return (
    <div>
      <form>
        <label htmlFor="nameInput">Name</label>
        <input
          maxLength={50}
          onChange={onMemberChange}
          id="nameInput"
          type="text"
        />

        <label htmlFor="nameInput">Role</label>
        <input
          maxLength={50}
          onChange={onMemberChange}
          id="nameInput"
          type="text"
        />

        <label htmlFor="ageInput">Age</label>
        <input onChange={onMemberChange} id="ageInput" type="number" />

        <button>submit</button>
      </form>
    </div>
  );
}

export default FormComponent;
