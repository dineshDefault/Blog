import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import CreateBlog from "./pages/CreateBlog";
import EditBlog from "./pages/EditBlog";
import BlogDetails from "./pages/BlogDetails";
import NotFound from "./pages/NotFound";
import BlogsListProvider from "./store/BlogsListProvider";
import HighlightedWordsList from "./pages/HighlightedWordsList";
import BlogsListByHighlightedWords from "./pages/BlogsListByHighlightedWords";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <BlogsListProvider>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/create">
                <CreateBlog />
              </Route>
              <Route path="/edit">
                <EditBlog />
              </Route>
              <Route path="/highlighted-words">
                <HighlightedWordsList />
              </Route>
              <Route path="/blogs-highlighted-words">
                <BlogsListByHighlightedWords />
              </Route>
              <Route path="/blogs/:id">
                <BlogDetails />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </BlogsListProvider>
        </div>
      </div>
    </Router>
  );
}

export default App;
