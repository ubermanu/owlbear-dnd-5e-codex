import 'the-new-css-reset/css/reset.css'
import Codex from './Codex.svelte'
import './app.css'

const app = new Codex({
  target: document.getElementById('app'),
})

export default app
