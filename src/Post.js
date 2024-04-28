import React, { useState } from 'react'

export default function Post(props) {
    let [likestatus, setLikestatus] = useState(0)
    let likeref = React.createRef()

    let [likes, setLikes] = useState(props.likes)

    function like(){
       if(likestatus == 1){
        likeref.current.src = 'https://img.icons8.com/?size=50&id=87&format=png'
        setLikes(likes - 1)
        setLikestatus(0)
       } else{
        likeref.current.src = 'https://img.icons8.com/?size=50&id=37975&format=png'
        setLikes(likes + 1)
        setLikestatus(1)
       }
    }

    return (
        <post>
            <div class="post">
                <div class="ava">
                    <img src={props.ava_url} alt="" />
                    <div class="text">
                        <h4> {props.title} </h4>
                        <p> {props.text} </p>
                    </div>
                </div>
                <div class="content">
                    <img src={props.post_url} alt="" />
                </div>
                <div class="buttons">
                    <div class="like">
                    <img src="https://img.icons8.com/?size=50&id=87&format=png" alt="" onClick={like} ref={likeref} />
                    <p> {likes} </p>
                    </div>
                    <img src="https://img.icons8.com/?size=50&id=143&format=png" alt="" />
                    <button onClick={() => props.deletePost(props.id)} class="deletePost">Delete</button>
                </div>
            </div>  
        </post>
    )
}
