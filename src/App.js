import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 305.89,
      date: new Date(2021, 11, 10),
    },
    {
      id: "e2",
      title: "Crocchette",
      amount: 10.5,
      date: new Date(2020, 10, 10),
    },
    {
      id: "e3",
      title: "Bread",
      amount: 5.6,
      date: new Date(2020, 9, 30),
    },
    {
      id: "e4",
      title: "Water",
      amount: 2.5,
      date: new Date(2021, 5, 5),
    },
  ];

  return <Expenses expenses={expenses} />;
}

export default App;
