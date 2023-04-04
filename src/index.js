
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { useState} from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// function MyForm() {
//   const [name, setName] = useState("");
//   const [comment, setComment] = useState("");
//   const [textarea, setTextarea] = useState("");

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // document.write(`User: ${name}`)
//     // document.write(`Comment: ${comment}`)
//     // document.getElementById('name').innerHTML;
//     // document.getElementById('comment').innerHTML;

//     //for memory purposes
//     console.log({name});
//     console.log({comment});
//   }


//   return (
//     <div className="wrapper"> 
//     <form onSubmit={handleSubmit}>
//     <h1>Welcome Guest!</h1>   
//     <h2> This is the comment section. Please make a comment.</h2>
//     <h2> After making your first comment you can either reply, edit, or 
//     delete your comment.
//     </h2>
//     <fieldset>
//       <label>Enter your name:
//       <br/>
//         <t> </t>
//         <input
//           type="text" 
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//       </label>
//       <br></br>
//       <br></br>
//       <label>Enter your comment:
//       <br/>
//          {/* <input
//           type="text" 
//           value={comment}
//           onChange={(e) => setComment(e.target.value)}
//         />  */}
//         <textarea value={comment} onChange={(e) => setComment(e.target.value)}/>
//       </label>

//       <br/>
//       </fieldset>
//        <input type="submit" /> 
//     </form>
//     </div>
//   )
// }

// // const myFirstElement = (
// //   <form id='details'>
// // <div>
// //   <h1>Welcome Guest!</h1>
// //   <h2> This is the comment section. Please make a comment.</h2>
// //   <h2> After making your first comment you can either reply, edit, or 
// //     delete your comment.
// //   </h2>
// // <input type="text" placeholder='Name' id='Name'/>
// // <br></br>
// // <input type="text" placeholder='Comment' id='Comment'/>
// // <br></br>
// // <input type="button" value="Submit Comment" />
// // {/* <input type="text" placeholder="Enter something..." id="inputData" />
// //   <input type="submit" />
// // <h1 id="valueHolder"></h1> */}
// // </div>

// // </form>





// //  );





// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyForm />);
// // root.render(firstInput);
// // root.render(
// //   <React.StrictMode>
// //     <App />
// //   </React.StrictMode>
// // );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
