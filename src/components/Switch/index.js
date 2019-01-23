import React, { Component } from "react";
import { SwitchView } from "./SwitchView";
import { LayoutContext, themesConstants } from "../Layout/LayoutContext";

class Switch extends Component {
  state = {
    selected: 0
  };

  // 0 => normal
  // 1 => dark
  // 2 => other?

  handleClick = themeToggle => {
    this.setState(
      prevState => ({
        selected: (prevState.selected + 1) % 3
      }),
      () => themeToggle(themesConstants[this.state.selected])
    );
  };

  render() {
    const { selected } = this.state;

    return (
      <LayoutContext.Consumer>
        {({ themeToggle }) => (
          <SwitchView
            selected={selected}
            handleClick={() => this.handleClick(themeToggle)}
            {...this.props}
          />
        )}
      </LayoutContext.Consumer>
    );
  }
}

export default Switch;
