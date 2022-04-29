import React, { useCallback , useRef ,useEffect} from 'react';
import $ from "jquery";
import './Sideform.scss'

window.jQuery = $;
window.$ = $;

require("jquery-ui-sortable");
require("formBuilder");

const formData = [
  {
    type: "header",
    subtype: "h1",
    label: "formBuilder in React"
  },
  {
    type: "paragraph",
    label: "This is a demonstration of formBuilder running in a React project."
  }
];



const SideBarForm = ({ openClass,sidebar,setSidebar }) => {
  const  fb = useRef();
  console.log('handleOn',sidebar,setSidebar)
  const handleInputChange = useCallback(event => {
    setSidebar(event.target.value)
  }, [setSidebar])
useEffect(()=>{
  $(fb.current).formBuilder({
    formData,
    onSave: (event, form_schema) => alert(JSON.stringify(form_schema))
  });
})
  return (
    <nav id='navbarform' className={openClass === 'open' ? 'opneSidebar' : ''}>

      <div onClick={handleInputChange}>close</div>
      <div id="fb-editor" ref={fb} />;
    </nav>
  );
};

export default SideBarForm;

