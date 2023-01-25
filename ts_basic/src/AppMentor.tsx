import { useReducer } from "react";
import personReducer from "./reducer/person-reducer";

export const AppMentor = () => {
  // const [person, setPerson] = useState<Person>(initialPerson);
  const [person, dispatch] = useReducer(personReducer, initialPerson);
  const handleUpdate = () => {
    const prev = prompt(`Which mentor's name you want to change ?`);
    const current = prompt(`What name do you want to change to ?`);
    dispatch({ type: "updated", prev, current });
    // setPerson((prev) => ({
    //   ...prev,
    //   mentor: prev.mentor.map((value: Mentor) => {
    //     return {
    //       ...value,
    //       name: value.name === previous && current ? current : value.name,
    //     };
    //   }),
    // }));
  };
  const handleAdd = () => {
    const name: string | null = prompt(`Insert new mentor's name.`);
    const title: string | null = prompt(`Insert new mentor's title.`);
    dispatch({ type: "added", name, title });
    // setPerson((prev) => ({
    //   ...prev,
    //   mentor: [
    //     ...prev.mentor,
    //     {
    //       name: newName ? newName : "None",
    //       title: newTitle ? newTitle : "None",
    //     },
    //   ],
    // }));
  };
  const handleDelete = () => {
    const name: string | null = prompt(`Which mentor do you want to delete ?`);
    dispatch({ type: "deleted", name });
    // setPerson((prev) => ({
    //   ...prev,
    //   mentor: prev.mentor.filter((value: Mentor) => value.name !== delName),
    // }));
  };
  return (
    <div>
      <h1>
        {person.name} is {person.title}
      </h1>
      <p>{person.name}'s mentor is</p>
      {person.mentor.map((mentor, index) => (
        <li key={index}>
          {mentor.name} ({mentor.title})
        </li>
      ))}
      <button onClick={handleUpdate}>Change Mentor's name</button>
      <button onClick={handleAdd}>Add Mentor</button>
      <button onClick={handleDelete}>Delete Mentor</button>
    </div>
  );
};

const initialPerson = {
  name: "ellie",
  title: "Developer",
  mentor: [
    {
      name: "bob",
      title: "Senior Developer",
    },
    {
      name: "James",
      title: "Senior Developer",
    },
  ],
};
