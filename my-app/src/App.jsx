import CreateContainer from "./Containers/CreateContainer";
import ListContainer from "./Containers/ListContainer";
import DeleteContainer from "./Containers/DeleteContainer";
import UpdateContainer from "./Containers/UpdateContainer";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import "./App.css";

const App = () => {

  return (
    <>
      <BrowserRouter>
        <nav style={{ display: "flex", gap: 12, padding: 12 }}>
          <Link to="/items">List</Link>
          <Link to="/create">Create</Link>
          <Link to="/delete">Delete</Link>
          <Link to="/update">Update</Link>
        </nav>

        <Routes>
          <Route path="/" element={<ListContainer />} />
          <Route path="/items" element={<ListContainer />} />
          <Route path="/create" element={<CreateContainer />} />
          <Route path="/delete" element={<DeleteContainer />} />
          <Route path="/update" element={<UpdateContainer />} />

          {/* opcional: fallback si no existe la ruta */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </>
  );

}

export default App;
