import video from "../data/video.js";
import VoteButtons from "./VoteButtons.js";

function App() {
  console.log("Here's your data:", video);
  const { id, title, embedUrl, views, createdAt, upvotes, downvotes, comments} = video

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <h1>{title}</h1>
      <div>{views} views | {createdAt}</div>

      <VoteButtons upvotes={upvotes} downvotes={downvotes}/>

      
      <hr />

      <button id="comments">Hide Comments</button>
      <h2>{comments.length} comments</h2>
      <ul >
        {comments.map(comment => {
          return <li key={comment.id} id={comment.id}>
            <h3>{comment.user}</h3>
            <p>{comment.comment}</p>
          </li>
        })}
      </ul>

    </div>
  );
}

export default App;
