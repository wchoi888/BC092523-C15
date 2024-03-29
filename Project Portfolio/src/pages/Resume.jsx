// Importing resume PDF file from the assets directory
import resume from "../assets/Wing_Choi__resume_v7.pdf";
// Functional component for Resume
export default function Resume() {
  return (
    // Section for the Resume content
    <section>
      <h1> Resume </h1>
      <h3> Technology Proficiencies</h3>
      <ul>
        <li>HTML-CSS</li>
        <li>Git</li>
        <li>JavaScript</li>
        <li>Third Party APIs</li>
        <li>Server Side APIs</li>
        <li>NodeJS</li>
        <li>Object Oriented Programming</li>
        <li>Express</li>
        <li>SQL</li>
        <li>Object Relational Mapping</li>
        <li>Model View Controller</li>
        <li>NoSQL</li>
        <li>Progress Web App</li>
        <li>React</li>
        <li>MERN</li>
      </ul>
      {/* Link to download the resume PDF */}
      <a href={resume} target="blank">
        Download Resume
      </a>
    </section>
  );
}
