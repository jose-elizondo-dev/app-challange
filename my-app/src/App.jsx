import { Routes, Route, Link } from "react-router-dom";
import CreateContainer from "./Containers/CreateContainer";
import ListContainer from "./Containers/ListContainer";
import DeleteContainer from "./Containers/DeleteContainer";
import UpdateContainer from "./Containers/UpdateContainer";
import NotFound from "./Containers/NotFound"; // create this file or adjust path
import "./App.css";

function App() {
  return (
    <>
      <nav style={{ display: "flex", gap: 12 }}>
        <Link to="/">List</Link>
        <Link to="/create">Create</Link>
        <Link to="/delete">Delete</Link>
        <Link to="/update">Update</Link>
      </nav>

      <Routes>
        <Route path="/" element={<ListContainer />} />
        <Route path="/create" element={<CreateContainer />} />
        <Route path="/delete" element={<DeleteContainer />} />
        <Route path="/update" element={<UpdateContainer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
