import {h, app} from 'hyperapp'

export const Reviews = ({state}, {actions}) => {
  return (
    <section id="Reviews">
      <div className="container">
        <div className="row">
          <div className="col-md-6 second">
            <img src="http://pngimg.com/uploads/chef/chef_PNG162.png?i=1" />
          </div>
          <div className="col-md-6 first">
            <h6>Review</h6>
            <h2>See what others say about us ;)</h2>
            <div className="reviewQuote">
              &quot;Best restaurant that i used to experience!&quot;
            </div>
            <p>Hella lyft cray put a bird on it art party squid pour-over swag organic irony listicle. Chia synth shaman everyday carry tbh, hot chicken pickled. VHS trust fund pitchfork cronut, venmo helvetica thundercats beard edison bulb hexagon offal portland chicharrones.</p>
            <div className="quote">
              <strong>Chef Extraordinaire</strong> <span>&#9702;</span> Fredrick Helsing Von Heisenhoper
            </div>
            <div className="arrow">
              <a href="#" className="left">
              </a>
              <a href="#" className="right">
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
