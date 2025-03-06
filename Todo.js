import React, { useState } from 'react'

function Todo() {
    const [name  , setname ] = useState("")
    const [task  , settask ] = useState([])

    function handel(){
        settask((x)=>(
            [...x ,{ name: name ,  check : false}]
        ))
        setname("")
    }
    function del(index){
            settask((x)=>(
                x.filter((_ , i)=>(
                    i != index
                ))
            ))
    }

    function Edit(index){
        const a = prompt("EDIT YOUR TEXT")
        settask((x)=>(
            x.map((item , i)=>(
                index == i ? {...item , name : a} : item
            ))
        ))
    }
    function checking(e){
        settask((x)=>(
            x.map((item , i)=>(
                e == i ?  {...item , check : !item.check} : item
            ))
        ))
    }
    function start(e, index){
        e.dataTransfer.setData("index" , index)
    }
    function DropHandel(e , index){
        const a = [...task]
        const b = e.dataTransfer.getData("index" , index)
        const[c]= a.splice(b , 1)
        a.splice(index , 0 , c)
        settask(a)
    }

  return (
    <div>
     <h3>
        Enter your Name : <input value={name} onChange={((e)=>(setname(e.target.value)))}/><button onClick={handel}>click</button>
     </h3>
     {
        task.map((item , index)=>(
            <h3 key={index}
            style={{textDecoration : item.check ? "line-through" : "none"}}
            draggable
            onDragStart={(e)=>start(e, index)}
            onDragOver={(e)=>e.preventDefault()}
            onDrop={(e)=>DropHandel(e, index)}
            >
                <input
                type='checkbox'
                checked= {item.check}
                onChange={()=>checking(index)}
                />
                {item.name}
                <br/>
                <button onClick={()=>del(index)}>Delete</button><button onClick={()=>Edit(index)}>Edit</button>
            </h3>
        ))
     }
    </div>
  )
}

export default Todo














// import React from 'react'

// function Todo() {
//   return (
//     <div>
//       jhfsdgj
//     </div>
//   )
// }

// export default Todo


// import { useState } from "react";

// const personicon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAA...";
// const emailicon = personicon; 
// const passwordicon = personicon;

// const Loginsignup = () => {
//   const [action, setAction] = useState("Sign Up");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [isFirstLoginClick, setIsFirstLoginClick] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (action === "Login") {
//       if (!isFirstLoginClick) {
//         setIsFirstLoginClick(true);
//         return;
//       }
//     }
//     if (!email && !password) {
//       setError("Fill Out All Fields");
//       return;
//     }

//     console.log("Login Details:", { email, password });
//     setEmail("");
//     setError("");
//     setPassword("");
//     setIsFirstLoginClick(false);
//   };

//   return (
//     <form className="container" onSubmit={handleSubmit}>
//       <div className="header">
//         <div className="text">{action}</div>
//         <div className="underline"></div>
//       </div>
//       <div className="inputs">
//         {action === "Login" ? null : (
//           <div className="input">
//             <img src={personicon} alt="" />
//             <input type="text" placeholder="Enter Your Name" />
//           </div>
//         )}
//         <div className="input">
//           <img src={emailicon} alt="" />
//           <input
//             // type="email"
//             placeholder="Enter Your Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <div className="input">
//           <img src={passwordicon} alt="" />
//           <input
//             type="password"
//             placeholder="Enter Your Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         {action === "Sign Up" ? null : error && <div className="error-message">{error}</div>}
//       </div>
//       <div className="forget-container">
//         {action === "Sign Up" ? null : <div className="lostpass">Lost Password? <span>Click Here!</span></div>}
//       </div>
//       <div className="submit-container">
//         <div className={action === "Login" ? "submit grey" : "submit"} onClick={() => { setAction("Sign Up"); setIsFirstLoginClick(false); setError(""); }}>Sign Up</div>
//         <button className={action === "Sign Up" ? "submit grey" : "submit"} onClick={() => {
//           if (action === "Login") setIsFirstLoginClick(true);
//           setAction("Login");
//         }} type="submit">Login</button>
//       </div>
//     </form>
//   );
// };

// export default Loginsignup;


// import { useState } from "react";

