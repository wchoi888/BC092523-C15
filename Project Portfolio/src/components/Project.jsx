export default function Project({ data }) {
  return (
    <div className="application">
      <a href={data.link} target="blank">
        <img src={data.image} alt={data.name} />
      </a>
      <div className="application-title">
        <h3>{data.name}</h3>
        <p>{data.tech}</p>
        <p>
          <a href={data.github} target="blank">
            github repo
          </a>
        </p>
      </div>
    </div>
  );
}
