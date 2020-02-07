import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ApolloClient, HttpLink, InMemoryCache, ApolloLink } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

const httpLink = new HttpLink({ uri: 'https://cors-anywhere.herokuapp.com/https://graphql.volunteermatch.org/graphql' });

const authLink = new ApolloLink((operation, forward) => {
  // Retrieve the authorization token from local storage.
  // const token = localStorage.getItem('auth_token');

  // Use the setContext method to set the HTTP headers.
  operation.setContext({
    headers: {
      // authorization: token ? `Bearer ${token}` : '',
      'x-api-key': 'f423bb1de506857ee07d6c66510f88d4',
      // 'content-Type': 'application/json',
      // 'accept': 'application/json'
    }
  });

  // Call the next link in the middleware chain.
  return forward(operation);
});

const client = new ApolloClient({
  link: authLink.concat(httpLink), // Chain it with the HttpLink
  cache: new InMemoryCache()
});

// const httpLink = new HttpLink({uri: 'https://graphql.volunteermatch.org/graphql'})

// const options = {
//   headers: { 
//     'x-api-key': 'f423bb1de506857ee07d6c66510f88d4',
//     'content-Type': 'application/json',
//     'accept': 'application/json'
//   }
// };

// const client = new ApolloClient({
//     link: httpLink,
//     options: options,
//     cache: new InMemoryCache()
//   });

ReactDOM.render(
                <BrowserRouter>
                <ApolloProvider client={client}>                 
                    <App/>
                </ApolloProvider>
                </BrowserRouter>, 
                document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
