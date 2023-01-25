type Mentor = {
  name: string;
  title: string;
};

type Person = {
  name: string;
  title: string;
  mentor: Mentor[];
};

export default function personReducer(person: Person, action: any) {
  switch (action.type) {
    case "updated": {
      const { prev, current } = action;
      console.log(prev, current);
      return {
        ...person,
        mentor: person.mentor.map((value: Mentor) => {
          return {
            ...value,
            name: value.name === prev && current ? current : value.name,
          };
        }),
      };
    }
    case "added": {
      const { name, title } = action;
      return {
        ...person,
        mentor: [...person.mentor, { name, title }],
      };
    }
    case "deleted": {
      return {
        ...person,
        mentor: person.mentor.filter((mentor) => mentor.name !== action.name),
      };
    }
    default: {
      throw Error(`Unknown Action Type: ${action.type}`);
    }
  }
}
