import React from "react";

function Dashboard() {
  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-md-12">
          <h1 class="display-4">Dashboard</h1>
          <p class="lead text-muted">Welcome admin</p>
          <div class="btn-group mb-4" role="group">
            <a href="dashadmin/create" class="btn btn-light">
              <i class="fa fa-plus text-info mr-1" />
              Create Post
            </a>
          </div>
          <div>
            <h4 class="mb-2">Blog posts</h4>
            <table class="table">
              <thead>
                <tr>
                  <th>Blog title</th>
                  <th>Time created</th>
                  <th />
                  <th />
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Tech Guy Web Solutions</td>
                  <td>{new Date().toDateString()}</td>
                  <td>
                    <button class="btn btn-info">Edit</button>
                  </td>
                  <td>
                    <button class="btn btn-danger">Delete</button>
                  </td>
                </tr>
                <tr>
                  <td>Sort Array using Javascript es6 method</td>
                  <td>{new Date().toDateString()}</td>
                  <td>
                    <button class="btn btn-info">Edit</button>
                  </td>
                  <td>
                    <button class="btn btn-danger">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
