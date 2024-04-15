import "../styles/home.css";
import posts from "../resources/posts";

export default function Home() {
  return (
    <section className="home-section">
      <div className="post-column">
        {posts.map((post, index) => {
          if (index % 2 === 0)
            return (
              <div key={post.id} className="post-item">
                <img src={post.img} alt={post.alt} />
                <span className="post-date">
                  {new Date(post.date).toDateString()}
                </span>
                <h3>{post.title}</h3>
                <p>{post.content}</p>
              </div>
            );
        })}
      </div>
      <div className="post-column">
        {posts.map((post, index) => {
          if (index % 2 !== 0)
            return (
              <div key={post.id} className="post-item">
                <img src={post.img} alt={post.alt} />
                <span className="post-date">
                  {new Date(post.date).toDateString()}
                </span>
                <h3>{post.title}</h3>
                <p>{post.content}</p>
              </div>
            );
        })}
      </div>
    </section>
  );
}
