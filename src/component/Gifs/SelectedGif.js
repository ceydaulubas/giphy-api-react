import React, { Component } from "react";

class SelectedGif extends Component {
  state = {
    selectedGifResult: "",
  };

  componentDidMount() {
    this.setState({ ...this.state, selectedGifResult: this.props.selected });
  }

  //updates the selectedGifResult state in component.
  componentDidUpdate(prevProps) {
    if (this.props.selected !== prevProps.selected) {
      this.setState({ ...this.state, selectedGifResult: this.props.selected });
    }
  }

  componentWillUnmount() {
    alert(`Selected Gif will be removed!`);
  }

  render() {
    return (
      <div className="gif-selected">
        {this.state.selectedGifResult && (
          <img
            src={this.state.selectedGifResult.downsized_large.url}
            alt="gif"
          />
        )}
      </div>
    );
  }
}

export default SelectedGif;
