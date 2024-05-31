import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import app from "./init";

const firestore = getFirestore(app);

export async function storeTodo(data: any) {
  const date = new Date().toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  data = { date: date, ...data };

  try {
    await addDoc(collection(firestore, "todo"), data);
    return { status: true, statusCode: 200, message: "Success Adding Data" };
  } catch (error) {
    return { status: false, statusCode: 400, message: error };
  }
}

export async function retrieveData(collectionName: string) {
  const snapshot = await getDocs(collection(firestore, collectionName));

  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return data;
}

export async function retrieveDataById(collectionName: string, id: string) {
  const snapshot = await getDoc(doc(firestore, collectionName, id));
  const data = snapshot.data();

  return data;
}

export async function deleteData(collectionName: string, id: string) {
  try {
    await deleteDoc(doc(firestore, collectionName, id));
    return {
      status: true,
      statusCode: 200,
      message: "Berhasil Menghapus Data",
    };
  } catch (error) {
    return { status: false, statusCode: 400, message: error };
  }
}

export async function updateData(
  collectionName: string,
  updateData: any,
  id: string
) {
  const date = new Date().toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  try {
    await updateDoc(doc(firestore, collectionName, id), {
      title: updateData.title,
      description: updateData.description,
      date: date
    });

    return {
      status: true,
      statusCode: 200,
      message: "Berhasil mengupdate Data",
    };
  } catch (error) {
    return {
      status: false,
      statusCode: 404,
      message: "Gagal update Data",
    };
  }
}
