import {h, app} from 'hyperapp'

export const SpecialMenu = ({state}, {actions}) => {
  return (
    <section id="SpecialMenu">
      <div className="container">
        <h6>special menu</h6>
        <h3>Delicious flavours of autumn</h3>
        <div className="specialContainer">
          <div className="one special">
            <div className="specialTop">
              <div className="specialPrice">
                $30
              </div>
            </div>
            <div className="specialDescription">
              <div className="dish">Fillet Mignon</div>
              <div className="ingredients">Clean cut of fillet mignon surrounded by roasted red potatoes with
              rosemary, mushroom sauce, vine</div>
            </div>
          </div>
          <div className="two special">
            <div className="specialTop">
              <div className="specialPrice">
                $30
              </div>
            </div>
            <div className="specialDescription">
              <div className="dish">Fillet Mignon</div>
              <div className="ingredients">Clean cut of fillet mignon surrounded by roasted red potatoes with
              rosemary, mushroom sauce, vine</div>
            </div>
          </div>
          <div className="three special">
            <div className="specialTop">
              <div className="specialPrice">
                $30
              </div>
            </div>
            <div className="specialDescription">
              <div className="dish">Fillet Mignon</div>
              <div className="ingredients">Clean cut of fillet mignon surrounded by roasted red potatoes with
              rosemary, mushroom sauce, vine</div>
            </div>
          </div>
        </div>
        <div className="menuLink">
          <a href="#">View full menu</a>
        </div>
      </div>
    </section>
  )
}
