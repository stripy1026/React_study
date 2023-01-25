import { useImmer } from "use-immer";

type Mentor = {
  name: string;
  title: string;
};

type Person = {
  name: string;
  title: string;
  mentor: Mentor[];
};

export const AppMentorsImmer = () => {
  const [person, updatePerson] = useImmer<Person>(initialPerson);
  const handleUpdate = () => {
    const previous: string | null = prompt(
      `Which mentor's name you want to change ?`
    );
    const current: string | null = prompt(
      `What name do you want to change to ?`
    );
    updatePerson((person) => {
      const mentor: Mentor | undefined = person.mentor.find(
        (m) => m.name === previous
      );
      if (mentor && mentor.name && current) {
        mentor.name = current;
      }
    });
  };
  const handleAdd = () => {
    const newName: string | null = prompt(`Insert new mentor's name.`);
    const newTitle: string | null = prompt(`Insert new mentor's title.`);
    if (newName && newTitle) {
      updatePerson((person) => {
        person.mentor.push({ name: newName, title: newTitle });
      });
    }
  };
  const handleDelete = () => {
    const delName: string | null = prompt(
      `Which mentor do you want to delete ?`
    );
    updatePerson((person) => {
      const index: number = person.mentor.findIndex((m) => m.name === delName);
      person.mentor.splice(index, 1);
    });
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
