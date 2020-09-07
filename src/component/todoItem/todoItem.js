import React, { Fragment } from "react";
import "./todoItem.css";

const TodoItem = (props) => {
  const { data, deleteI } = props;
  let lenght = data.length;

  const todo = lenght ? (
    data.map((item) => {
      return (
        <tr key={item.id}>
          <td>{item.name}</td>
          <td>{item.age}</td>
          <td className="del" onClick={() => deleteI(item.id)}> X </td>
        </tr>
      );
    })
  ) : (
    <h5 className="t-color">There is no item ,please add item </h5>
  );

  return (
    <Fragment>
      <thead className="perant-title">
        <tr className="title">
        <th >Name</th>
        <th >Number</th>
        <th >Delete</th>
        </tr>
      </thead>
      <tbody>

      {todo}
      </tbody>
    </Fragment>
  );
};
export default TodoItem;
