import {h, app} from 'hyperapp'

export const Reviews = ({state, actions}) => {
  let currentReview = state.reviewIndex.current;
  let reviews = () => {
      return (
        <div className="review">
          <div className="reviewQuote">
            &quot;{state.reviews[currentReview].quote}&quot;
          </div>
          <p>{state.reviews[currentReview].body}</p>
          <div className="quote">
            <strong>{state.reviews[currentReview].authorTitle}</strong> <span>&#9702;</span> {state.reviews[currentReview].author}
          </div>
        </div>
      )
  }
  return (
    <section id="Reviews">
      <div className="container">
        <div className="row">
          <div className="col-md-6 second">
            <img src="/images/chef.png" />
          </div>
          <div className="col-md-6 first">
            <h6>Review</h6>
            <h2>See what others say about us ;)</h2>
            <div className="reviewContainer">
              {reviews()}
            </div>
            <div className="arrow" onclick={state.actions.reviewLeft}>
              <a onclick={actions.reviewLeft}
                href=""
                className={`left ${(state.reviewIndex.current > 0) ? 'active': ''}`}>
                <i class="fas fa-arrow-left"></i>
              </a>
              <a onclick={actions.reviewRight}
                href="" className={`right ${(state.reviewIndex.current < state.reviews.length-1) ? 'active': ''}`}>
                <i class="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
