export default function auth (state = {access : true }, action){
    switch(action.type){
        case 'SET_ACCESS':
            return {
                access: action.access,
                name: action.name,
                surname: action.surname,
                regDate: action.regDate,
                imgSrc: action.imgSrc
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