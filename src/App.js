import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

import HomePage from './HomePage'
import ClientPage from './ClientPage'
import PastClientsPage from './PastClientsPage'

// Import client data and make shortcuts to each bit of data
import clientData from './clientData'
//import MaintenancePage from './MaintenancePage'

class App extends React.Component {
	constructor (props) {
    super (props)

    let loggedIn = localStorage.getItem('canViewPastWork')
    this.state = {
      isLoggedIn: loggedIn === 'true' ? true : false,
    }

    this.handleLogIn = this.handleLogIn.bind(this)
  }

  calculateClientList (clients) {
  	let calculatedList = []

  	if (this.state.isLoggedIn === false) {
  		Object.keys(clients).map(clientName => {
      	const currentClient = clients[clientName]
      	if (currentClient.recent === true) {
      		calculatedList.push(clientName)
      	}
        return currentClient
      })
  	}
  	else {
  		Object.keys(clients).map(clientName => {
  			calculatedList.push(clientName)
            return clientName
  		})
  	}

  	return calculatedList
  }

  handleLogIn () {
  	this.setState({
  		isLoggedIn: true
  	})
  }

	render () {
		const props = this.props

		// Render our custom home page component
		const renderHomePage = (props) => {
			return (
				<HomePage
          clients={clientData.clients}
          triggerAssets={clientData.triggerAssets}
					{...props}
				/>
			)
		}

		const renderPastClientsPage = (props) => {
		  return (
		    <PastClientsPage
          clients={clientData.clients}
          isLoggedIn={this.state.isLoggedIn}
          onLogIn={this.handleLogIn}
          triggerAssets={clientData.triggerAssets}
		      {...props}
		    />
		  )
		}

		// Render our custom client page component
		const renderClientPage = (props) => {
			return (
				<ClientPage
          clients={clientData.clients}
          isLoggedIn={this.state.isLoggedIn}
          orderedClientList={this.calculateClientList(clientData.clients)}
          onLogIn={this.handleLogIn}
					{...props}
				/>
			)
		}
    
    const NotFound = (props) => {
      if (props.match.path !== "/") {
        return (
          <p>
            We’re sorry, but we cannot find the page you requested:
            <code>{props.location.pathname}</code>
          </p>
        );
      } else {
        return null;
      }
    }

		return (
		  <Router {...props}>
		  	<div>
          <Route exact path="/" component={renderHomePage} />
          <Route path="/client/:name" component={renderClientPage} />
          <Route path="/pastclients" component={renderPastClientsPage} />
          <Route path="/404" component={NotFound} />
          <Route component={NotFound} />
			  </div>
		  </Router>
		)
	}
}

export default App
