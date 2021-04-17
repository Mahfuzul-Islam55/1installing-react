import React, { useState } from 'react';

const HooksCounter = () => {
  
    const [name,setName]=useState({firstName:'',lastName:''})
    return (
        <div>
            <p>okkkkkkkk</p>
            <input type="text" value={name.firstName} onChange={e=>setName({...name,firstName:e.target.value})}></input>
            <input type="text" value={name.lastName} onChange={e=>setName({...name,lastName:e.target.value})}></input>

            <h3>{name.firstName}</h3>
            <h3>{name.lastName}</h3>
        </div>
    );
};

export default HooksCounter;