// ===== ตั้งค่าก่อนใช้งาน (ดู README.md) =====
// 1) คัดลอกค่าจาก Firebase Console > Project settings > Your apps > Web app
// 2) ใส่อีเมลผู้ดูแลระบบคนแรก (ต้องตรงกับใน firestore.rules)
// ถ้า apiKey ว่าง แอปจะทำงานแบบ "โหมดทดลอง" เก็บข้อมูลในเบราว์เซอร์นี้เท่านั้น
window.APP_CONFIG = {
  firebase: {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  },
  ownerEmails: ["your-admin@gmail.com"],
  appName: "ข้อมูลทรัพย์สินสถานีไฟฟ้า"
};
