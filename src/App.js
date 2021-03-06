import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

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

		return (
		  <Router {...props}>
		  	<div>
		  		<Route exact path='/' render={renderHomePage} />
			    <Route path='/client/:name' render={renderClientPage} />
	        <Route path='/pastclients' render={renderPastClientsPage} />
			    {/*<Route path='*' component={NotFound} />*/}
			  </div>
		  </Router>
		)
	}
}

export default App
