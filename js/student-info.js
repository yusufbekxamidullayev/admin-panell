
// let path = new URLSearchParams(location.search);
// let studentId = path.get("studentId");

// let studentInfo = document.getElementById("student-info");



// async function getStudentsInfo() {
//     try {

//         studentsContainer.map((el) => {
//             studentInfo.innerHTML += `
//                 <div class="relative flex w-[900px] h-[300px] bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
//                         <div class="flex-1 p-6 flex flex-col justify-between">
//                             <div>
//                                 <h2 class="text-2xl font-bold text-gray-900 dark:text-white">${el.firstName} ${el.lastName}</h2>
//                                 <p class="text-s[19px]text-gray-600 dark:text-gray-300 mt-2">Age: ${el.age}</p>
//                                 <p class="text-[19px] text-gray-600 dark:text-gray-300 mt-1">Experience: ${el.experience}</p>
//                                 <p class="text-[19px] text-gray-600 dark:text-gray-300 mt-1 truncate">${el.email}</p>
//                                 <p class="text-[19px] text-gray-600 dark:text-gray-300 mt-1 truncate">${el.phone}</p>
//                                 <p class="text-[19px] text-gray-600 dark:text-gray-300 mt-1 truncate">${el.telegram}</p>
//                             </div>
//                             <div class="flex gap-4">
//                                 <button onClick="editTeacher(${el.id})"
//                                     class="px-5 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 transition">Edit</button>
//                                 <button onClick="deleteTeacher(${el.id})"
//                                     class="px-5 py-2 bg-red-500 text-white font-bold rounded hover:bg-red-600 transition">Delete</button>
//                             </div>
//                         </div>
                    
//                         <div class="w-[300px] relative flex-shrink-0">
//                             <img src="${el.avatar}" alt="avatar" class="w-full h-full object-cover" />
//                             <div class="absolute bottom-2 left-2 bg-black/50 text-white px-2 py-1 rounded text-sm">
//                                 ${el.gender ? "Erkak" : "Ayol"}
//                             </div>
//                         </div>
//                     </div>

//       `;
//         });

//     } catch (err) {
//         console.log(err);
//     }
// }
// getStudentsInfo();



// students-info.js

// URLParams dan studentId olamiz
const params = new URLSearchParams(window.location.search);
const studentId = params.get("studentId");

// HTMLdagi joy — student ma'lumotlari uchun
const studentInfoContainer = document.getElementById("student-info");

async function getStudentInfo() {
    if (!studentId) {
        studentInfoContainer.innerHTML = "<p>Student ID topilmadi.</p>";
        return;
    }

    try {
        // API soʻrov — o‘zing ishlatayotgan mockapi manzilingni yoz
        const res = await axios.get(`https://69135d0ef34a2ff1170bb5ac.mockapi.io/students/${studentId}`);
        const el = res.data;

        // Ma’lumotni HTMLga chiqarish
        studentInfoContainer.innerHTML = `
                       <div class="relative flex w-[900px] h-[300px] bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                         <div class="flex-1 p-6 flex flex-col justify-between">
                             <div>
                                 <h2 class="text-2xl font-bold text-gray-900 dark:text-white">${el.firstName} ${el.lastName}</h2>
                                 <p class="text-s[19px]text-gray-600 dark:text-gray-300 mt-2">Age: ${el.age}</p>
                                 <p class="text-[19px] text-gray-600 dark:text-gray-300 mt-1"> ${el.linkedin}</p>
                                 <p class="text-[19px] text-gray-600 dark:text-gray-300 mt-1 truncate">${el.email}</p>
                                 <p class="text-[19px] text-gray-600 dark:text-gray-300 mt-1 truncate">${el.phone}</p>
                                 <p class="text-[19px] text-gray-600 dark:text-gray-300 mt-1 truncate">${el.telegram}</p>
                             </div>
                             <div class="flex gap-4">
                                 <button onClick="editTeacher(${el.id})"
                                     class="px-5 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 transition">Edit</button>
                                 <button onClick="deleteTeacher(${el.id})"
                                     class="px-5 py-2 bg-red-500 text-white font-bold rounded hover:bg-red-600 transition">Delete</button>
                             </div>
                         </div>
                    
                         <div class="w-[300px] relative flex-shrink-0">
                             <img src="${el.avatar}" alt="avatar" class="w-full h-full object-cover" />
                             <div class="absolute bottom-2 left-2 bg-black/50 text-white px-2 py-1 rounded text-sm">
                                 ${el.gender ? "Erkak" : "Ayol"}
                             </div>
                         </div>
                     </div>
    `;
    } catch (error) {
        console.error("Student ma’lumotini olishda xato:", error);
        studentInfoContainer.innerHTML = "<p>Xatolik yuz berdi. Ma’lumotni yuklab bo‘lmadi.</p>";
    }
}

// Sahifa yuklanganda ma’lumotni chaqirish
getStudentInfo();
