import { useState } from "react"
import Comment from "./Comment"

function CommentList({ comments }) {
    const [commentList, setCommentList] = useState(comments)
    const [toggle, setToggle] = useState(false)
    const [search, setSearch] = useState("")

    const context = toggle ? "Hide Comments" : "Show Comments"

    function handleToggleComments() {
        setToggle(toggle => !toggle)
    }

    function handleSearch(event) {
        setSearch(event.target.value)
    }

    function handelDeleteComment(event) {
        const newArray = commentList.filter(comment => {
            return comment.user !== event.target.name
        })
        console.log(newArray)
        setCommentList(newArray)
    }

    const commentToDisplay = commentList.filter(comment => {
        return comment.user.toLowerCase().includes(search.toLowerCase())
    })

    return (
        <>
            <button id="comment-btn" onClick={handleToggleComments}>
                {context}
            </button>
            <div id="comment-lists">
                <h2>{commentList.length} comments</h2>
                
                {toggle &&
                    <ul >
                        <input type="text"
                               placeholder="Search By User..."
                               name="search"
                               onChange={handleSearch}
                        />

                        {commentToDisplay.map(comment => (
                            <Comment key={comment.id} comment={comment} onDeleteChange={handelDeleteComment}/>
                        ))}
                    </ul>
                }
                

            </div>
            
        </>
    )
}

export default CommentList