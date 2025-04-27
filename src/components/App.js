// import React, { useState } from "react";

// const App = () => {
//   const [fields, setFields] = useState([{ name: "", age: "" }]);

//   // Input change handle karne ke liye
//   function handleInputChange(index, event) {
//     const { name, value } = event.target;
//     const newFields = [...fields];
//     newFields[index][name] = value;
//     setFields(newFields);
//   }

//   // Field add karne ke liye
//   function handleAddField() {
//     setFields([...fields, { name: "", age: "" }]);
//   }

//   // Field remove karne ke liye
//   function remove(index) {
//     const newFields = [...fields];
//     newFields.splice(index, 1); // 👈 slice nahi, splice use karna chahiye
//     setFields(newFields);
//   }

//   // Form submit karne ke liye
//   function handleSubmit(e) {
//     e.preventDefault(); // page reload se rokta hai
//     console.log("Form Data: ", fields);
//     console.log(fields.length);
//   }

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         {fields.map((field, index) => (
//           <div key={index}>
//             <input
//               type="text"
//               name="name"
//               placeholder="Name"
//               value={field.name}
//               onChange={(e) => handleInputChange(index, e)}
//             />
//             <input
//               type="text"
//               name="age"
//               placeholder="Age"
//               value={field.age}
//               onChange={(e) => handleInputChange(index, e)}
//             />
//             <button type="button" onClick={() => remove(index)}>
//               Remove
//             </button>
//             <br />
//           </div>
//         ))}

//         <button type="button" onClick={handleAddField}>
//           Add More...
//         </button>

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default App;

/// code to  pass all the test cases

import React from "react";
import './../styles/App.css';
import Dynamic from "./dynamic";

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <Dynamic />
    </div>
  )
}

export default App