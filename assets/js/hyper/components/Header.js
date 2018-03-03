import {h, app} from 'hyperapp'

//This doesnt work
// export default function Header({state, actions}) {
//   return (
//     <header>anything</header>
//   )
// }

//this does
export const Header = ({state}, {actions}) => {
  return (
    <header>
      <div className="container">
        <div className="logo">
        </div>
        <nav>
          <a href="#">Menu</a>
          <a href="#">Party Platters</a>
          <a href="#">Locations</a>
          <a href="#">Rewards</a>
          <a href="#">Reservations</a>
        </nav>
      </div>
    </header>
  )
}
