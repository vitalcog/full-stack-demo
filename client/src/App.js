import React, { Component } from 'react'

import './app-style.css'

import Header from './components/header/hd-component'
import NumberGenerator from './components/num-generator/ng-component'
import Footer from './components/footer/ft-component'
import Modal from './components/modal/md-component'
import AddOne from './components/add-one/ao-component'

// Adding some comments to try staging changes
// previous commit did not add modified "client" folder

class App extends Component {
  constructor() {
    super()
    this.state = {
      numberGenerators: null,
      showModal: false,
    }
  }

  componentWillMount() {
    fetch('/getData')
    .then(response => {
      return response.json()
    })
    .then(res => {
      // console.log(res)
      this.setState({
        numberGenerators: res,
      })
    })
    .catch( error => {
      console.log(error)
      throw new Error(error)
    })
  }

  closeModal = ()=> {
    this.setState({
      showModal: false,
    })
  }

  openModal = ()=> {
    this.setState({
      showModal: true,
    })
  }

  render() {

    // map through values here to keep JSX in the render return less cluttered
    let numGens = ()=> {
      let items = this.state.numberGenerators
      if(items) {
         return items.map( (item, index) => {
          return <NumberGenerator
          name={item.name}
          howMany={item.children}
          min={item.minNumberRange}
          max={item.maxNumberRange}
          key={index}/>
        })
      }
    }

    // Throughout the app component tree, global classes may be used that reference
    // the app-style.css file, these classes are identified by the -gl suffix,
    // e.g. flex-container-gl
    return (
      <div className="app-wrapper border-box-gl flex-container-gl">
        <Header/>
        <Modal active={this.state.showModal} closeModal={this.closeModal}/>
        <section className="app-middle border-box-gl flex-container-gl">
          <AddOne openModal={this.openModal}/>
          {numGens()}
        </section>
        <Footer/>
      </div>
    )
  }
}

export default App
