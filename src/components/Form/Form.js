import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './Form.module.css';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  formInputId = uuidv4();

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
    this.setState({ id: this.formInputId });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <form
        className={styles.form}
        id={this.formInputId}
        onSubmit={this.handleSubmit}
      >
        <label className={styles.form_libel}>
          Name
          <input
            className={styles.formInput}
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
            placeholder="Enter name"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>

        <label className={styles.formTitle}>
          Number
          <input
            className={styles.formInput}
            type="tel"
            value={this.state.number}
            onChange={this.handleChange}
            placeholder="Enter number"
            name="number"
            pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
            title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
            required
          />
        </label>

        <button className={styles.button} name="add" type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default Form;
