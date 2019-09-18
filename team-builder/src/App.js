import React, { useState } from "react";
import uuid from "uuid";
import "./App.css";
import Form from "./Components/FormComponent";

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
      name: e.target.value,
      role: initialList.role,
      age: initialList.age
    });
  };

  const onRole = e => {
    setInitialList({
      name: initialList.name,
      role: e.target.value,
      age: initialList.age
    });
  };

  const OnAgeChange = e => {
    setInitialList({
      name: initialList.name,
      role: initialList.role,
      age: e.target.value
    });
  };

  const onFormSubmit = e => {
    e.preventDefault();
    const newMember = {
      id: uuid(),
      name: initialList.name,
      role: initialList.role,
      age: initialList.age
    };
    const updatedMember = memberList.concat(newMember);
    setMemberList(updatedMember);
    setInitialList(initialMember);
  };

  return (
    <div className="App">
      <Form
        OnAgeChange={OnAgeChange}
        onNameChange={onNameChange}
        onRole={onRole}
        initialList={initialList}
        onFormSubmit={onFormSubmit}
      />
      {memberList.map(member => (
        <h5 key={member.id}>
          {member.name} is a {member.role} engineer. Age is {member.age} years
          old.
        </h5>
      ))}
    </div>
  );
}

export default App;
