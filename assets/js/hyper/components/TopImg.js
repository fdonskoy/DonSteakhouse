import {h, app} from 'hyperapp'

export const TopImg = ({state}, {actions}) => {
  return (
    <section id="TopImg">
      <div className="container">
        <div className="title">
          <h5>
            Welcome
          </h5>
          <h1>
            The Don Steakhouse
          </h1>
        </div>
        <div className="contact-info">
          <div>Call for reservations</div>
          <h2>(555) 555-5555</h2>
          <div className="hours">
            <span>Opening Hours: </span>
            <span><strong>Mon-Fri:</strong> 9am - 9pm </span>
            <span><strong>Weekend:</strong> 9am - 11:00pm </span>
          </div>
        </div>
      </div>
    </section>
  )
}
