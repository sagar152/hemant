import React, {  useState } from "react";
import { Col, Row } from "react-bootstrap";
import "./Jotfrom.css";
import Sidebar from "./Sidebarform";
const Jotfrom =()=>  {
    const [on, setOn] = useState(false);
    const [sidebar , setSidebar] = useState(false)
    const handleOn = () => {
      setOn(!on);
      setSidebar(true)
    };
    return (
      <>
        
        <Row>
          <Col sm={12}>
             
           <div className="jotheader">
            <div className="build"><h3>Build</h3></div>
            <div className="pl-5"><h3>setting</h3></div>
            <div className="pl-5"><h3>Bublish</h3></div>

            </div>
           
          </Col>
          {/* {!sidebar ?  */}
          <aside className={on ? 'to-right' : ''}>
           <div className="mt-5">
           <div className="button-jot " onClick={handleOn}>
                <div><h6>Add Form Element</h6></div>
                <div><i className="mdi mdi-plus-circle-outline"></i></div>
            </div>
           </div>   </aside> 
           
          
      
           { on && <Sidebar openClass="open"  sidebar={sidebar} setSidebar={setSidebar}/>}  
          </Row>
          
      </>
    );
  
}
export default Jotfrom;







// const SideBar = ({ openClass }) => {
//     const [on, setOn] = React.useState(false);

//   const handleOn = () => {
//     setOn(!on);
//   };

//  <aside className={on ? 'to-right' : ''}>
//         <a href="#" onClick={handleOn}>
//           <Menu size="35" />
//         </a>

//         <h1>React Sidebar</h1>
//       </aside>
//       {on && <SideBar openClass="open" />}
//   return (
//     <nav className={openClass === 'open' ? 'opneSidebar' : ''}>
//       <ul className="navlist">
//         <li>
//           <a className="menu-item" href="/">
//             Home
//           </a>
//         </li>

//         <li>
//           <a className="menu-item" href="/burgers">
//             Burgers
//           </a>
//         </li>

//         <li>
//           <a className="menu-item" href="/pizzas">
//             Pizzas
//           </a>
//         </li>
//         <li>
//           <a className="menu-item" href="/desserts">
//             Desserts
//           </a>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default SideBar;
