import React from "react";

function CreatePost() {
  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-md-8 m-auto">
          <a href="/dashadmin" class="btn btn-light">
            Go Back
          </a>
          <h1 class="display-4 text-center">Create post</h1>
          <p class="lead text-center">
            Let's get some information to make your blog post stand out
          </p>
          <small class="d-block pb-3">* = required field</small>
          <form action="">
            <div class="form-group">
              <input
                type="text"
                class="form-control form-control-lg"
                placeholder="* Post heading"
                name="handle"
                required
              />
              <small class="form-text text-muted">
                A heading for your post.
              </small>
            </div>

            <div class="form-group">
              <textarea
                class="form-control form-control-lg"
                placeholder="Description"
                name="bio"
              />
              <small class="form-text text-muted">
                Tell us a little about the post
              </small>
            </div>

            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fab fa-github" />
                </span>
              </div>
              <input
                type="text"
                class="form-control form-control-lg"
                placeholder="* Add gist link"
                name="gist"
              />
            </div>
            <input type="submit" class="btn btn-info btn-block mt-4" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
