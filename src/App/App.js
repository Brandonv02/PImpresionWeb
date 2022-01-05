import React from 'react';
import { Home2 } from '../Views/Home2';
import { Home } from '../Views/Home';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { HomeTD } from '../Views/HomeTD';


function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<HomeTD />}
        />
        <Route
          path="/KeyPad"
          element={<Home />}
        />
        <Route
          path="/Cards"
          element={<Home2 />}
        />
      </Routes>
    </Router>
  );
}

export default App;
