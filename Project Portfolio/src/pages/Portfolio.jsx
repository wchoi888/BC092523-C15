import calculator from "../assets/calculator.jpg";
import Puzzle from "../assets/Puzzle.jfif";
import Marketing_Brochure from "../assets/Marketing_Brochure.jfif";
import StudyGuide from "../assets/StudyGuide.jfif";
import Surf from "../assets/Surf.jfif";

export default function Portfolio() {
  return (
    <section id="work">
      <h2>Work</h2>
      <div className="container">
        <div className="application-1 application">
          <img src={calculator} alt="Calculator" />
          <div className="application-title">
            <h3>calculator</h3>
            <p>React/JavaScript/CSS</p>
          </div>
        </div>
        <div className="application-2 application">
          <a href="https://wchoi888.github.io/BC092523-C1/">
            <img src={Marketing_Brochure} alt="Marketing Brochure" />
          </a>
          <div className="application-title">
            <h3>Marketing Brochure</h3>
            <p>HTML/CSS</p>
          </div>
        </div>
        <div className="application-3 application">
          <img src={Puzzle} alt="Pastel Puzzle" />
          <div class="application-title">
            <h3>Pastel Puzzle</h3>
            <p>React/JavaScript/CSS</p>
          </div>
        </div>
        <div className="application-4 application">
          <a href="https://wchoi888.github.io/prework-study-guide/">
            <img src={StudyGuide} alt="Study Guide" />
          </a>
          <div className="application-title">
            <h3>Study Guide</h3>
            <p>HTML/CSS</p>
          </div>
        </div>
        <div className="application-5 application">
          <img src={Surf} alt="Surf" />
          <div className="application-title">
            <h3>Surf</h3>
            <p>React/JavaScript/CSS</p>
          </div>
        </div>
      </div>
    </section>
  );
}
