import { Toast } from "native-base"
import colors from "../assets/colors/colors"

export const showToast = (message) =>{
    Toast.show({
        description: message,
        duration: 2000,
        backgroundColor:'red.800',
        placement:'bottom'
      })
}