import { houseTypes } from "../types/houseType";
import firebase from "../firebaseConnection";

export const getAll = async () => {
  let list: houseTypes[] = [];
  await firebase
    .firestore()
    .collection("house")
    .get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        list.push({
          id: doc.id,
          name: doc.data().name,
          color: doc.data().color,
          company: doc.data().company,
          description: doc.data().description,
          images: doc.data().images,
          price: doc.data().price,
          category: doc.data().category,
        });
      });
    })
    .catch((error) => {
      console.log("Não foi possivel carragar os chamados" + error);
    });
  return list;
};
