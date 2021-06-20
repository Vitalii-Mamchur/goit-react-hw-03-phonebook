import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';

const Filter = ({ value, onChangeFilter }) => (
  <label className={styles.filter_label}>
    Find contacts by name
    <input
      className={styles.filter_input}
      type="text"
      value={value}
      onChange={e => {
        onChangeFilter(e.target.value);
      }}
    />
  </label>
);

Filter.prototype = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;
