import React from "react";
import { connect } from "react-redux";

class Lists extends React.Component {
  delete = (e) => {
    const id = e.target.value;
    alert("Are you sure you want to delete?");
    this.props.dispatch({
      type: "DELETE_ITEM",
      id: id,
    });
  };

  edit = (e) => {
    const id = e.target.value;
    this.props.dispatch({
      type: "EDIT_ITEM",
      id: id,
    });
    console.log("this.props", this.props);
    this.props.history.push("/edit/" + id);
    //inig balik sa list
  };

  render() {
    console.log("list: ", this.props.items);
    return (
      <div>
        <h4 className="light-blue lighten-5">List</h4>
        <table border="1">
          <thead>
            <tr>
              <th> ITEM ID </th>
              <th> NAME OF ITEM </th>
              <th> NUMBER OF ITEMS </th>
              <th> ACTION </th>
            </tr>
          </thead>
          <tbody>
            {this.props.items.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.number}</td>
                  <td>
                    <button
                      className="btn orange waves-effect waves-light"
                      value={item.id}
                      onClick={this.edit}
                    >
                      <i className="material-icons left">edit</i>Edit
                    </button>{" "}
                    |{" "}
                    <button
                      className="btn red waves-effect waves-light"
                      value={item.id}
                      onClick={this.delete}
                    >
                      <i className="material-icons left">delete</i>Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.items,
  };
}

export default connect(mapStateToProps)(Lists);
