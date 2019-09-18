import React, { useState } from "react";
import uuid from "uuid";
import "./App.css";

const myMembers = [
  { id: uuid(), name: "Tola", age: "20" },
  { id: uuid(), name: "Reyes", age: "43" },
  { id: uuid(), name: "Rachael", age: "29" }
];

const initialMember = {
  name: "",
  age: ""
};

function App() {
  const [memberList, setMemberList] = useState(myMembers);
  const [initialList, setInitialList] = useState(initialMember);
  return (
    <div className="App">
      {myMembers.map(member => (
        <h5 key={member.id}>
          {member.name} is {member.age} years old.
        </h5>
      ))}
    </div>
  );
}

export default App;
