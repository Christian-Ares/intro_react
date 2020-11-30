import './App.css';
import Header from './components/Header'
import Greet from './components/Greet'
import React from 'react'
import Card from './components/Card';

class App extends React.Component {

  user = {
    username: "jaimejacobo",
    email: "jaime@jaime.com",
    avatar: "https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=800&h=661&q=70&fm=webp"
  }

  user1 = {
    username: "pedropedro",
    email: "pedro@pedro.com",
    avatar: "https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=800&h=661&q=70&fm=webp"
  }

  user2 = {
    username: "pablopablo",
    email: "pablo@pablo.com",
    avatar: "https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=800&h=661&q=70&fm=webp"
  }

  checkForAvatar = ()=>{
    if(this.user.avatar){
      return <img src={this.user.avatar} alt={this.user.username}/>
    }else{
      return <img src="https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" alt="Default user"/>
    }
  }

  render(){
      return (
        <div className="App">
        <Header/>
        <Greet name={this.user.email} username={this.user.username} />
        {/* {this.checkForAvatar()}
        <p>{this.user.username === 'jaimejacobo' ? 'Welcome teacher!' : 'Welcome student'}</p> */}
        <Card username={this.user.username} source={this.user.avatar} />
        <Card username={this.user1.username} source={this.user1.avatar} />
        <Card username={this.user2.username} source={this.user2.avatar} />
      </div>
    );
  }
}

export default App;
