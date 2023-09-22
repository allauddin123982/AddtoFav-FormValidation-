export default function Validation(user) {
    const errors = {}

    //Regex for input fields

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (user.name===""){
        errors.name = "Required";

    }

    if (user.email === ""){
        errors.email = "Required";

    }
    else if(!emailRegex.test(user.email)){
        errors.email = "Invalid";
        
    }

    if (user.password === ""){
        errors.password = "Required";
    
    }else if(!passRegex.test(user.password)){
        errors.password = "Invalid";
        
    }
    return errors

}