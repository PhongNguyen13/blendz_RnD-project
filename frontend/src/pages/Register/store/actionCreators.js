import axios from "axios";
import * as constants from '../../login/store/constants';

const ChangeRLogin = () => ({
    type: constants.CHANGE_RLOGIN,
    value: true
})


export const register = (email, password) => {
    return(dispatch) => {
        const userdata = {email,password};
        axios.post('/api/user', userdata).then((res) => {
            console.log(res);
            dispatch(ChangeRLogin())
        }).catch(error => {
            console.log(error);
            alert('fail register')
        })
    }
}
