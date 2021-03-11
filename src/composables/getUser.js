import { ref } from "vue"
import { auth } from "../firebase-config"

const user = ref(undefined)

auth.onAuthStateChanged((currUser) => {
  // console.log(currUser)
  user.value = currUser
})

export const getUser = () => ({ user })
