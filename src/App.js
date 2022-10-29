import Topbar from "./components/topbar/Topbar";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Overallview from "./components/overallview/Overallview";
import Listview from "./components/listview/Listview";


function App() {
  return (
    <div className="App">
     <Topbar/>
     <Sidebar/>
     <Header/>
     <Overallview/>
     <Listview/>
    </div>
  );
}

export default App;
