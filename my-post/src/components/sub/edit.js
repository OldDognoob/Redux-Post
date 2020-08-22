import React from "react";
// import { connect } from "react-redux";

class EditItem extends React.Component {
  handleSubmitForEdit = (e) => {
    e.preventDefault();
    this.props.dispatch({
      type: "UPDATE_ITEM",
      item: {
        id: e.target.id.value,
        name: e.target.name.value,
        number: e.target.number.value,
      },
    });
    this.props.history.push("/");
  };

  render() {
    console.log(this.props);
    const [{ ...item }] = this.props.items.filter(
      (i) => i.id === this.props.match.params.id
    );
    // if(!item) return <p>No Item</p>
    return (
      <div>
        <h2>Edit Item</h2>
        <form onSubmit={this.handleSubmitForEdit}>
          <input type="text" name="id" defaultValue={item.id} />
          <br />
          <input type="text" name="name" defaultValue={item.name} />
          <br />
          <input type="text" name="number" defaultValue={item.number} />
          <br />
          <button type="submit" className="btn yellow darken-3">
            <i className="material-icons left">update</i>Update Item
          </button>
        </form>
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     items: state.items
//   };
// }

// export default connect()(EditItem);
export default EditItem;
