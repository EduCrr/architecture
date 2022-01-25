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

export const getSingle = async (id: any) => {
  let set: any = {};
  await firebase
    .firestore()
    .collection("house")
    .doc(id)
    .get()
    .then((doc: any) => {
      set.id = doc.id;
      set.name = doc.data().name;
      set.color = doc.data().color;
      set.company = doc.data().company;
      set.description = doc.data().description;
      set.images = doc.data().images;
      set.price = doc.data().price;
      set.category = doc.data().category;
    })
    .catch((error) => {
      console.log(error);
    });
  return set;
};
