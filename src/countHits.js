import { Component } from "react";

const countHits = (WrappedComponent) => {
  class CountHits extends Component {
    state = {
      hits: 0,
    };
    addOne = () => {
      this.setState((prevstate) => {
        return { hits: prevstate.hits + 1 };
      });
    };

    componentDidUpdate(prevProps, prevState) {
      if (this.state !== prevState) {
        const CompName = WrappedComponent.name;
        this.props.reduceHandler(CompName);
      }
    }
    render() {
      return (
        <WrappedComponent
          {...this.props}
          addOneHit={this.addOne}
          hocState={this.state}
        />
      );
    }
  }
  return CountHits;
};

export default countHits;
