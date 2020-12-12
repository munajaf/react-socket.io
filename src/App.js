import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./index.css";
import Home from "./Home/Home";
import ChatRoom from "./ChatRoom/ChatRoom";
import NewChatRoom from "./ChatRoom/NewChatRoom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:roomId/:userId" component={ChatRoom} />
        <Route exact path="/:roomId/:userId/new" component={NewChatRoom} />
      </Switch>
    </Router>
  );
}

export default App;