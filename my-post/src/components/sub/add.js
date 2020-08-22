import React from "react";
import { connect } from "react-redux";

class AddItem extends React.Component {
  state = {
    item: {
      id: "",
      name: "",
      number: 0,
    },
  };

  handleSubmitForAdd = (e) => {
    e.preventDefault();
    const { item } = this.state;
    console.log("item");
    this.props.dispatch({
      type: "ADD_ITEM",
      item,
    });
    this.props.history.push("/");
  };

  handleInputChange = (e) => {
    const { item } = this.state;
    this.setState({
      item: {
        ...item,
        [e.target.name]: e.target.value,
      },
    });
  };
  render() {
    console.log("props:", this.props);

    return (
      <div>
        <h2>Add an Item</h2>
        <form onSubmit={this.handleSubmitForAdd}>
          <input
            required
            type="text"
            name="id"
            placeholder="Id"
            onChange={this.handleInputChange}
            value={this.props.id}
          />
          <br />
          <input
            required
            type="text"
            name="name"
            placeholder="Name"
            onChange={this.handleInputChange}
            value={this.props.name}
          />
          <br />
          <input
            required
            type="text"
            name="number"
            placeholder="Number of Items"
            onChange={this.handleInputChange}
            value={this.props.number}
          />
          <br />
          <button type="submit" className="btn waves-effect waves-light">
            <i className="material-icons left">add</i>Add Item
          </button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.items,
  };
}

export default connect(mapStateToProps)(AddItem);
