import React, { Component } from 'react';
import axios from 'axios';
import style from '../styles/App.css'

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
          <div className={style.gridContainer}>
            <div className={style.totalizer}>
              <div className={style.customerReviews}>Customer reviews</div>
              <div className={style.topCostumer}>Top customer reviews</div>
            </div>
            <div className={style.mostRecent}>
              <div className={style.customerImages}>
                <div className={style.imagesTitle}>Customer images</div>
                <div className={style.imageContainer}>
                  <img className={style.imageDisplay} src="https://s3.amazonaws.com/uifaces/faces/twitter/panghal0/128.jpg" alt="Avatar"/>
                  <img className={style.imageDisplay} src="https://s3.amazonaws.com/uifaces/faces/twitter/panghal0/128.jpg" alt="Avatar"/>
                  <img className={style.imageDisplay} src="https://s3.amazonaws.com/uifaces/faces/twitter/panghal0/128.jpg" alt="Avatar"/>
                  <img className={style.imageDisplay} src="https://s3.amazonaws.com/uifaces/faces/twitter/panghal0/128.jpg" alt="Avatar"/>
                </div>
              </div>
              <div className={style.recentReviews}>
                <div className={style.recentTitle}>Most recent customer reviews</div>
                <div className={style.review}>
                  <div className={style.avatarHolder}>
                    <img className={style.avatarImage} src="https://s3.amazonaws.com/uifaces/faces/twitter/panghal0/128.jpg" alt="Avatar"/>
                    <text className={style.avatarUsername}>Mario Santamaria</text>
                  </div>
                  <div className={style.reviewData}>
                    <a className={style.reviewText}>I love it! I use it to play music and I also use it to turn on/off my Sengled Smart Bulb.I don't know why I waited so long to get one of these, but I will be ordering one for my parent's home also.</a>

                  </div>
                </div>
              </div>
              <div className={style.search}>
                Search customer reviews
                <form>
                  <input className={style.searchReviews} type="text" name="search"/>
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