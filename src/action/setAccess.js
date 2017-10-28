import UserFotoSrc from '../image/foto.jpg';
import CoverSrc from '../image/cover.jpg';

export default function setAccess(login, password){
    if(login === 'admin' && password === 'admin'){
        return{
            type:'SET_ACCESS',
            access: false,
            name: 'Name',
            surname: 'Surname',
            regDate: new Date(1995, 2, 3).toISOString().substring(0, 10),
            imgSrc: UserFotoSrc,
            cover: CoverSrc
        }
    }
    return {
        type:'SET_ERRORS',
        errors: 'Something wrong'
    }
}