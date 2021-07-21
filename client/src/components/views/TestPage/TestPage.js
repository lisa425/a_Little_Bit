import React,{ useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import registerUser from '../../../_actions/user_action';
import '../../../css/TestPage/TestPage.css';
import InputName from './inputUserData/InputName'
import NavBar from '../Navbar/Navbar';


const TestPage = (props) => {
    // useEffect(() => {
    //     axios.get('api/hello')
    //     .then(response => console.log(response.data))
    // },[])

    const dispatch = useDispatch();
    const [name,setName] = useState("");
    const [location,setLocation] = useState("");

    const onNameHandler = (event) => {
        setName(event.currentTarget.value)
    }
    const onLocationHandler = (event) => {
        setLocation(event.currentTarget.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        let body = {
            name: name,
            location: location
        }

        //axios.post('/api/users/test',body).then(response => console.log('save'));
        dispatch(registerUser(body))
        .then(response => {
            if(response.payload.success){
                props.history.push('/test') //result
            }else{
                alert('err')
            }
        })
        

    }
    


    return(
        <div className="testpage">
            <NavBar />
            <InputName className="content" />
            <form>
                <label>이름을 입력하세요</label>
                <input type="text" value={name} onChange={onNameHandler}/>
                <label>지역을 입력하세요</label>
                <input type="text" value={location} onChange={onLocationHandler}/>
                <br/>
                <button type="submit" onClick={onSubmitHandler}>DONE!</button>
            </form>
        </div>
    );
};

export default TestPage;