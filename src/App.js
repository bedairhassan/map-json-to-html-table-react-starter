import React, { Component } from 'react';

const json = [
  
  {
    'id':'1',
    'description':'finishing tasks early'
  },{
    'id':'2',
    'description':'cleaning car early'
  }
]

const mystyle = {

  
    marginTop: "100px",
    marginBottom: "100px",
    marginRight: "950px",
    marginLeft: "80px"

}

class App extends Component {
  render() {
    return (
      <div style={mystyle}>
        {/* <h1 style={{textAlign:"center",fontWeight: "bold"}}>Table Example</h1> */}
<h1>Table Example</h1> 
<h6>Simple javascript map function for static data stored inside program</h6>
<h6>You can later add 'consume api call' at </h6>
<h6>
  <ul>
    <li>ComponentdidMount if you're using react</li>
    <li>useEffect if you are using react hooks</li>
  </ul>
</h6>
<br/>

        <table className="table">
    <thead>
      <tr>
        <th>id</th>
        <th>description</th>
      </tr>
    </thead>
    <tbody>
        {
          json.map(function(item,index){
            return (
              <tr key={index}>
                <td>{item.id}</td>
              <td>{item.description}</td>
              </tr>
              )
          })
        }
    </tbody>
  </table>
      </div>
    );
  }
}

export default App;
