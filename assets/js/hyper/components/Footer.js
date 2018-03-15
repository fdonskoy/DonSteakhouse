import {h, app} from 'hyperapp'

export const Footer = ({state, actions}) => {
  return (
    <section id="Footer">
      <div className="container" data-aos="zoom-in">
        <div className="logo">
        </div>
        <div className="links">
          <li>Reservations</li>
          <li>Catering</li>
          <li>Contact</li>
          <li>Reviews</li>
        </div>
        <div className="social">
          <div className="media">
            <i class="fab fa-twitter"></i>
          </div>
          <div className="media">
            <i class="fab fa-facebook-f"></i>
          </div>
          <div className="media">
            <i class="fab fa-instagram"></i>
          </div>
          <div className="media">
            <i class="fas fa-rss"></i>
          </div>
        </div>
        <div className="copyright">
          Designed by LoganCee<br/>
          Coded by Filip Donskoy
        </div>
      </div>
    </section>
  )
}
