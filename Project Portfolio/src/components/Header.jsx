import NavTabs from "./NavTabs";
import LinkedinPhoto from "../assets/LinkedIn-Photo.jpg";
export default function Header() {
  return (
    <>
      <header>
        <h1> Wing Choi</h1>
        <NavTabs></NavTabs>
      </header>
      <div id="hero">
        <div className="photo">
          <img src={LinkedinPhoto} />
        </div>
        <div id="subtitle">
          <h2>Full Stack Developer</h2>
        </div>
      </div>
    </>
  );
}
