// ===== ตั้งค่าก่อนใช้งาน (ดู README.md) =====
// 1) คัดลอกค่าจาก Firebase Console > Project settings > Your apps > Web app
// 2) ใส่อีเมลผู้ดูแลระบบคนแรก (ต้องตรงกับใน firestore.rules)
// ถ้า apiKey ว่าง แอปจะทำงานแบบ "โหมดทดลอง" เก็บข้อมูลในเบราว์เซอร์นี้เท่านั้น
window.APP_CONFIG = {
  firebase: {
    apiKey: "AIzaSyCOIvYlXixqrhzzyYKZR1SXmDnb1XVPA_8",
    authDomain: "mea-substation-data.firebaseapp.com",
    projectId: "mea-substation-data",
    storageBucket: "mea-substation-data.firebasestorage.app",
    messagingSenderId: "891775539679",
    appId: "1:891775539679:web:2a61907ef75414b970cc6a"
  },
  ownerEmails: ["substation.am@gmail.com"],
  appName: "ข้อมูลทรัพย์สินสถานีไฟฟ้า"
};
