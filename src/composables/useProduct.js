import { ref } from "vue";
import { firestore } from "../firebase-config";

export const useProduct = () => {
  const status = ref("idle");

  const add = async item => {
    status.value = "loading";

    try {
      await firestore.collection("products").add(item);
      status.value = "success";
    } catch (err) {
      console.log(err);
      status.value = "error";
    }
  };

  const update = async (id, newValues) => {
    status.value = "loading";

    try {
      await firestore
        .collection("products")
        .doc(id)
        .update(newValues);
      status.value = "success";
    } catch (err) {
      console.log(err);
    }
  };

  const remove = async id => {
    status.value = "loading";

    try {
      await firestore
        .collection("products")
        .doc(id)
        .delete();
      status.value = "success";
    } catch (err) {
      console.log(err);
      status.value = "error";
    }
  };

  return { status, add, update, remove };
};
