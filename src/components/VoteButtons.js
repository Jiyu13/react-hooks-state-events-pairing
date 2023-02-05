import { useState } from "react"

function VoteButtons( {upvotes, downvotes} ) {

    const [upvotesCount, setUpVotesCount] = useState(upvotes)
    const [downvotesCount, setDownVotesCount] = useState(downvotes)

    function handldeUpVote() {
        setUpVotesCount(currentVotes => currentVotes + 1)
    }

    function handldeDownVote() {
        setDownVotesCount(currentVotes => currentVotes - 1)
    }

    return (
        <>
            <button id="upvotes" onClick={handldeUpVote}>{upvotes} 👍</button>
            <button id="downvotes" onClick={handldeDownVote}>{downvotes} 👎</button>
        </>
        
    )

}

export default VoteButtons