import React from 'react';
import { connect } from 'react-redux';
import ConnectedTodos from './Todos';
import ConnectedGoals from './Goals';
import { handleInitialData, handleFetchData, refreshData } from '../actions/shared';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';

class App extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    console.log("App mounted");
    dispatch(handleInitialData());
  }
  
  refreshData = () => {
    const { dispatch } = this.props;
    dispatch(refreshData());
    dispatch(handleFetchData());
  }

  render() {
    console.log("App rendered??");
    if (this.props.loading === true) {
      return(
        <h2>Loading...</h2>
      );
    }

    return(
      <div>
        <ConnectedTodos />
        <ConnectedGoals />
        <Button id="btn-refresh" color="primary" outline onClick={() => this.refreshData()}>Refresh Data</Button>
      </div>
    );
  }
}

export default connect((state) => ({
  loading: state.loading
}))(App);