import { h, app } from 'hyperapp'
import devtools from 'hyperapp-redux-devtools';
import {actions} from './actions/actions.js';
import {globalState} from './state/globalState.js'
import App from './components/App.js'

window.onload = () => {
  app({
    state: globalState,
    view: (state, actions) => <App state={state} actions={actions} />,
    root: document.getElementById('app'),
    actions,
    events: {
      action(state, actions, { name, data }) {
        console.group("Action Info")
        console.log("Name:", name)
        console.log("Data:", data)
        console.groupEnd()
      },
      load(state, actions) {
        actions.intro();
      }
    },
    mixins: [devtools()]
  })
}
