import "./App.css"; // Importing CSS styles for the App component
import Header from "./components/Header"; // Importing the Header component
import Footer from "./components/Footer"; // Importing the Footer component
import { Outlet } from "react-router-dom"; // Importing the Outlet component from React Router
// Functional component for the main App
function App() {
  return (
    <>
      {/* Rendering the Header component */}
      <Header />
      {/* Main content area, rendering the Outlet component */}
      <main>
        <Outlet />
      </main>
      {/* Rendering the Footer component */}
      <Footer />
    </>
  );
}

export default App;
