import Body from "./components/Body";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div
      style={{
        backgroundColor: "black",
        position: "fixed",
        inset: 0,
        display: "flex",
      }}
    >
      <SideBar />
      <Body />
    </div>
  );
}

export default App;
