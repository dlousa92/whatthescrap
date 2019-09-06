import React from 'react'
import './App.css'
import Form from './components/Form/Form'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      url: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (e) {
    e.preventDefault(
      console.log(e)
    )
  }

  handleSubmit (e) {
    e.preventDefault()
    console.log(e)
  }

  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <Form
            hello='hello'
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </header>
      </div>
    )
  }
}

export default App
