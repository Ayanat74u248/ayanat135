import React, { useState } from 'react'
import Friend from './Friend'


export default function Friends(props) {

    let namesref = React.createRef()
    let friendsref = React.createRef()

    let [friends, setfriends] = useState(props.friends)

    function addFriend() {
        let name = namesref.current.value;

        let newFriend = {
            id: friends.length + 1,
            name: name,

        }
        setfriends([...friends, newFriend])
        namesref.current.value = ""
        alert("Ваш друг был добавлен")
    }

    function delButton(friend_id) {
        setfriends(friends.filter(f => f.id != friend_id))
    }

    let friendsHTML = friends.map(f => {
        return <Friend id={f.id} delButton={delButton} name={f.name} ></Friend>
    })

    return (
        <div class="friends">
            <div class="Friends_rr">
                <h2>Добавить друга</h2>
                <br />
                <input type="text" placeholder="Введите имя и фамилию" ref={namesref} />
                <br />
                <button onClick={addFriend}>Добавить</button>
            </div>
            {friendsHTML}
        </div>
    )
}
