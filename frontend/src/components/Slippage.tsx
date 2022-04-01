/**
 * A selector for slippage.
 */

import React from "react";
import "./Slippage.scss";

export interface Properties {
  onChange(value: number): void;
  value: number;
}

interface State {
  open: boolean;
}

const OPTIONS: { value: number; label: string}[] = [
    { value: 1, label: '0.1%'},
    { value: 5, label: '0.5%'},
    { value: 10, label: '1%'},
    { value: 50, label: '5%'},
];

export default class Slippage extends React.Component<Properties, State> {
  constructor(props: Properties) {
    super(props);
    this.state = { open: false };
  }

  render(): React.ReactNode {
    console.log(this.props.value);
    return (
      <div className="slippage">
        <p
          className="slippage_expand"
          onClick={() => this.setState({ open: !this.state.open })}
        >
          {this.state.open ? "Slippage ⯅" : "Slippage ⯆"}
        </p>
        {this.state.open ? (
          <React.Fragment>
            {OPTIONS.map(({value, label}) => {
                const checked: boolean = this.props.value === value;
                return (<label className={
                    checked ? 'slippage_option checked' : 'slippage_option'}>
                <input
                    key={value}
                    type="radio"
                    name={label}
                    value={value}
                    onChange={(val) =>
                    this.props.onChange(parseInt(val.target.value))
                    }
                    checked={checked}
                />
                {label}
                </label>);
            })}
          </React.Fragment>
        ) : null}
      </div>
    );
  }
}
