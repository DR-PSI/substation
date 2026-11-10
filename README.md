# ข้อมูลทรัพย์สินสถานีไฟฟ้า

เว็บแอปเก็บข้อมูลอุปกรณ์ในสถานีไฟฟ้า หลายสถานี ตามมาตรฐานโครงสร้างข้อมูล (10 กลุ่มอุปกรณ์ 47 ชนิด 516 ฟิลด์)
โฮสต์บน GitHub Pages เก็บข้อมูลใน Firebase Firestore เข้าใช้ด้วยบัญชี Google เฉพาะอีเมลที่ได้รับอนุญาต

- สถานี › อุปกรณ์หลัก (เช่น TR.1) › ส่วนประกอบ (เช่น บุชชิ่ง H1) › ค่าในแต่ละฟิลด์
- เพิ่ม/แก้ฟิลด์และชนิดอุปกรณ์ได้ (ผู้ดูแล) ใช้กับทุกสถานี
- สิทธิ์ 3 ระดับ: ผู้ดูแล, ผู้แก้ไข, ผู้ดูอย่างเดียว บังคับด้วย Firestore Security Rules
- ส่งออก Excel ต่อสถานี (1 sheet ต่อชนิดอุปกรณ์), บันทึกประวัติการแก้ไขในคอลเลกชัน `log`
- ถ้า `config.js` ยังไม่ใส่ค่า Firebase แอปทำงานแบบ "โหมดทดลอง" เก็บข้อมูลในเบราว์เซอร์เท่านั้น

## ตั้งค่าครั้งแรก

1. **Firebase Console** → Add project (เช่น `mea-substation-data`)
2. **Authentication** → Get started → Sign-in method → เปิด **Google**
3. **Authentication → Settings → Authorized domains** → เพิ่ม `dr-psi.github.io`
4. **Firestore Database** → Create database → เลือก region `asia-southeast1` → Production mode
5. **Firestore → Rules** → วางเนื้อหาไฟล์ `firestore.rules` แก้อีเมลใน `isOwner()` เป็นอีเมลผู้ดูแล → Publish
6. **Project settings → Your apps → Web (</>)** → คัดลอกค่า config มาใส่ใน `config.js` และใส่อีเมลเดียวกันใน `ownerEmails`
7. **GitHub** → สร้าง repo (แนะนำ private) → อัปโหลดไฟล์ทั้งหมดในโฟลเดอร์นี้ → Settings → Pages → Branch `main` / root
8. เปิด `https://dr-psi.github.io/<repo>/` → login ด้วยอีเมลผู้ดูแล ระบบจะสร้างโครงสร้างฟิลด์มาตรฐานให้อัตโนมัติ → เมนู "ผู้ใช้" เพื่อเพิ่มอีเมลคนอื่น

## ข้อควรระวัง

- ค่าใน `config.js` (apiKey ฯลฯ) เปิดเผยได้ตามปกติของ Firebase ความปลอดภัยอยู่ที่ Security Rules ต้อง Publish rules ก่อนใส่ข้อมูลจริง
- ข้อมูลทรัพย์สินจริงของ กฟน. จะเก็บบน Google Cloud ไม่ได้อยู่ในเครือข่าย กฟน. ต้องได้รับอนุมัติตามนโยบายความมั่นคงปลอดภัยสารสนเทศของ กฟน. ก่อนใช้งานจริง
- สำรองข้อมูล: Firestore → Import/Export (ต้องเปิด Billing) หรือใช้ปุ่มส่งออก Excel ต่อสถานี

## โครงสร้างข้อมูล Firestore

| คอลเลกชัน | เอกสาร |
|---|---|
| `config/schema` | `tree`: กลุ่ม › ชนิดอุปกรณ์ › `fields[{id,name,label,type,unit,required,status,maximo,options}]` |
| `users/{email}` | `{name, role: admin\|editor\|viewer}` |
| `stations/{id}` | `{name, code, district, voltage, address, lat, lon, note, updatedAt, updatedBy}` |
| `stations/{id}/equipment/{id}` | `{typeId, parentId, tag, values:{fieldId: value}, updatedAt, updatedBy}` |
| `log/{auto}` | `{t, user, action, target}` |

ออกแบบตามแนวทาง enertric-ui (ดัดแปลงจาก unslop โดย Damir Sokolovsky, CC BY 4.0)
