import axios from "axios";
import * as constants from './constants';
import { login, logout, UseAuth, reSetPassword } from "../../../firebase";
import { fromJS } from "immutable";

const changeLogin = () => ({
    type: constants.CHANGE_LOGIN,
    value: true
})

const ChangeLogout = () => ({
    type: constants.CHANGE_LOGOUT,
    value: false
})

const GetUser = (data) => ({
    type: constants.GET_USER,
    data: fromJS(data)
})


export const log_in = (email, password) => {
    return(dispatch) => {
        if(checkEmail(email)){
            login(email, password).then((res) => {
                console.log(res);
                console.log(res.user.uid);
                let id = res.user.uid;
                var storage=window.localStorage;
                storage.setItem("Islogin", "login");
                storage.setItem("UID", id);
                dispatch(changeLogin());
            }).catch(error => {
                console.log(error);
                alert("Wrong Password. Please try the other one.");
            })
        }else{
            alert("Please enter a valid email, eg 123@gmail.com");
        }
    }
}

export const log_out = () => {
    return(dispatch) => {
        logout().then((res) => {
            console.log("Logout");
            //change localstorage
            var storage=window.localStorage;
            storage.setItem("Islogin", "Notlogin");
            storage.setItem("UID", null);
            storage.setItem("Total", 0);
            //nav to login page
            window.location.replace("/login");
            dispatch(ChangeLogout())
        }).catch(error => {
            console.log(error);
            alert(error);
        })
    }
}

export const Reset_Password = (email) => {
    return(dispatch) => {
        if(checkEmail(email)){
            reSetPassword(email).then((res) => {
                console.log("email has sended");
                dispatch(ChangeLogout())
            }).catch(error => {
                console.log(error);
                alert(error);
            })
        }else{
            alert("Please enter a valid email, eg 123@gmail.com");
        }
        
    }
}

export const get_User = () =>{
    return(dispatch) => {
        const data = UseAuth().email;
        dispatch(GetUser(data.data));
    }
};


function checkEmail(email){
	var patt=/^\S{1,50}@\S{1,50}(.com)$/;
	var result=patt.test(email);
	return result;
}