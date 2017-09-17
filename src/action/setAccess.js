import pathImg from '../image/foto.jpg';

export default function setAccess(login, password){
    if(login === 'admin' && password === 'admin'){
        return{
            type:'SET_ACCESS',
            access: false,
            name: 'Name',
            surname: 'Surname',
            regDate: new Date(1995, 2, 3).toString(),
            imgSrc: pathImg
        }
    }
    return {
        type:'SET_ERRORS',
        errors: 'Something wrong'
    }
}