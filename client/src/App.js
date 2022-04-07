import logo from "./logo.svg";
import "./App.css";

function App() {
  //get books API endpoint
  function getBooks() {
    fetch("/books", { method: "GET" }).then((response) =>
      console.log(response.json())
    );
  }

  return (
    <div className="App">
      <button onClick={getBooks}>Click Me</button>
    </div>
  );
}

export default App;
