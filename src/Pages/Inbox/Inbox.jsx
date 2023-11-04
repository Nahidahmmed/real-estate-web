
// import { useContext, useEffect, useState } from "react";
// import { io } from "socket.io-client";
// import { AuthContext } from "../../Providers/AuthProvider";
// import { useLoaderData } from "react-router-dom";
// const socket = io.connect("http://localhost:5000")
// export default function Inbox() {
//     const room = useLoaderData();
//     const { user } = useContext(AuthContext);

//     const [messages, setMessages] = useState([]);
//     const [myMessages, setMyMessages] = useState([]);
//     console.log(messages)
//     useEffect(() => {
//       socket.on("receive_message", (data) =>{
//         setMessages(data.messages)
//       })
       
//     },[socket]);
//     const sendMessage = (event) => {
//         event.preventDefault();
//         const form = event.target;
//         const message = form.message.value;
//         setMyMessages(message);
//         socket.emit("send_message",{messages: message})
       
//     };

    
//     return (
//         <div>
//             <div className="container mx-auto p-4">
//                 <div className="bg-white p-4 rounded-lg shadow-md mb-4">
//                     <div className="">
//                         other{messages}
//                     </div>
//                     <div className="flex mt-4">
//                         <form onSubmit={sendMessage}>
//                             <input
//                                 type="text"
//                                 name="message"
//                                 className="w-full border rounded px-2 py-1"
//                                 placeholder="Type a message..."
//                             />
//                             <button
//                                 className="bg-blue-500 text-white px-4 py-2 rounded ml-2"
//                                 type="submit"
//                             >
//                                 Send
//                             </button>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
