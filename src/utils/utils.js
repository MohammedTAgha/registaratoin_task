export const validateInput = (input, type) => {
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
  
    let isValid = false;
    let message = '';
  
    if (type === 'email') {
      isValid = emailRegex.test(input);
      message = isValid ? '' : 'Invalid email address';
    } else if (type === 'password') {
      isValid = passwordRegex.test(input);
      message = isValid
        ? ' '
        : 'no matching';
    }
  
    return { isValid, message };
  };
  