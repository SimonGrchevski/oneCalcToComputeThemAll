import PropTypes from 'prop-types';
import React from 'react';
import Button from './Button';

export default class ButtonList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { buttons } = this.props;
    const btns = buttons.map((btn) => (
      <li key={btn.content}>
        <Button
          value={btn.content}
          className={btn.className}
        />
      </li>
    ));
    return (
      <ul className="btn-list flex">
        {btns}
      </ul>
    );
  }
}

ButtonList.propTypes = {
  buttons: PropTypes.instanceOf(Array).isRequired,
};