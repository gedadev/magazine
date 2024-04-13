import "../styles/home.css";
import posts from "../resources/posts";

export default function Home() {
  return (
    <section className="home-section">
      {posts.map((post) => (
        <div key={post.id} className="post-item">
          <img src={post.img} alt={post.alt} />
          <span>{post.date}</span>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
      ))}
    </section>
  );
}
