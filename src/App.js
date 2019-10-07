import React, { Component } from "react";

const mystyle = {
  marginTop: "100px",
  marginBottom: "100px",
  marginRight: "950px",
  marginLeft: "80px"
};

class App extends Component {

  

  

  constructor(props) {
    super(props);

    this.state = {
      json: [
        {
          id: "1",
          description: "finishing tasks early"
        },
        {
          id: "2",
          description: "cleaning car early"
        },{
          id:'3',
          description:'buy school supplies'
        }
      ],
      id:'',
      description:'',
      warning:[]
    };

    // this.validate=this.validate.bind(this)
  }

  render() {
    return (
      <div style={mystyle}>
        {/* <h1 style={{textAlign:"center",fontWeight: "bold"}}>Table Example</h1> */}
        <h1>Table Example</h1>
        <h6>
          Simple javascript map function for static data stored inside program
        </h6>
        <h6>You can later add 'consume api call' at </h6>
        <h6>
          <ul>
            <li>ComponentdidMount if you're using react</li>
            <li>useEffect if you are using react hooks</li>
          </ul>
        </h6>
        <br />
        

        <table className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>description</th>
            </tr>
          </thead>
          <tbody>
            {this.state.json.map((item, index) =>{
              return (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.description}</td>
                  <td><button className="btn btn-danger" onClick={()=>{
                    

                    var filtered=[]
                    var guest_id=item.id
                    
    // console.log('index guest is ',guest_id)
    // console.log('json is ',this.state.json)
  
    //console.log('index guest is ',index_guest)
  
    for(var k=0;k<this.state.json.length;k++){
  
      if(!(this.state.json[k].id===guest_id)){
  
        filtered.push(this.state.json[k])
      } 
    }
  
    // console.log('filtered is ',filtered)
    this.setState({json:[...filtered]})


                  }}>Delete</button></td>
                </tr>
              );
            })}

<tr>
                  <td><input placeholder='enter id' id='id'
                  onChange={(e)=>{this.setState({id:e.target.value})}}
                  value={parseInt(this.state.json[this.state.json.length-1].id)+1}
                  disabled/></td>
                  <td><input placeholder='enter description' id='description'onChange={(e)=>{this.setState({description:e.target.value})
                
        
                }}/></td>
                  <td><button className="btn btn-light" onClick={()=>{
                    //this.state.json.push({id:this.state.id,description:this.state.description})
                   


// validation
if(this.state.id===''&&this.state.description===''){

  let q = [...this.state.warning]
  if(this.state.warning.includes('empty textbox')===false){
    q.push('empty textbox')
  }

  this.setState({warning:q})
  return;
}




// success
this.setState({warning:[]})

let finale_id=this.state.json[this.state.json.length-1].id
// let your_id=this.state.id
let your_id=parseInt(finale_id)+1
this.setState({id:your_id})
// console.log('finale id is ',finale_id)
// console.log('your id is ',your_id)

                    this.setState({json: [...this.state.json,{id:your_id,description:this.state.description}]})
                    

                    // empty textboxes
document.getElementById('id').value=''
document.getElementById('description').value=''

// empty variables
this.setState({id:''})
this.setState({description:''})

// console.log(this.state.json)
                    }} style={{fontWeight:"bold"}}>Submit</button></td>
                </tr>
          </tbody>
        </table>

        <br/>

        <h3>Warnings here:</h3>
        {
          <ul>
            {
              this.state.warning.map(function(name,index){

                return <li key={index}>{name}</li>
              })
            }
          </ul>
        }
      </div>
    );
  }
}

export default App;
