import React, { useState } from 'react';
import moment from 'moment'
import NewCamp from '../../components/NewCamp/NewCamp';

const AddCamp = () => {
    
    const upcoming = false;
    const page_title = "Add Camp"

    return (
        <div>
          <NewCamp upcoming ={upcoming} page_title={page_title}  />  
        </div>
    );
};

export default AddCamp;
