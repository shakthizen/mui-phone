import { useState } from "react";
import MuiPhone from "./components/MuiPhone";

function App() {
  const [count, setCount] = useState(0);

  return <MuiPhone />;
}

export default App;
