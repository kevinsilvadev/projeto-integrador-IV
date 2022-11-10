export default function authHeader() {
    const user =  JSON.parse(localStorage.getItem('user'))
    console.log(user.acessToken)
    if(user && user.acessToken) {
        return {Authorization: 'Bearer' + user.acessToken};
    } else {
        return{};
    }
}