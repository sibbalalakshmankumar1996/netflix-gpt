export const validateData = (userInputs, isSignInForm) => {
    const {username, email, password} = userInputs;
    const isEmailvalid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    if(!isEmailvalid) return "Email is not valid";

    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    if(!isPasswordValid) return "Password is not valid";

    if(!isSignInForm){
        const isUsernameValid = /^[0-9A-Za-z]+$/.test(username);
        if(!isUsernameValid) return "User name is not valid";
    }

    return null;
 }