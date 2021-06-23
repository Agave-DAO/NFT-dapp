import React, { Component } from 'react';
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { setAddress, setNetworkId, setConnectType, setError } from "./redux/actions";
import { ThemeProvider } from 'styled-components';
import Layout from './layout';
import Nfts from './views/Nfts';
import MyDash from './views/MyDashboard';
import { providerUrl, Web3 } from "./utils/web3";
import 'react-notifications/lib/notifications.css';
import theme from './theme';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { updateBalance } from './utils/constants';

class App extends Component {
  constructor(props) {
    super(props);
    window.web3 = null;
    // modern broswers
    if (typeof window.ethereum !== "undefined") {
      window.web3 = new Web3(window.ethereum);
      window.web3.eth.net.getId((err, netId) => {
        console.log(netId)
        console.log(this.props.setErrorRequest(true))
        this.handleNetworkChanged(`${netId}`);
        window.ethereum.request({ method: 'eth_accounts' }).then(accounts => {
          if (accounts[0]) {
            this.props.setAddressRequest(accounts[0]);
            updateBalance(accounts[0]);
          }
        });
        window.ethereum.on("accountsChanged", (accounts) =>
          this.handleAddressChanged(accounts)
        );
        window.ethereum.on("networkChanged", (networkId) =>{
          console.log(networkId)
          this.handleNetworkChanged(networkId)
        });
        this.props.setConnectTypeRequest('metamask');
      });
    }

    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.web3 = null;
    }
  }

  handleAddressChanged = (accounts) => {
    if (typeof window.ethereum !== "undefined") {
      if (accounts[0]) {
        this.props.setAddressRequest(accounts[0]);
      } else {
        this.props.setAddressRequest(null);
        this.props.setNetworkIdRequest(null);
        this.props.setConnectTypeRequest('');        
      }
    }
  };

  handleNetworkChanged = (networkId) => {
    this.props.setNetworkIdRequest(networkId);
    switch (networkId) {
      case "1":
        if (String(providerUrl).includes("mainnet")) {
          this.props.setErrorRequest(false);
        } else {
          this.props.setErrorRequest(true);
        }
        break;
      case "4":
        if (String(providerUrl).includes("rinkeby")) {
          this.props.setErrorRequest(false);
        } else {
          this.props.setErrorRequest(true);
        }
        break;
      default:
        this.props.setErrorRequest(true);
    }
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <Layout>
            <Switch>
              <Route path="/nfts" component={Nfts} exact />
              <Route path="/my-dash" component={MyDash} exact />
              <Redirect from="/" to="/nfts" />
            </Switch>
          </Layout>
        </Router>
      </ThemeProvider>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setAddressRequest: (address) => dispatch(setAddress(address)),
    setNetworkIdRequest: (networkId) => dispatch(setNetworkId(networkId)),
    setConnectTypeRequest: (connectType) => dispatch(setConnectType(connectType)),
    setErrorRequest: (error) => dispatch(setError(error)),
  };
};

export default connect(null, mapDispatchToProps)(App);
