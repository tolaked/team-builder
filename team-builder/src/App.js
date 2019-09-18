import React, { useState } from "react";
import uuid from "uuid";
import "./App.css";
import Form from "./Components/FormComponent";

const myMembers = [
  { id: uuid(), name: "Tola", role: "Front-end Engineer", age: "20" },
  { id: uuid(), name: "Reyes", role: "Back-end Engineer", age: "43" },
  { id: uuid(), name: "Rachael", role: "UI/UX", age: "29" }
];

const initialMember = {
  name: "",
  age: ""
};

function App() {
  const [memberList, setMemberList] = useState(myMembers);
  const [initialList, setInitialList] = useState(initialMember);

  const onMemberChange = e => {
    setMemberList({ ...memberList, [e.target.identity]: e.target.value });
  };

  return (
    <div className="App">
      <Form onMemberChange={onMemberChange} />
      {myMembers.map(member => (
        <h5 key={member.id}>
          {member.name} is {member.age} years old.
        </h5>
      ))}
    </div>
  );
}

export default App;
