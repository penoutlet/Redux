import React, { Component } from 'React';
import { connect } from 'react-redux'; // this allows you to forge a connection between a react component and redux. This turns the
// component into a 'container'.
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';
import rootReducer from '../reducers/index.js';

 class BookList extends Component {
  renderList(){
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item"> {book.title}
          onClick={()=> this.props.selectBook(book)}</li>

      )

    });
  }

  render() {
    return (
      <ul className="list_group col-sm-4">
      {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  // whatever is returned here turns into a prop in the BookList component
  return {
  books: state.books
 };
}
// Anything returned from this function will end up as mapStateToProps
// on the BookList containers
function mapDispatchToProps(dispatch){
  return bindActionCreators({ selectBook: selectBook }, dispatch)
}

// proomote BookList from a component to a container - it needs to know about this new dispatch method, selecctBook. Make it available
// as a prop
export default connect(mapStateToProps)(BookList)
