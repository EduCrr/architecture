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
      set.images = doc.data().images;
      set.price = doc.data().price;
      set.category = doc.data().category;
    })
    .catch((error) => {
      console.log(error);
    });
  return set;
};

export const sendLogin = async (
  email: string,
  password: string,
  setUserName: any,
  setUserEmail: any,
  setUserId: any
) => {
  await firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(async (value) => {
      let uid = value.user?.uid;
      const userProfile = await firebase
        .firestore()
        .collection("users")
        .doc(uid)
        .get();

      let data = {
        uid: uid,
        email: value.user?.email,
        name: userProfile.data()?.name,
      };
      setUserName(data.name);
      setUserEmail(data.email);
      setUserId(data.uid);
    })
    .catch((error) => {
      console.log(error);
      alert("email/senha incorretos!");
    });
};

export const sendNewAccount = async (
  email: string,
  password: string,
  name: string,
  setUserName: any,
  setUserEmail: any,
  setUserId: any
) => {
  await firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    //banco auth
    .then(async (value) => {
      let uid = value.user?.uid;
      //banco user
      await firebase
        .firestore()
        .collection("users")
        .doc(uid)
        .set({
          name,
          email,
          uid,
        })
        .then(() => {
          let data = {
            uid,
            name,
            email: value.user?.email,
          };
          setUserName(data.name);
          setUserEmail(data.email);
          setUserId(data.uid);
        });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const newUserinfo = async (name: string, id: string) => {
  await firebase
    .firestore()
    .collection("users")
    .doc(id)
    .update({
      name: name,
    })
    .then(() => {
      alert("Update sucess!");
    })
    .catch((error) => {
      console.log(error);
    });
};
export const newUserPassword = async (password: string) => {
  await firebase
    .auth()
    .currentUser?.updatePassword(password)
    .then(() => {
      alert("senha alterada");
    })
    .catch((error) => {
      alert("erro senha");
    });
};
