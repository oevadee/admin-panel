import Header from "./components/Header";
import PictureAdder from "./components/PictureAdder";
import PictureDisplay from "./components/PictureDisplay";

function App() {
  return (
    // BEM
    <>
      <Header />
      <div style={{display: "flex"}}>
        <PictureDisplay />
        <PictureAdder />
      </div>
    </>
  );
}

export default App;
