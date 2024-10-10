import NewProject from "./components/NewProject.jsx";
import ProjectsSideBar from "./components/ProjectsSideBar.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";


function App() {

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSideBar />
      <NoProjectSelected />
    </main>
  );
}

export default App;
