import { useState } from "react"

function VoteButtons( {upvotes, downvotes} ) {

    const [upvotesCount, setUpVotesCount] = useState(upvotes)
    const [downvotesCount, setDownVotesCount] = useState(downvotes)

    function handldeVote() {
        setUpVotesCount(currentVotes => currentVotes + 1)
    }


    return (
        <>
            <button id="upvotes" onClick={handldeVote}>{upvotesCount} 👍</button>
            <button id="downvotes" onClick={handldeVote}>{downvotesCount} 👎</button>
        </>
        
    )

}

export default VoteButtons