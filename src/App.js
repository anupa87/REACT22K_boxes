import Header from "./Header";
import Footer from "./Footer";
import Box from "./Box";

const persons = [
  {
    name: "Anupa",
    title: "CEO",
    age: 32,
    languages: [
      { name: "english", id: 1 },
      { name: "finnish", id: 2 },
      { name: "nepali", id: 3 },
    ],
  },
  {
    name: "Prakash",
    title: "Designer",
    age: 34,
    languages: [
      { name: "english", id: 1 },
      { name: "finnish", id: 2 },
      { name: "nepali", id: 3 },
    ],
  },
  {
    name: "Samona",
    title: "Developer",
    age: 21,
    languages: [
      { name: "english", id: 1 },
      { name: "finnish", id: 2 },
      { name: "nepali", id: 3 },
    ],
  },
  {
    name: "Shravya",
    title: "Developer",
    age: 19,
    languages: [
      { name: "english", id: 1 },
      { name: "finnish", id: 2 },
      { name: "nepali", id: 3 },
    ],
  },
];

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        {persons.map((person) => (
          <Box
            key={person.name}
            title={person.title}
            age={person.age}
            lang={person.languages.map((lang) => (
              <li key={lang.id}>{lang.name}</li>
            ))}
          />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default App;
