export default (state = { logIn: false, signUp: false }, action) => {
    switch (action.type) {
        case "logIn": state = { ...state, logIn: true,signUp:false };
            break;
        case "signUp": state = { ...state, signUp: true,logIn:false };
            break;
    }
    return state;
}