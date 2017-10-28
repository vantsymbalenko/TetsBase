export default function setAccessFB(firstName,lastName,birthday,imgSrc,coverFotoSrc) {
    console.log('dispatch_FB');
    console.log(coverFotoSrc);
    return{
        type: 'SET_ACCESS',
        access: false,
        name: firstName,
        surname: lastName,
        regDate: birthday,
        imgSrc : imgSrc,
        cover  : coverFotoSrc
    }
}