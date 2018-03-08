import {h, app} from 'hyperapp'

//This doesnt work
// export default function Header({state, actions}) {
//   return (
//     <header>anything</header>
//   )
// }

export const Header = ({ state }, { actions }) => {
	return (
		<header>
			<div className="container">
				<div className="logo" />
				<div className="hamburger">
					<div />
					<div />
					<div />
				</div>
				<nav>
					<a href="#">Menu</a>
					<a href="#">Party Platters</a>
					<a href="#">Locations</a>
					<a href="#">Rewards</a>
					<a href="#">Reservations</a>
					<div className="close">
						<i class="fas fa-times" />
					</div>
				</nav>
			</div>
		</header>
	);
};
