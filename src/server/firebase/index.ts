/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Query, DocumentData, QueryFieldFilterConstraint } from "firebase/firestore";
import { app } from './install'
import { getFirestore, collection, addDoc } from "firebase/firestore";

type Method = 'get' | 'add' | 'delete' | 'update'
type FirestoreConfig = {
  method: Method
  url: string
  data?: Query<DocumentData> | DocumentData
  query?: QueryFieldFilterConstraint[]
}

const db = getFirestore(app)

const addFirestore = (config: FirestoreConfig) => {
  const docRef = collection(db, config.url)
  return addDoc(docRef, config.data)
}

export const firestoreXhr = async (config: FirestoreConfig) => {
  return new Promise(async (resolve, reject) => {
    switch (config.method) {
      case 'add':
        await addFirestore(config).then(() => resolve(true), reject)
    }
    reject('連線失敗')
  })
}
