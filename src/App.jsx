import { useState } from "react";

function App() {
  const titleSection = "";
  const articleList = [];

  return (
    <>
      <div className="container">
        <form>
          <h2>My blog</h2>
          <div className="row">
            <div className="col-4">
              <label className="form-label" htmlFor="post-title">
                Title
              </label>
              <input
                type="text"
                className="form-controll mb-2"
                id="post-title"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
