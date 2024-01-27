import React from 'react';
import PropTypes from 'prop-types';
import { Input } from "@material-tailwind/react";

const styles = {
  width: 300,
  marginBottom: 10
};

const Textfields = ({type,name}) => {
    return (

      <div className="flex w-72 flex-col gap-6">
      <Input variant="static" label="Static" placeholder="Static" />
      <Input variant="standard" label="Standard" placeholder="Standard"/>
      <Input variant="outlined" label="Outlined" placeholder="Outlined"/>
    </div>
      // <input type={type} name={name}></input>
    );
};


Textfields.propTypes = {
    type: PropTypes.node.isRequired,
    name: PropTypes.string.isRequired
};


export default Textfields;










// import { Input } from "@material-tailwind/react";
 
// export function InputValidations() {
//   return (
//     <div className="flex w-72 flex-col items-end gap-6">
//       <Input label="Input Error" error />
//       <Input label="Input Success" success />
//     </div>
//   );
// }
