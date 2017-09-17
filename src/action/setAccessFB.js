export default function setAccessFB(firstName,lastName,birthday,imgSrc) {
    console.log('dispatch_FB');
    return{
        type: 'SET_ACCESS',
        access: false,
        name: firstName,
        surname: lastName,
        regDate: birthday,
        imgSrc : imgSrc
    }
}