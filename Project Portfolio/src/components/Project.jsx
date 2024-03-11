// Functional component for rendering individual project information
export default function Project({ data }) {
  return (
    <div className="application">
      {/* Link to the deployed application */}
      <a href={data.link} target="blank">
        {/* Image of the project */}
        <img src={data.image} alt={data.name} />
      </a>
      {/* Container for application title and details */}
      <div className="application-title">
        {/* Title of the project */}
        <h3>{data.name}</h3>
        {/* Technologies used in the project */}
        <p>{data.tech}</p>
        {/* Link to the GitHub repository of the project */}
        <p>
          <a href={data.github} target="blank">
            github repo
          </a>
        </p>
      </div>
    </div>
  );
}
