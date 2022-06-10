import axios from "axios";
import * as constants from '../../Login/store/constants';
import { signup } from "../../../firebase";

const ChangeRLogin = () => ({
    type: constants.CHANGE_RLOGIN,
    value: true
})


export const sign_up = (email, password, password2) => {
    return(dispatch) => {
        if(email == ''|| email == undefined||email==null){
            alert("Please enter your email");
        }else if(password == ''|| password == undefined||password==null){
            alert("Please enter your Password");
        }else if(password2 == ''|| password2 == undefined||password2==null){
            alert("Please enter your confirm Password");
        }else if(checkEmail(email)){
            if(checkSamePassword(password,password2)) {
                if(checkPassword(password)){
                    signup(email, password).then((res) => {
                        console.log(res);
                        console.log(res._tokenResponse.localId);
                        let id = res._tokenResponse.localId;
                        let postdata = {
                            "id":id, 
                            "email":email,
                            "name": "new user",
                            "PriceToPay":0};
                        axios.post('https://blendz.herokuapp.com/api/user',postdata).then(res=>{
                            console.log(res);
                        })
                        var storage=window.localStorage;
                        storage.setItem("Islogin", "login");
                        storage.setItem("UID", id);
                        dispatch(ChangeRLogin())
                    }).catch(error => {
                        console.log(error);
                        alert(error);
                    })
                }else{
                    alert("Your password length must be at least 6");
                }
            }else{
                alert("The password and the confirm password must be the same")
            }
        }else{
            alert("Please enter a valid email, eg 123@gmail.com");
        }

    }
}

function checkEmail(email){
	var patt=/^\S{1,50}@\S{1,50}(.com)$/;
	var result=patt.test(email);
	return result;
}

function checkPassword(Password){
	var patt=/\S{6,50}/;
	var result=patt.test(Password);
	return result;
}

function checkSamePassword(Password1, Password2){
	if(Password1 === Password2){
        return true;
    }else{
        return false;
    }
}