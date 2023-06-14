import React from "react"
import './mypost.css';

export  function Mypost() {
  return (
    <div className="form">
       <div className="form-body">
    <div>
      <h2>My Post</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Sl No</th>
            <th>Title</th>
            <th>Content</th>
            <th>Action</th>
          </tr>
          </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Post 1</td>
            <td>hhhhh</td>
            <td><button type="button">Update</button><br/><br/>
                <button type="button">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
    </div>
  )
}
export default Mypost