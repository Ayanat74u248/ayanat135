import React, { useState } from 'react'
import Post from './Post'


export default function Main(props) {

    let [posts, setposts] = useState(props.posts)

    let titleRef = React.createRef()
    let imgRef = React.createRef()

    function addPost() {
        let title = titleRef.current.value;
        let img = imgRef.current.value

        let newPost = {
            id: posts.length + 1,
            title: title,
            text: "NEW BMW M5",
            ava_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/BMW_logo_%28gray%29.svg/800px-BMW_logo_%28gray%29.svg.png",
            post_url: img,
            likes: 0,
        }
        setposts([...posts, newPost])
        titleRef.current.value = ""
        imgRef.current.value = ""
        alert("Ваш пост был добавлен")
    }

    function deletePost(post_id){
        setposts(posts.filter(p => p.id != post_id))
    }

    let postsHTML = posts.map(p => {
        return <Post id={p.id} deletePost={deletePost} title={p.title} text={p.text} ava_url={p.ava_url} post_url={p.post_url} likes={p.likes}></Post>
    })

    return (
        <main>
            <div class="Post_ww">
                <br/>
                <h2>Добавить пост</h2>
                <br />
                <input type="text" placeholder="Заголовок" ref={titleRef} />
                <br />
                <br />
                <input type="text" placeholder="Ссылка на картинку" ref={imgRef} />
                <br />
                <button onClick={addPost}>Добавить</button>
            </div>
            {postsHTML}

        </main>
    )
}