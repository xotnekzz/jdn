import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./style.css";
import Main from "main/main";
import NewVisit from "main/newVisit";
import About from "intro/about";
import New from "new/index";
import Worship from "worship/index";

// 사역
import Serve from "ministry/serve";
import Project from "ministry/project";
import Domitory from "ministry/domitory";
import Outreach from "ministry/outreach";
import VisionTrip from "ministry/visionTrip";

const App = () => {
  return (
    <BrowserRouter>
      {/* <Route exact path="/" component={Main}></Route> */}
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/newVisit" component={NewVisit} />
        <Route path="/about" component={About} />
        <Route path="/new" component={New} />
        <Route path="/worship" component={Worship} />
        <Route path="/ministry/serve" component={Serve} />
        <Route path="/ministry/project" component={Project} />
        <Route path="/ministry/domitory" component={Domitory} />
        <Route path="/ministry/outreach" component={Outreach} />
        <Route path="/ministry/visionTrip" component={VisionTrip} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
