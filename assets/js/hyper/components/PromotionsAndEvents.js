import {h, app} from 'hyperapp'

export const PromotionsAndEvents = ({state, actions}) => {
  return (
    <section id="PromotionsAndEvents">
      <div className="container">
        <h6 data-aos="fade">our news</h6>
        <h3 data-aos="fade">promotions & events</h3>
        <div className="specialContainer">
          <div className="box image1" data-aos="fade-down">

          </div>
          <div className="box event" data-aos="fade-down">
            <div className="eventTitle">
              Beef Sauteed onions - Let&#39;s enjoy!
            </div>
            <div className="divider">
            -----------------
            </div>
            <div className="eventDetails">
              <div className="eventAddress">
                49-49 Tortellini Ave, Pastafari, Italy
              </div>
              <div className="eventTime">
                10:00 AM - 11:00 AM
                </div>
                <div className="eventDate">
                March 3rd, 2018
              </div>
            </div>
          </div>
          <div className="box event" data-aos="zoom-out-up">
            <div className="eventTitle">
              Art photography in foody
            </div>
            <div className="divider">
            -----------------
            </div>
            <div className="eventDetails">
              <div className="eventAddress">
                162 Hamilton St, Macbeth Township, Shakespeare
              </div>
              <div className="eventTime">
              3:00 PM - 7:00 PM
              </div>
              <div className="eventDate">
              April 20th, 2018
              </div>
            </div>
          </div>
          <div className="box image2" data-aos="zoom-out-up">

          </div>

        </div>
      </div>
    </section>
  )
}
