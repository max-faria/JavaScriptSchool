import { useState } from "react";

export default function App() {
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [comments, setComments] = useState([]);

  function handleSubmit(ev) {
    ev.preventDefault();

    const newComment = {
      id: Math.floor(Math.random() * 1000000),
      author: author,
      content: content,
      date: new Date(),
    };

    console.log(newComment);
    setComments((state) => [newComment, ...state]);
    setAuthor("");
    setContent("");
  }

  return (
    <div id="app">
      <h2>Comments Feed with React</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="author"
          placeholder="Your email here"
          required
          value={author}
          onChange={(ev) => setAuthor(ev.target.value)}
        />
        <textarea
          name=""
          id="content"
          cols="30"
          rows="6"
          placeholder="Write here your comment"
          required
          value={content}
          onChange={(ev) => setContent(ev.target.value)}
        ></textarea>
        <button type="submit">Publish</button>
      </form>
      <div className="comment">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div key={comment.id}>
              <h3>{comment.author}</h3>
              <span>at {comment.date.toLocaleString()}</span>
              <p>{comment.content}</p>
            </div>
          ))
        ) : (
          <p>Be the first to comment :)</p>
        )}
      </div>
    </div>
  );
}
