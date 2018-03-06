import {h, app} from 'hyperapp'

export const Quote = ({state}, {actions}) => {
  return (
    <section id="Quote">
      <div className="container">
        <div className="quoteContainer">
          <h1 className="quoteContent">
          <span className="quote">&ldquo;</span>i love cooking for myself and for my family
          </h1>
          <div className="quoteAuthor">
            - Fil Don -
          </div>
        </div>
      </div>
    </section>
  )
}
