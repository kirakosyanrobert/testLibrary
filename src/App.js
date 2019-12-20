import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import books from './Data/books';
import users from './Data/users';
import SignUpModal from './Components/UI/SignUp/SignUp';
import SignInModal from './Components/UI/SignIn/SignIn';


class App extends React.Component {
  constructor(props) {
    super(props);
    if(!localStorage.getItem('books')) {
      localStorage.setItem('books', JSON.stringify(books))
    }
    if(!localStorage.getItem('users')) {
      localStorage.setItem('users', JSON.stringify(users))
    }
  }


  render() {
    return (
      <div>
        <Header />
        <Home />

        <SignInModal />
        <SignUpModal />
      </div>
    );
  }
}

export default App;
