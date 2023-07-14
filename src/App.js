import Calculator from "./components/Calculator";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <p
          style={{
            fontSize: "28px",
            fontWeight: 600,
            textTransform: "uppercase",
          }}
        >
          Calculator Using <span style={{ color: "red" }}>Command</span> Design
          pattern
        </p>
        <Calculator />
      </div>
    </div>
  );
}

export default App;
