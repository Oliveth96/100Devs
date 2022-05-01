import React from 'react';
import Header from './components/Header';
import axios from 'axios';

export default class huntApp extends React.Component {
    state ={ // To declare a state directly inside the class
        randomWords: [],
        isLoading: false,
        errorMsg: ''
    }; 

    componentDidMount() {
        this.setState({ isLoading: true}); // inside the componentDidMount method, we'll first set the isLoading state to true before making the API call
        axios
          .get('https://random-words-api.vercel.app/word')
          .then((response) => {
            this.setState({ randomWords: response.data.results, errorMsg: '' }); // we'll then store the result in the users array which was declared in the isLoading state
          })// I set the errorMsg empty, so that any previous errors will be cleared out.
          .catch((error) =>
            this.setState({
              errorMsg: 'Error while loading data. Try again later.' // we set the errorMsg in case there is any error while making an API call.
          })
          )
          .finally (() => {
              this.setState({ isLoading: false }); // using .finally to set isLoading state to false, helps me avoid code duplication.
          });
      }

    render (){ //
        const { randomWords, isLoading, errorMsg } = this.state;
        console.log(randomWords);
      return (
        <div className = "main">
          <header />
          {isLoading && <p className = "loading"> Loading ...</p>}
          {errorMsg && <p className = "errorMsg"> {errorMsg}</p>}
        </div>
      );
    }
  }





  