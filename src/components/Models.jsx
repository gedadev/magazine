import "../styles/models.css";
import models from "../resources/models.js";

export default function Models() {
  return (
    <section className="models-section">
      {models.map((item) => (
        <article className="model-item" key={item.id}>
          <img src={item.img} alt={item.alt} />
          <div className="model-info">
            <span>{item.name}</span>
            <h3>{item.title}</h3>
          </div>
        </article>
      ))}
    </section>
  );
}
