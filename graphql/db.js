export const people = [
  {
    id: "1",
    name: "Seung Wook Lee",
    age: 25,
    gender: "male"
  },
  {
    id: "2",
    name: "Minas Tirith",
    age: 1111,
    gender: "female"
  },
  { id: "3", name: "Kodo domo the third", age: 48, gender: "male" },
  { id: "4", name: "Kowa mina", age: 18, gender: "female" },
  {
    id: "5",
    name: "Elessar, the chosen King of Gondor",
    age: 98,
    gender: "male"
  },
  { id: "6", name: "Arwen, light of the evenstar", age: 122, gender: "female" },
  { id: "7", name: "Sauron, the dark lord", age: 1834, gender: "male" }
];

// Filter: go through all conditions and spit out what matches with the defined condition
export const getById = id => {
  const filteredPeople = people.filter(person => person.id === String(id) );
  return filteredPeople[0]
};
