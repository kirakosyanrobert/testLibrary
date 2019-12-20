import React, {Component} from 'react';
import './Home.css'
import Card from '../UI/Card/Card';
import Loader from '../UI/Loader/Loader';
import { connect } from 'react-redux';
import { showSignInAction } from '../../redux/modals/modalsAction';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            books: [],
        }
    }

    takeBook = (id, index) => {
        const currentUser = JSON.parse(sessionStorage.getItem('user'));
        if(!currentUser) {
            showSignInAction(this.props.showSignInAction(true));
            return;
        }


        let books = [...this.state.books];
        books[index].busy = true;
        books[index].userId = currentUser.Id;
        this.setState({books});
        localStorage.setItem('books', JSON.stringify(books));


        let users = JSON.parse(localStorage.getItem('users'));
        users.map(user => {
            if(user.id === currentUser.id) {
                user.books.push(id);
                currentUser.books.push(id);
            }
        });
        localStorage.setItem('users', JSON.stringify(users));
        sessionStorage.setItem('user', JSON.stringify(currentUser));
    }

    componentDidMount = () => {
        let books = JSON.parse(localStorage.getItem('books'));
        this.setState({books, loading: false});
    }

    render() {
        const {books, loading} = this.state;
        return (
            <section className="home__container">
                {
                    !loading 
                ? 
                    <React.Fragment>
                       {
                            books.map((book, index) => {
                                return <Card key={book.id} 
                                            book={book} 
                                            index={index} 
                                            take={this.takeBook}
                                        />
                            })
                       } 
                    </React.Fragment>
                      
                :
                    <Loader />
                }
            </section>
           
        )
    }
}

const dispatchToProps = dispatch => ({
    showSignInAction: (show) => dispatch(showSignInAction(show)),
})


export default connect(null, dispatchToProps)(Home);
