import VoteButtons from "./VoteButtons"

function Comment({comment, onDeleteChange}) {
    return <li key={comment.id} id={comment.id}>
        <VoteButtons upvotes={0} downvotes={0}/>
        <h3>{comment.user}</h3>
        <p>{comment.comment}</p>

        <button id={comment.user} name={comment.user} onClick={onDeleteChange}>Delete</button>
    </li>
        
}

export default Comment
