import React from 'react'


export default function Friend(props) {

  let nameref = React.createRef()
  let friendref = React.createRef()


  function changeName() {
    nameref.current.innerHTML = prompt('Введите имя')
  }

  return (
    <div class="friend" ref={friendref}>
      <h5 ref={nameref}>{props.name}</h5>
      <div class="bttns">
        <img src="https://mywebicons.ru/i/png/521d148e273086f246c6f7a313485392.png" alt="" class="sad" onClick={changeName} />
        <button class="delButton" onClick={() => props.delButton(props.id)}>Delete friend</button>
      </div>
    </div>
  )
}
