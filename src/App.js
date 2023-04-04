import logo from './logo.svg';
import './App.css';
import { useState, useEffect, useRef } from 'react'
//import { Button, Comment, Form } from 'semantic-ui-react'
//import { Stack, Form, Button, Alert, Nav, Navbar, Container, NavDropdown, Offcanvas } from "react-bootstrap"


function App() {
const [name, setName] = useState ("");
const [names, setNames] = useState ([]);
const [comment, setComment] = useState ("");
const [comments, setComments] = useState ([]);

const [state, setState] = useState({
  name: "",
  comment: ""
});

const onChangeHandler = (e) => {
  setComment(e.target.value);
};

const onChangeHandler2 = (e) => {
  setName(e.target.value);
};



const onClickHandler = () => {
  setNames((names) => [...names, name]);
  setComments((comments) => [...comments, comment]);

}

const myList = names.map((item) => <p>{item}</p>)

const onClickHandler2 = () => {
  // <div>
  //     <label> Enter comment:
  //     <br></br>
  //     <textarea value={comment} onChange={onChangeHandler}/>
  //     <br></br>
  //    </label>
  //    <button onClick={onClickHandler}>Submit</button>
  // </div>
alert("Hello there!");
<div>
  <textarea>Some text here..</textarea>
</div>


}


// const onReplyClick = () => {
//   console.log("Hello");
// //   <div>
// // <fieldset>
// //   <label> Enter comment:
// //       <br></br>
// //       <textarea value={comment} onChange={onChangeHandler}/>
// //       <br></br>
// //      </label>
// //      <button onClick={onClickHandler}>Submit</button>
// //      </fieldset>
// //      </div>
// }

  return (
    //take out main container?
    <div className="App-header">
     
      <div>
        <h1 className='App'>Welcome Guest!</h1>   
        <h2 className='App'> This is the comment section. Be our guest and make a comment!</h2>
        <h2 className='App'> After making your first comment you can either reply, edit, or 
            delete your comment.
        </h2>
      
      <div className='wrapper'>
        <fieldset>
      <label> Enter name:
      <br></br>
      <input type="text" value={name} onChange={onChangeHandler2} required/>
      {/* <input type="text" value={name} onChange={onChangeHandler}/> */}
      {/* <textarea value={comment} onChange={onChangeHandler}/> */}
      <br></br>
     </label>

     <label> Enter comment:
      <br></br>
      <textarea value={comment} onChange={onChangeHandler}/>
      <br></br>
     </label>
     <button onClick={onClickHandler}>Submit</button>
     </fieldset>
     </div>
      
      
     {/* {names.map((input) => (
        <div> <p> Name: {input}</p></div>
      ))}   */}
      {/* comments will appear below */}
        {comments.map((text2) => (
         
        <div className='wrapper'>
        <fieldset>
          <p>
            
            Name: {myList}
          </p>
        <p> Comment: {text2} </p> 
        <button onClick={onClickHandler2}>Reply</button>
        <t> </t>
        <button>Edit</button>
        <t> </t>
        <button>Delete</button>
        </fieldset>
        
        </div>

      ))}

      </div>
    </div>
  );
}

export default App;
