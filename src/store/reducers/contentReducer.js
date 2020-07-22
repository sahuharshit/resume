
const intialState = {
    nameOfResumeHolder: 'Harshit Sahu',
    aboutMeTitle : 'About Me',
    aboutMeSummary : 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
    phoneNumber: '+91 7977113822',
    emailAddress: 'harshit16sahu@gmail.com',
    address: 'Mumbai, India'
}

const contentReducer = (state=intialState, action) =>{
    switch(action.type){
        case "NAME_OF_RESUME_HOLDER": {
            return {
                ...state,
                nameOfResumeHolder:action.payload
            }
        }
        case "ABOUT_ME_TITLE": {
            return {
                ...state,
                aboutMeTitle:action.payload
            }
        }
        case "ABOUT_ME_SUMMARY": {
            return {
                ...state,
                aboutMeSummary:action.payload
            }
        }
        case "PHONE_NUMBER": {
            return {
                ...state,
                phoneNumber:action.payload
            }
        }
        case "EMAIL_ADDRESS": {
            return {
                ...state,
                emailAddress:action.payload
            }
        }
        case "ADDRESS": {
            return {
                ...state,
                address:action.payload
            }
        }
        default :{
            return {...state}
        }
    }
}


export default contentReducer;