export const getUserFromLocalStorage = () => (JSON.parse(localStorage.getItem('userID')));
export const setUserToLocalStorage = (user) =>(localStorage.setItem('userID',JSON.stringify(user)));
export const removeUserFromLocalStorage = () =>(localStorage.removeItem('userID'));