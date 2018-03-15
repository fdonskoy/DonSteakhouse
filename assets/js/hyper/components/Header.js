import {h, app} from 'hyperapp'

//This doesnt work
// export default function Header({state, actions}) {
//   return (
//     <header>anything</header>
//   )
// }

export const Header = ({ state, actions }) => {
	return (
		<header>
			<div className="container">
				<div className="logo" />
				<div className="hamburger" onclick={actions.showMenu}>
					<div />
					<div />
					<div />
				</div>
				<nav className={state.menu}>
					<a href="#SpecialMenu">Menu</a>
					<a href="#">Reservations</a>
					<a href="#Reviews">Reviews</a>
					<a href="#Contact">Contact</a>
					<div className="close" onclick={actions.closeMenu}>
						<i class="fas fa-times" />
					</div>
				</nav>
			</div>
		</header>
	);
};
// <a href="#ex1" rel="modal:open">
// 	<span data-toggle="modal" data-target="#myModal">Reservations</span>
// </a>
