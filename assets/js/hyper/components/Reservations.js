import {h, app} from 'hyperapp'

export const Reservations = ({state, actions}) => {
  return (
    <div id="Reservations">
      <div id="popup1" className={`overlay ${(state.times) ? 'diss' : ''}`}>
        <div className="popup">
          <h2>Here i am</h2>
          <a className="close" href="#" onclick={actions.close}>&times;</a>
          <div className="content">
            Thank to pop me out of that button, but now im done so you can close this window.
          </div>
        </div>
      </div>
    </div>
  )
}