// const LoginSignup = () => {
//   const [action, setAction] = useState("Login");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!email || !password) {
//       setError("Fill out all fields");
//       return;
//     }
//     console.log("Login Details:", { email, password });
//     setEmail("");
//     setPassword("");
//     setError("");
//   };

//   return (
//     <div style={styles.container}>
//       <form style={styles.formBox} onSubmit={handleSubmit}>
//         <h2>{action}</h2>
//         <div style={styles.inputBox}>
//           <input
//             type="email"
//             placeholder="Enter Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             style={styles.input}
//           />
//         </div>
//         <div style={styles.inputBox}>
//           <input
//             type="password"
//             placeholder="Enter Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             style={styles.input}
//           />
//         </div>
//         {error && <div style={styles.error}>{error}</div>}
//         <button type="submit" style={styles.button}>{action}</button>
//         <div style={styles.toggle}>
//           {action === "Login" ? (
//             <p>
//               Don't have an account?{" "}
//               <span onClick={() => setAction("Sign Up")} style={styles.link}>Sign Up</span>
//             </p>
//           ) : (
//             <p>
//               Already have an account?{" "}
//               <span onClick={() => setAction("Login")} style={styles.link}>Login</span>
//             </p>
//           )}
//         </div>
//       </form>
//     </div>
//   );
// };

// // Inline CSS styles
// const styles = {
//   container: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     height: "100vh",
//     backgroundColor: "#f4f4f4",
//   },
//   formBox: {
//     width: "100%",
//     maxWidth: "350px",
//     background: "white",
//     padding: "20px",
//     borderRadius: "8px",
//     boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
//     textAlign: "center",
//   },
//   inputBox: {
//     marginBottom: "15px",
//   },
//   input: {
//     width: "100%",
//     padding: "10px",
//     border: "1px solid #ccc",
//     borderRadius: "5px",
//   },
//   error: {
//     color: "red",
//     fontSize: "14px",
//     marginBottom: "10px",
//   },
//   button: {
//     width: "100%",
//     padding: "10px",
//     backgroundColor: "#007bff",
//     color: "white",
//     border: "none",
//     borderRadius: "5px",
//     cursor: "pointer",
//   },
//   toggle: {
//     marginTop: "10px",
//   },
//   link: {
//     color: "#007bff",
//     cursor: "pointer",
//   },
// };

// export default LoginSignup;


// import React, { useState } from "react";

// const App = () => {
//   return (
//     <div>
//       <Navbar />
//       <LoginPage />
//       <WebsiteLayout />
//       <AdminDashboard />
//     </div>
//   );
// };

// // 1️⃣ Responsive Login Page Component
// const LoginPage = () => {
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
//         <form>
//           <input
//             type="email"
//             placeholder="Email"
//             className="w-full p-2 mb-4 border rounded"
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             className="w-full p-2 mb-4 border rounded"
//           />
//           <button className="w-full bg-blue-500 text-white p-2 rounded">Login</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// // 2️⃣ Responsive Website Layout
// const WebsiteLayout = () => {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 min-h-screen">
//       <aside className="bg-gray-800 text-white p-4 md:col-span-1">Sidebar</aside>
//       <main className="bg-gray-200 p-4 md:col-span-2">Main Content</main>
//     </div>
//   );
// };

// // 3️⃣ Responsive Admin Dashboard
// const AdminDashboard = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <div className="flex">
//       {/* Sidebar */}
//       <div className={`bg-gray-900 text-white w-64 p-4 ${isOpen ? "block" : "hidden md:block"}`}>
//         <h2 className="text-xl font-bold">Dashboard</h2>
//         <ul>
//           <li className="mt-4">Home</li>
//           <li className="mt-4">Settings</li>
//           <li className="mt-4">Reports</li>
//         </ul>
//       </div>
//       {/* Content */}
//       <div className="flex-1 p-4">
//         <button className="md:hidden bg-blue-500 text-white p-2 mb-4" onClick={() => setIsOpen(!isOpen)}>
//           Toggle Menu
//         </button>
//         <h2 className="text-2xl font-bold">Admin Panel</h2>
//         <p>Dashboard content goes here...</p>
//       </div>
//     </div>
//   );
// };

// // Navbar Component
// const Navbar = () => {
//   return (
//     <nav className="bg-blue-600 text-white p-4 text-center font-bold">My Website</nav>
//   );
// };

// export default App;
