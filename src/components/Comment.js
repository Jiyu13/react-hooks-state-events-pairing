import VoteButtons from "./VoteButtons"

function Comment({comment}) {
    return <li key={comment.id} id={comment.id}>
        <VoteButtons upvotes={0} downvotes={0}/>
        <h3>{comment.user}</h3>
        <p>{comment.comment}</p>
    </li>
        
}

export default Comment
