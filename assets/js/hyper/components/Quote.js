import {h, app} from 'hyperapp'

export const Quote = ({state, actions}) => {
  let quote = () => {
    return state.bannerQuote.map((quote) => {
      return (
        <div className="quoteContainer" data-aos="fade">
          <h1 className="quoteContent">
          <span className="quote">&ldquo;</span>{quote.quote}
          </h1>
          <div className="quoteAuthor">
            - {quote.author} -
          </div>
        </div>
      )
    })
  }
  return (
    <section id="Quote">
      <div className="container">
        {quote()}
      </div>
    </section>
  )
}
