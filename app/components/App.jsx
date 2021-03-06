import React from 'react'
import AltContainer from 'alt/AltContainer'
import UserStore from 'stores/UserStore'
import UserActions from 'actions/UserActions'
import ConfigStore from 'stores/ConfigStore'
import Navigation from 'components/Navigation'
import Footer from 'components/Footer'
import { isBrowser } from 'utils/environment'

if (isBrowser()) {
  require('velocity-react/node_modules/velocity-animate')
  require('velocity-react/node_modules/velocity-animate/velocity.ui')
  require('font-awesome-webpack')
}

import 'scss/main';
import styles from 'scss/components/_app';

/*
 * This component operates as a "Controller-View". It listens for changes in the
 * Store and passes the new data to its children.
 *
 * React provides the kind of composable views we need for the view layer. Close to the top of the nested view hierarchy,
 * a special kind of view listens for events that are broadcast by the stores that it depends on. One could call this a
 * controller-view, as it provides the glue code to get the data from the stores and to pass this data down the chain of its
 * descendants. We might have one of these controller views governing any significant section of the page.
 *
 * When it receives an event from the store, it first requires the new data via the store's public getter methods. It then calls
 * its own setState() or forceUpdate() methods, causing its own render() method and the render() method of all its descendants to run.
 *
 * We often pass the entire state of the store down the chain of views in a single object, allowing different descendants to use
 * what they need. In addition to keeping the controller-like behavior at the top of the hierarchy, and thus keeping our descendant
 */
export default class App extends React.Component {

  componentDidMount() {
    this.setupLogoutListener()
  }

  setupLogoutListener() {
    var user = UserStore.getState().user
    if (user && user.get('authenticated') && isBrowser()) {
      var Pusher = require('pusher-js')
      var pusher = new Pusher(ConfigStore.getState().config.get('pusherID'), { encrypted: true })
      pusher.subscribe(String(user.get('id'))).bind('logout', this.handleLogout)
    }
  }

  handleLogout() {
    UserActions.logout()
  }


  render() {
    return (
      <AltContainer stores={{
        UserStore: UserStore,
        ConfigStore: ConfigStore
      }}>
        <div className={styles.app}>
          <Navigation />
          {this.props.children}
          <Footer />
        </div>
      </AltContainer>
    );
  }
}

App.propTypes = { children: React.PropTypes.object };
