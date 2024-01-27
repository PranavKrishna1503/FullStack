import React from 'react'
import Textfields from '../components/textfields'
import Buttons from '../components/buttons'

const Signup = () => {
    return (
        <div>
            First Name: <Textfields type='text' name='firstname'/><br/>
            Last Name: <Textfields type='text' name='lastname'/><br/>
            Email ID: <Textfields type='text' name='mail'/><br/>
            Username: <Textfields type='text' name='newusername'/><br/>
            Password: <Textfields type='text' name='newpassword'/><br/>
            <Buttons name='Submit'/><br/>

        </div>
    );
}

export default Signup;
