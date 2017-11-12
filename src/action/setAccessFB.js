export default function setAccessFB(firstName,lastName,birthday,imgSrc,coverFotoSrc) {
    return{
        type: 'SET_ACCESS',
        access: false,
        name: firstName,
        surname: lastName,
        birthDate: birthday,
        imgSrc : imgSrc,
        cover  : coverFotoSrc
    }
}