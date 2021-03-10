import { ref } from "vue"
import { firestore } from "../firebase-config"

/**
 * @param {'message' | string} collection
 * @param {object} item
 */
export const useProduct = (id) => {
  const status = ref("idle")
  const productRef = firestore.collection("products").doc(id)

  const add = async (item) => {
    status.value = "loading"

    try {
      await firestore.collection("products").add(item)
      status.value = "success"
    } catch (err) {
      console.log(err)
      status.value = "error"
    }
  }

  const update = async (newValues) => {
    status.value = "loading"

    try {
      await productRef.update(newValues)
      status.value = "success"
    } catch (err) {
      console.log(err)
    }
  }

  const remove = async () => {
    status.value = "loading"

    try {
      await productRef.delete()
      status.value = "success"
    } catch (err) {
      console.log(err)
      status.value = "error"
    }
  }

  return { status, add, update, remove }
}
