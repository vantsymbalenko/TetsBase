export default function search (state, action){
    switch(action.type){
        case 'SET_SEARCH_WORDS':
            return {
                words: action.words
            };
        default:
            return {};
    }
}