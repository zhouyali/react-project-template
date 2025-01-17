import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'
import { routes } from './router'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Topbar from './components/topbar/index.js'
import Footer from './components/footer/index.js'

import Loading from './components/loading'

@inject('loadingStore')
@observer
class App extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  UNSAFE_componentWillReceiveProps (nextProps) {
    const { pathname } = this.props.location
    const nextPathname = nextProps.location.pathname

    if (pathname !== nextPathname) {
      this.props.loadingStore.toggleLoadingStatus(true)
    }
  }

  componentDidMount () {}

  render () {
    const { location, loadingStore } = this.props
    return (
      <div>
        <Topbar/>
        <CSSTransition
          in={loadingStore.isShowLoading}
          classNames="fades"
          timeout={300}
          unmountOnExit
        >
          <Loading />
        </CSSTransition>
        <TransitionGroup>
          <CSSTransition key={location.key} classNames="fades" timeout={300}>
            <Switch location={location}>
              {routes.map((route, i) => (
                <Route
                  key={i}
                  exact
                  path={route.path}
                  render={props => {
                    // pass the sub-routes down to keep nesting
                    return <route.component {...props} />
                  }}/>
              ))}
              <Redirect to="/" />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        <Footer />
      </div>
    )
  }
}

export default withRouter(App)
