import portfolioData from "../utils/Project_data";
import Project from "../components/Project";
export default function Portfolio() {
  return (
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
