import React, { Component, createContext } from "react";
import createAuth0Client from "@auth0/auth0-spa-js";

// create the context
export const Auth0Context = createContext();

// create a provider
export class Auth0Provider extends Component {
  state = {
    auth0Client: null,
    isLoading: true,
    isAuthenticated: false,
    user: null,
  };
  config = {
    domain: process.env.REACT_APP_AUTH0_DOMAIN,
    client_id: process.env.REACT_APP_AUTH0_CLIENT_ID,
    redirect_uri: window.location.origin,
  };

  handleRedirectCallback = async () => {
    this.setState({ loading: true });
    await this.state.auth0Client.handleRedirectCallback();
    const user = this.state.auth0Client.getUser();
    this.setState({ user, isAuthenticated: true, isLoading: false });
    window.history.replaceState({}, document.title, window.location.pathName)
  };

  initializeAuth0 = async () => {
    const auth0Client = await createAuth0Client(this.config);
    const isAuthenticated = await auth0Client.isAuthenticated();
    const user = isAuthenticated ? await auth0Client.getUser() : null;

    if (window.location.search.includes("code=")) {
      return this.handleRedirectCallback();
    }

    this.setState({ auth0Client, isLoading: false, isAuthenticated, user });
  };

  componentDidMount() {
    this.initializeAuth0();
  }

  render() {
    const { children } = this.props;
    const { isLoading, isAuthenticated, user, auth0Client } = this.state;
    const configObject = {
      isLoading,
      isAuthenticated,
      user,
      auth0Client,
      loginWithRedirect: (...p) => auth0Client.loginWithRedirect(...p),
      getTokenSilently: (...p) => auth0Client.getTokenSilently(...p),
      getIdTokenClaims: (...p) => auth0Client.getIdTokenClaims(...p),
      logout: (...p) => auth0Client.logout(...p),
    };

    return (
      <Auth0Context.Provider value={configObject}>
        {children}
      </Auth0Context.Provider>
    );
  }
}
