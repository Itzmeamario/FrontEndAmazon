import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      itemId: '5b56129c6c1182305c88898f'
    }

    axios.get('/api/customer-reviews/items', {
      params: {
        itemId: this.state.itemId
      }
    })
    .then((item) => {
      console.log(item.data);
    })
    .catch(error => console.error('error fetching item:', error));
  }

  render() {
    return (
      <div>
        <hr/>
          <div className="grid-container">
            <div className="totalizer">
              <div className="customerReviews">Customer reviews</div>
              <div className="topCostumer">Top customer reviews</div>
            </div>
            <div className="mostRecent">
              <div className="customerImages">
                Customer images
              </div>
              <div className="recentReviews">
                Most recent customer reviews
                <div className="review">
                  <div className="avatarHolder">
                    <img className="avatarImage" src="https://s3.amazonaws.com/uifaces/faces/twitter/panghal0/128.jpg" alt="Avatar"/>
                    <text className="avatarUsername">Mario Santamaria</text>
                  </div>
                  <div className="reviewData">
                    <a className="reviewText">I love it! I use it to play music and I also use it to turn on/off my Sengled Smart Bulb.I don't know why I waited so long to get one of these, but I will be ordering one for my parent's home also.</a>
                  </div>
                </div>
              </div>
              <div className="search">
                Search customer reviews
                <form>
                  <input className="searchReviews" type="text" name="search"/>
                </form>
              </div>
            </div>
          </div>
        <hr/>
      </div>
    );
  }
}

export default App;