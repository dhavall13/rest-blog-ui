import React from "react";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createBrowserHistory } from "history";
import PostList from "./containers/PostList";
import PostDetail from "./containers/PostDetail";
import PostCreate from "./containers/PostCreate";
import PostUpdate from "./containers/PostUpdate";
import PostDelete from "./containers/PostDelete";
import Layout from "./containers/Layout";

const history = createBrowserHistory();

function App() {
  return (
    <BrowserRouter history={history}>
      <Layout>
        <Routes>
          <Route exact path="/" element={<PostList />} />
          <Route path="/create" element={<PostCreate />} />
          <Route path="/post/:postSlug" element={<PostDetail />} />
          <Route path="/post/:postSlug/update" element={<PostUpdate />} />
          <Route path="/post/:postSlug/delete" element={<PostDelete />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
