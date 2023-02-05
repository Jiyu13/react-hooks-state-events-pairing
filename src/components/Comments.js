import { useState } from "react"

function Comments({ comments }) {

    const [toggle, setToggle] = useState(false)

    const context = toggle ? "Hide Comments" : "Show Comments"

    function handleToggleComments() {
        setToggle(toggle => !toggle)
    }

    return (
        <>
            <button id="comment-btn" onClick={handleToggleComments}>
                {context}
            </button>
            <div id="comment-lists">
                <h2>{comments.length} comments</h2>
                {toggle &&
                    <ul >
                    {comments.map(comment => {
                    return <li key={comment.id} id={comment.id}>
                        <h3>{comment.user}</h3>
                        <p>{comment.comment}</p>
                    </li>
                    })}
                </ul>
                }
                

            </div>
            
        </>
    )
}

export default Comments