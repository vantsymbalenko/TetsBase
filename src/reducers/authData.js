export default function authData (state = {access : true }, action){
    switch(action.type){
        case 'SET_ACCESS':
            return {
                access: action.access,
                name: action.name,
                surname: action.surname,
                birthDate: action.birthDate,
                imgSrc: action.imgSrc,
                cover: action.cover
            };
        case 'SET_ERRORS':
            return {
                ...state,
                errors:action.errors
            };
        case 'SET_LOADING':
            return {
                ...state,
                loading: action.loading
            };
        default:
            return state;
    }
}