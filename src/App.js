import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import './apps.css'
import HomePage from "./components/Pages/homepage/HomePage";
function App() {
  return (
    <div className="">
      <Topbar />
      <div className="container">
        <Sidebar />
        <HomePage />
      </div>

    </div>
  );
}

export default App;
