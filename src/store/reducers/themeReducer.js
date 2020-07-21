import theme from '../../theme/GlobalTheme';


const intialState = theme

const themeReducer = (state=intialState, action) =>{
    switch(action.type){
        case "CHANGE_COLOR": {
            console.log("oche", {...state.PRIMARY_BACKGROUND_COLORS})
            return {
                ...state,
                    BACKGROUND_COLOR:{
                        color: action.payload
                    }
            }
        }
        default :{
            return {...state}
        }
    }
}


export default themeReducer;