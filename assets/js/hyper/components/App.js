import {h, app} from 'hyperapp'
import { Header } from './Header.js'
import { TopImg } from './TopImg.js'
import { OurStory } from './OurStory.js'
import { SpecialMenu } from './SpecialMenu.js'
import { Quote } from './Quote.js'
import { Reviews } from './Reviews.js'
import { PromotionsAndEvents } from './PromotionsAndEvents.js'
import { Contact } from './Contact.js'
import { Footer } from './Footer.js'
import {Reservations} from './Reservations.js'

// const Header = ({state}, {actions}) => {
//   return <h1>something</h1>;
// }

export default function App({state, actions}) {
  return (
    <div class={'app'}>
      <Header state={state} actions={actions}/>
      <TopImg state={state} actions={actions}/>
      <OurStory state={state} actions={actions}/>
      <SpecialMenu state={state} actions={actions}/>
      <Quote state={state} actions={actions}/>
      <Reviews state={state} actions={actions}/>
      <PromotionsAndEvents state={state} actions={actions}/>
      <Contact state={state} actions={actions}/>
      <Footer state={state} actions={actions}/>
    </div>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
