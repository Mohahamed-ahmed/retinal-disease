export function getAuth(){
    const token = localStorage.getItem('token');
    return token;
}