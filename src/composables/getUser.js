import { ref } from "vue"
import { auth } from "../firebase-config"

const user = ref(auth.currentUser)

auth.onAuthStateChanged((currUser) => {
  // console.log(currUser)
  user.value = currUser
})

export const getUser = () => ({ user })
