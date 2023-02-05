import { useState } from "react"

function VoteButtons( {upvotes, downvotes} ) {

    return (
        <>
            <button id="upvotes">{upvotes} 👍</button>
            <button id="downvotes">{downvotes} 👎</button>
        </>
        
    )

}

export default VoteButtons