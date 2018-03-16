import {h, app} from 'hyperapp'

export const Reservations = ({state, actions}) => {
  return (
    <div id="Reservations" className={`${(state.times) ? 'inactive' : ''}`}>
      <div className="container">
        <p className="close" onclick={actions.close}>&times;</p>
        <div className="reserveHeader">
          Reserve
        </div>
        <div className="reserveSubHeader">
          Fill out the form, secure your spot
        </div>
        <form id="ContactForm">
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <input className="form-control" data-validation-required-message="Please enter your name." id="name" placeholder="Name *" required="" type="text" aria-invalid="false"/>
                <p className="help-block text-danger"> </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <input className="form-control" data-validation-required-message="Please enter your phone." id="name" placeholder="Your Phone *" required="" type="text"/>
                <p className="help-block text-danger"> </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <input className="form-control" data-validation-required-message="Please enter your email." id="name" placeholder="Email *" required="" type="text" aria-invalid="false"/>
                <p className="help-block text-danger"> </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <input className="form-control" data-validation-required-message="Please enter your date." id="name" placeholder="Date *" required="" type="text"/>
                <p className="help-block text-danger"> </p>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group">
              <textarea className="form-control" data-validation-required-message="Please enter a message." id="message" name="message" placeholder="Do You Have Any Special Requirements? *" required=""></textarea>
              <p className="help-block text-danger"> </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 text-center">
              <div id="success"> </div>
              <button className="btn btn-contact" type="button" onclick={actions.close}>Book</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
