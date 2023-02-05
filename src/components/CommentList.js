import { useState } from "react"
import Comment from "./Comment"

function CommentList({ comments }) {

    const [toggle, setToggle] = useState(false)
    const [search, setSearch] = useState("")

    const context = toggle ? "Hide Comments" : "Show Comments"

    function handleToggleComments() {
        setToggle(toggle => !toggle)
    }

    function handleSearch(event) {
        setSearch(event.target.value)
    }

    const commentToDisplay = comments.filter(comment => {
        return comment.user.toLowerCase().includes(search.toLowerCase())
    })

    return (
        <>
            <button id="comment-btn" onClick={handleToggleComments}>
                {context}
            </button>
            <div id="comment-lists">
                <h2>{comments.length} comments</h2>
                
                {toggle &&
                    <ul >
                        <input type="text"
                               placeholder="Search..."
                               name="search"
                               onChange={handleSearch}
                        />

                        {commentToDisplay.map(comment => (
                            <Comment comment={comment} />
                        ))}
                    </ul>
                }
                

            </div>
            
        </>
    )
}

export default CommentList