function Comments({ comments }) {
    return (
        <>
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
        </>
    )
}

export default Comments