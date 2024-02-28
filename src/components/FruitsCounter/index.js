// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {
    mangoes: 0,
    bananas: 0,
  }
  eatMangoes = () => {
    const {mangoes, bananas} = this.state
    this.setState(prevMangoes => ({
      mangoes: prevMangoes.mangoes + 1,
      bananas: bananas,
    }))
  }
  eatBananas = () => {
    const {mangoes, bananas} = this.state
    this.setState(prevbananas => ({
      mangoes: mangoes,
      bananas: prevbananas.bananas + 1,
    }))
  }

  render() {
    const {mangoes, bananas} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1>
            Bob ate {mangoes} mangoes {bananas} bananas
          </h1>
          <div className="image-container">
            <div className="mango-card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="image"
              />
              <button onClick={this.eatMangoes}>Eat Mango</button>
            </div>
            <div className="mango-card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="image"
              />
              <button onClick={this.eatBananas}>Eat Banana</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
