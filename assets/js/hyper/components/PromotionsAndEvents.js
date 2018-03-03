import {h, app} from 'hyperapp'

export const PromotionsAndEvents = ({state}, {actions}) => {
  return (
    <section id="PromotionsAndEvents">
      <div className="container">
        <h6>our news</h6>
        <h3>promotions & events</h3>
        <div className="specialContainer">
          <div className="box image1">

          </div>
          <div className="box event">
            <div className="eventTitle">
              Beef Sauteed onions - Let&#39;s enjoy!
            </div>
            <div className="divider">
            -----------------
            </div>
            <div className="eventDetails">
              <div className="eventAddress">
                28-15 raphael st, fair lawn, nj
              </div>
              <div className="eventTime">
                10:00 AM - 11:00 AM
                </div>
                <div className="eventDate">
                March 3rd, 2018
              </div>
            </div>
          </div>
          <div className="box event">
            <div className="eventTitle">
              Art photography in foody
            </div>
            <div className="divider">
            -----------------
            </div>
            <div className="eventDetails">
              <div className="eventAddress">
                420 amsterdam ave, amsterdam, netherlands
              </div>
              <div className="eventTime">
              4:20 AM - 4:20 PM
              </div>
              <div className="eventDate">
              April 20th, 2018
              </div>
            </div>
          </div>
          <div className="box image2">

          </div>

        </div>
      </div>
    </section>
  )
}
