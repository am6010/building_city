import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Table from "./Table";

const stringCompare = (a, b) => a.localeCompare(b)
const numberCompare = (a, b) => a - b
const reverseNumberCompare = (a, b) => b - a

export default () => (
 <Router>
   <div>
   <Switch>
     <Route exact path="/" component={Table} />
     <Route exact path="/id" render={() => 
        <Table sortColumn={0} compare={numberCompare}/>} 
      />
     <Route exact path="/city" render={() => 
        <Table sortColumn={1} compare={stringCompare}/>} 
      />
      <Route exact path="/country" render={() => 
        <Table sortColumn={2} compare={stringCompare}/>} 
      />
      <Route exact path="/all_buildings" render={() => 
        <Table sortColumn={3} compare={reverseNumberCompare}/>} 
      />
      <Route exact path="/100m+" render={() => 
        <Table sortColumn={4} compare={reverseNumberCompare}/>} 
      />
      <Route exact path="/150m+" render={() => 
        <Table sortColumn={5} compare={reverseNumberCompare}/>} 
      />
      <Route exact path="/200m+" render={() => 
        <Table sortColumn={6} compare={reverseNumberCompare}/>} 
      />
      <Route exact path="/300m+" render={() => 
        <Table sortColumn={7} compare={reverseNumberCompare}/>} 
      />
      <Route exact path="/telecoms_towers" render={() => 
        <Table sortColumn={8} compare={reverseNumberCompare}/>} 
      />
      <Route exact path="/all_structures" render={() => 
        <Table sortColumn={9} compare={reverseNumberCompare}/>} 
      />
      <Route component={() => (<h2>Invalid URL Path</h2>)}/>
   </Switch>
   </div>
 </Router>
);