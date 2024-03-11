// Importing portfolioData from the utils directory
import portfolioData from "../utils/Project_data";
// Importing the Project component from the components directory
import Project from "../components/Project";
// Functional component for Portfolio
export default function Portfolio() {
  return (
    // Section for the Portfolio content with an id for easy navigation
    <section id="work">
      <h2>Portfolio</h2>
      <div className="container">
        {portfolioData.map((data, index) => (
          <Project key={index} data={data}></Project>
        ))}
      </div>
    </section>
  );
}
