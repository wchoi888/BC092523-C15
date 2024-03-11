// Importing the Forms component from the components directory
import Forms from "../components/Forms";
// Functional component for the Contact Me section
export default function Contact() {
  return (
    // Section for the Contact Me content with an id for easy navigation
    <section id="contact-me">
      <h2>Contact Me</h2>
      <div className="container">
        <Forms />
      </div>
    </section>
  );
}
