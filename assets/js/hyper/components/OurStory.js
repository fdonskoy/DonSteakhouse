import {h, app} from 'hyperapp'

export const OurStory = ({state, actions}) => {
  return (
    <section id="OurStory" data-aos="fade-up" data-aos-once="true">
      <div className="container">
        <div className="row">
          <div className="col-md-6 first">
            <h6>Our Story</h6>
            <h2>Cooking is the art of adjustment</h2>
            <p>Hella lyft cray put a bird on it art party squid pour-over swag organic irony listicle. Chia synth shaman everyday carry tbh, hot chicken pickled. VHS trust fund pitchfork cronut, venmo helvetica thundercats beard edison bulb hexagon offal portland chicharrones.</p>
            <div className="quote">
              <strong>Chef Extraordinaire</strong> <span>&#9702;</span> Fredrick Helsing Von Heisenhoper
            </div>
            <a href="#" className="reserve-btn">Book A Reservation</a>
          </div>
          <div className="col-md-6 second">
            <img src="/images/lambChop.jpg!d" />
          </div>
        </div>
      </div>
    </section>
  )
}
