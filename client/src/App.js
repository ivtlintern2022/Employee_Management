import Topbar from "./components/topbar/Topbar";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Overallview from "./components/overallview/Overallview";
import Listview from "./components/listview/Listview";



function App() {
  return (
    <div className="App">
<div className="position-sticky">
<Topbar/>
</div>
  
{/* The div grod starts here */}
<div className="container-fluid">
{/* div row starts here */}
    <div className="row" style={{padding:"none"}}>
    {/* div column starts here */}
    <div className="col-2 gx-0">
    <Sidebar/>
    </div>
    {/* div column ends here */}

    {/* div column starts here */}
    <div className="col-10">
      {/* div row */}
      <div className="row">
      <Header/>
      </div>
      <div className="row" style={{position:"relative"}}>
      <Overallview/>
    <Listview/>
      </div>

    </div>
    {/* div column ends here */}

    </div>
{/* div row ends here */}
    </div>
    {/* container-fluid ends here */}
    </div>
  );
}

export default App;
