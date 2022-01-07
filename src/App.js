import {BrowserRouter, Route, Switch} from 'react-router-dom'

import LoginRoute from './components/LoginRoute'
import HomeRoute from './components/HomeRoute'
import NotFoundRoute from './components/NotFoundRoute'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={LoginRoute} />
      <Route exact path="/" component={HomeRoute} />
      <Route component={NotFoundRoute} />
    </Switch>
  </BrowserRouter>
)

export default App
