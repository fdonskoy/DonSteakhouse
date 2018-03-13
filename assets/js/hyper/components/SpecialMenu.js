import {h, app} from 'hyperapp'

export const SpecialMenu = ({state, actions}) => {
  let menuItems = (() => {
    return state.specialMenu.map((item) => {
      return (
        <div className="one special">
          <div className="specialTop">
            <div className="specialPrice">
              {item.price}
            </div>
          </div>
          <div className="specialDescription">
            <div className="dish">{item.title}</div>
            <div className="ingredients">{item.description}</div>
          </div>
        </div>
      )
    })
  })

  return (
    <section id="SpecialMenu">
      <div className="container">
        <div className="hContainer">
          <h6>special menu</h6>
          <h3>Delicious flavours of autumn</h3>
        </div>
        <div className="specialContainer">
          {menuItems()}
        </div>
        <div className="menuLink">
          <a href="#">View full menu</a>
        </div>
      </div>
    </section>
  )
}
