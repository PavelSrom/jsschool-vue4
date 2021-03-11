import { ref, watchEffect } from "vue";
import { firestore } from "../firebase-config";

export const getProducts = () => {
  const products = ref(null);
  const error = ref(null);

  const collectionRef = firestore.collection("products");

  const unsubscribe = collectionRef.onSnapshot(
    snapshot => {
      const results = [];

      snapshot.docs.forEach(doc => results.push({ ...doc.data(), id: doc.id }));

      products.value = results;
      error.value = null;
    },
    err => {
      error.value = err.message;
      products.value = null;
    }
  );

  // cleanup after unmount
  watchEffect(onInvalidate => {
    onInvalidate(() => unsubscribe());
  });

  return { products, error };
};
