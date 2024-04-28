import React from 'react'

export default function Profile(props) {
    
    let aboutref = React.createRef()
    let nameref = React.createRef()
    let ageref = React.createRef()
    let hobbyref = React.createRef()
    let ava_imgref = React.createRef()

    function changeProfile(){
        nameref.current.innerHTML = 'Имя: ' + prompt('Введите имя')
        ageref.current.innerHTML = 'Возраст: ' + prompt('Введите возраст')
        hobbyref.current.innerHTML = 'Хобби: ' + prompt('Введите хобби')
        aboutref.current.innerHTML = prompt('Введите что то еще')
        ava_imgref.current.src = prompt('url')
    }

    return (
        <div class="profile">
            <img src={props.profile.ava_img} alt="" width="100px" ref={ava_imgref} />
            <h2 ref={nameref}>Имя: {props.profile.name}</h2>
            <h2 ref={ageref}>Возраст: {props.profile.age}</h2>
            <h2 ref={hobbyref}>Хобби: {props.profile.hobby}</h2>
            <p ref={aboutref}>{props.profile.about}</p>
            <button onClick={changeProfile}>change text</button>
        </div>
    )
}
