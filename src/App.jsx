import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

import MyRoutes from "./routes/Routes";

function App() {
  return (
    <Router>
      <div className="App">
        <MyRoutes />
      </div>
    </Router>
  );
}

export default App;
