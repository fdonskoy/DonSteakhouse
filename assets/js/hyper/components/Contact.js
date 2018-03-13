import {h, app} from 'hyperapp'

export const Contact = ({state, actions}) => {
  return (
    <section id="Contact">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2381.7399040776495!2d-6.261147484122739!3d53.34791197997939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!3m2!1sen!2sus!4v1462581622087"
      width="600" height="450" frameborder="0" style="border:0" allowfullscreen>
      </iframe>

      <div className="container">
        <h6>Contact us</h6>
        <h3>we&#39;re here to help</h3>
        <div className="contactBox">
          <div className="left">
            <div className="city">
              <strong>{state.companyInfo.address.city},</strong> {state.companyInfo.address.state}
            </div>
            <div className="address">
              {state.companyInfo.address.address}
            </div>
            <div className="email">
              <strong>Email: </strong>{state.companyInfo.email}
            </div>
          </div>
          <div className="right">
            Call directly:
            <div className="phoneNumber">
              +1(201)-555-5555
            </div>
            <div className="serviceInfo">
              <strong>Lunch Service:</strong><br/>
              Weekend Catering: Bookings from 12pm - 3pm
            </div>
            <div className="serviceInfo">
              <strong>Dinner Service:</strong><br/>
              Daily Catering: Bookings from 6pm - 8pm
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
