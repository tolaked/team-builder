import React, { useState } from "react";
import uuid from "uuid";
import "./App.css";
import Form from "./Components/FormComponent";

let newMember;
const myMembers = [
  { id: uuid(), name: "Tola", role: "Front-end ", age: "20" },
  { id: uuid(), name: "Reyes", role: "Back-end ", age: "43" },
  { id: uuid(), name: "Rachael", role: "UI/UX", age: "29" }
];

const initialMember = {
  name: "",
  role: "",
  age: ""
};

function App() {
  const [memberList, setMemberList] = useState(myMembers);
  const [initialList, setInitialList] = useState(initialMember);

  const onNameChange = e => {
    setInitialList({
      ...initialList,
      [e.target.name]: e.target.value
    });
  };

  const onFormSubmit = e => {
    e.preventDefault();
    if (initialList.id) {
      const newArray = memberList.map(member =>
        initialList.id === member.id ? initialList : member
      );
      setMemberList(newArray);
    } else {
      newMember = {
        id: uuid(),
        name: initialList.name,
        role: initialList.role,
        age: initialList.age
      };

      const updatedMember = memberList.concat(newMember);
      setMemberList(updatedMember);
    }

    setInitialList(initialMember);
  };

  const onEdit = data => {
    setInitialList(data);
  };

  return (
    <div className="App">
      <Form
        onNameChange={onNameChange}
        initialList={initialList}
        onFormSubmit={onFormSubmit}
      />
      {memberList.map(member => (
        <div>
          <h5 key={member.id}>
            {member.name} is a {member.role} engineer. Age is {member.age} years
            old.
          </h5>
          <button onClick={() => onEdit(member)}>Edit</button>
        </div>
      ))}
    </div>
  );
}

export default App;
