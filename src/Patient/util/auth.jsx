export function getAuth(){
    const token = localStorage.getItem('token');
    return token;
}

export function getId(){
    const userId = localStorage.getItem('userId');
    return userId
}