// let path = new URLSearchParams(location.search);
// let id = path.get("teacherId");
// let students = document.getElementById("students");
// let addTeacherBtn = document.getElementById("add-teacher");
// let outerModal = document.getElementById("outer-modal");
// let innerModal = document.getElementById("inner-modal");

// let select = null;

// addTeacherBtn.addEventListener("click", function () {
//   outerModal.classList.remove("hidden")
// })

// outerModal.addEventListener("click", function () {
//   outerModal.classList.add("hidden");
//   select = null;
//   innerModal[0].value = "";
//   innerModal[1].value = "";
//   innerModal[2].value = "";
//   innerModal[3].value = "";
//   innerModal[4].value = "";
//   innerModal[5].value = "";
//   innerModal[6].value = "";
//   innerModal[7].value = "";
//   innerModal[8].value = "";
//   innerModal[9].value = "";
//   innerModal[10].value = "";
//   innerModal[11].checked = false;
// })

// innerModal.addEventListener("click", function (e) {
//   e.stopPropagation();
// })

// async function getStudents() {
//     try {
//         let res = await axios(
//             id
//                 ? `https://69135d0ef34a2ff1170bb5ac.mockapi.io/Teachers/${id}/students/`
//                 : `https://69135d0ef34a2ff1170bb5ac.mockapi.io/students/`
//         );
//         console.log(res.data);

//         students.innerHTML = "";

//         res.data.map(el => {
//             students.innerHTML += `
//         <div class="border-[1px] max-w-[400px] w-full px-[10px] pt-[20px] rounded-[6px] dark:border-gray-800 mb-[20px]">
//           <div class="flex justify-between">
//             <div class="flex flex-col">
//               <h1 class="text-[15px] font-bold">${el.firstName} ${el.lastName}</h1>
//               <p class="text-[12px] text-[#6E7681] pt-[5px] line-clamp-[1]">Age: ${el.age}</p>
//               <p class="text-[12px] text-[#6E7681] pt-[5px] line-clamp-[1]">Experience: ${el.experience}</p>
//               <div class="flex items-center gap-[5px] pt-[5px]">
//                 <p class="text-[12px] text-[#6E7681]">${el.email}</p>
//               </div>
//               <p class="text-[12px] text-[#6E7681] pt-[5px] line-clamp-[1]">${el.phone}</p>
//               <p class="text-[12px] text-[#6E7681] pt-[5px] line-clamp-[1]">${el.telegram}</p>
//               <p class="text-[12px] text-[#6E7681] pt-[5px] line-clamp-[1]">${el.linkedin}</p>
//               <p class="text-[12px] text-[#6E7681] pt-[5px] line-clamp-[1]">Rating: ${el.rating}</p>
//               <p class="text-[12px] text-[#6E7681] pt-[5px] line-clamp-[1] mb-[20px]">Coins: ${el.coins}</p>
//             </div>
//             <div class="relative">
//               <button class="dropdown-btn inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
//                 <span class="sr-only">Open dropdown</span>
//                 <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
//                   <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
//                 </svg>
//               </button>
//               <!-- Dropdown menu -->
//               <div class="dropdown-menu hidden absolute right-0 mt-2 w-28 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-700">
//                 <ul class="py-2 text-base px-[10px] text-gray-700 dark:text-gray-200">
//                   <button
//                     onClick="editStudents(${el.id})"
//                     <p class="block px-4 py-2">Edit</p>
//                   </button>
//                   <button
//                   onClick="deleteStudents(${el.id})"
                  
//                     <a class="block px-4 py-2 text-white-600 ">Delete</a>
//                   </button>
//                 </ul>
//               </div>
//               <img class="w-[60px] rounded-[150px] mt-[10px]" src="${el.avatar}" alt="avatar">
//               <p class="text-[14px] text-[gray] font-bold mt-[5px]">${el.gender ? "Men" : "Women"}</p>
//             </div>
//           </div>
//         </div>
//       `;
//         });

//         document.addEventListener('click', function (event) {
//             const btn = event.target.closest('.dropdown-btn');
//             document.querySelectorAll('.dropdown-menu').forEach(menu => {
//                 if (menu !== btn?.nextElementSibling) {
//                     menu.classList.add('hidden');
//                 }
//             });

//             if (btn) {
//                 const menu = btn.nextElementSibling;
//                 menu.classList.toggle('hidden');
//                 event.stopPropagation();
//             } else {
//                 document.querySelectorAll('.dropdown-menu').forEach(menu => {
//                     menu.classList.add('hidden');
//                 });
//             }
//         });

//     } catch (err) {
//         console.log(err);
//     }
// }

// getStudents();


// async function deleteStudents(id) {
//   try {
//     await axios.delete(`https://69135d0ef34a2ff1170bb5ac.mockapi.io/students/${id}`);    
//     getStudents();
//   } catch (err) {
//     console.log(err);
//   }
// }


// innerModal.addEventListener("submit", async function (e) {
//   e.preventDefault();
//   let options = {}
//   options.email = e.target[0].value;
//   options.firstName = e.target[1].value;
//   options.lastName = e.target[2].value;
//   options.avatar = e.target[3].value;
//   options.experience = e.target[4].value;
//   options.age = e.target[5].value;
//   options.telegram = e.target[6].value;
//   options.linkedin = e.target[7].value;
//   options.profession = e.target[8].value;
//   options.phone = e.target[9].value;
//   options.rating = e.target[10].value;
//   options.gender = e.target[11].checked;

//   try {
//     select ? await axios.put(`https://69135d0ef34a2ff1170bb5ac.mockapi.io/students/${select}`, options) :
//       await axios.post(`https://69135d0ef34a2ff1170bb5ac.mockapi.io/students/`, options);
//     getStudents();
//     outerModal.classList.add("hidden")
//     select = null;
//     innerModal[0].value = "";
//     innerModal[1].value = "";
//     innerModal[2].value = "";
//     innerModal[3].value = "";
//     innerModal[4].value = "";
//     innerModal[5].value = "";
//     innerModal[6].value = "";
//     innerModal[7].value = "";
//     innerModal[8].value = "";
//     innerModal[9].value = "";
//     innerModal[10].value = "";
//     innerModal[11].checked = false;
//   } catch (err) {
//     console.log(err);
//   }
// })


// async function editStudents(id) {
//   outerModal.classList.remove("hidden");
//   select = id;
//   try {
//     let res = await axios.get(`https://69135d0ef34a2ff1170bb5ac.mockapi.io/students/${id}`);
//     console.log(res.data);

//     innerModal[0].value = res.data.email;
//     innerModal[1].value = res.data.firstName;
//     innerModal[2].value = res.data.lastName;
//     innerModal[3].value = res.data.avatar;
//     innerModal[4].value = res.data.experience;
//     innerModal[5].value = res.data.age;
//     innerModal[6].value = res.data.telegram;
//     innerModal[7].value = res.data.linkedin;
//     innerModal[8].value = res.data.profession;
//     innerModal[9].value = res.data.phone;
//     innerModal[10].value = res.data.rating;
//     innerModal[11].checked = res.data.gender;
//   } catch (err) {
//     console.log(err);
//   }
// }


// students.js

// Query string’dan teacherId olamiz (agar mavjud bo‘lsa)
let path = new URLSearchParams(location.search);
let teacherId = path.get("teacherId");

// DOM elementlarini olish
let studentsContainer = document.getElementById("students");
let addStudentBtn = document.getElementById("add-teacher"); // tugma id “add-teacher” deb qolgan
let outerModal = document.getElementById("outer-modal");
let innerModal = document.getElementById("inner-modal");

// select o‘zgaruvchi — edit qilinayotgan student Id saqlash uchun
let select = null;

// “Add Student” tugmasi bosilganda modalni ochish
addStudentBtn.addEventListener("click", function () {
  outerModal.classList.remove("hidden");
  select = null;
  // formani tozalash
  innerModal[0].value = "";
  innerModal[1].value = "";
  innerModal[2].value = "";
  innerModal[3].value = "";
  innerModal[4].value = "";
  innerModal[5].value = "";
  innerModal[6].value = "";
  innerModal[7].value = "";
  innerModal[8].value = "";
  innerModal[9].value = "";
  innerModal[10].value = "";
  innerModal[11].checked = false;
});

// Modal oynasining fon qismini bosilsa modalni yopish
outerModal.addEventListener("click", function () {
  outerModal.classList.add("hidden");
  select = null;
  innerModal[0].value = "";
  innerModal[1].value = "";
  innerModal[2].value = "";
  innerModal[3].value = "";
  innerModal[4].value = "";
  innerModal[5].value = "";
  innerModal[6].value = "";
  innerModal[7].value = "";
  innerModal[8].value = "";
  innerModal[9].value = "";
  innerModal[10].value = "";
  innerModal[11].checked = false;
});

// Modal ichidagi form element bosilganda event tarqalmasligi
innerModal.addEventListener("click", function (e) {
  e.stopPropagation();
});

// Students ro‘yxatini olish va render qilish funksiyasi
async function getStudents() {
  try {
    let url = teacherId
      ? `https://69135d0ef34a2ff1170bb5ac.mockapi.io/Teachers/${teacherId}/students/`
      : `https://69135d0ef34a2ff1170bb5ac.mockapi.io/students/`;
    let res = await axios.get(url);
    console.log(res.data);
    studentsContainer.innerHTML = "";

    res.data.map(el => {
      studentsContainer.innerHTML += `
        <div class="border-[1px] max-w-[400px] w-full px-[10px] pt-[20px] rounded-[6px] dark:border-gray-800 mb-[20px]">
          <div class="flex justify-between">
            <div class="flex flex-col">
              <h1 class="text-[15px] font-bold">${el.firstName} ${el.lastName}</h1>
              <p class="text-[12px] text-[#6E7681] pt-[5px]">Age: ${el.age}</p>
              <p class="text-[12px] text-[#6E7681] pt-[5px]">Experience: ${el.experience}</p>
              <p class="text-[12px] text-[#6E7681] pt-[5px]">${el.email}</p>
              <p class="text-[12px] text-[#6E7681] pt-[5px]">${el.phone}</p>
              <p class="text-[12px] text-[#6E7681] pt-[5px]">${el.telegram}</p>
              <p class="text-[12px] text-[#6E7681] pt-[5px]">${el.linkedin}</p>
              <p class="text-[12px] text-[#6E7681] pt-[5px]">Rating: ${el.rating}</p>
              <p class="text-[12px] text-[#6E7681] pt-[5px] mb-[20px]">Coins: ${el.coins ? el.coins : 0}</p>
            </div>
            <div class="relative">
              <button class="dropdown-btn inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                <span class="sr-only">Open dropdown</span>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                  <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                </svg>
              </button>
              <div class="dropdown-menu hidden absolute right-0 mt-2 w-28 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-700">
                <ul class="py-2 text-base px-[10px] text-gray-700 dark:text-gray-200">
                  <button onClick="editStudent(${el.id})"><p class="block px-4 py-2">Edit</p></button>
                  <button onClick="deleteStudent(${el.id})"><p class="block px-4 py-2 text-red-600">Delete</p></button>
                </ul>
              </div>
              <img class="w-[60px] rounded-[150px] mt-[10px]" src="${el.avatar}" alt="avatar">
              <p class="text-[14px] text-[gray] font-bold mt-[5px]">${el.gender ? "Men" : "Women"}</p>
            </div>
          </div>
        </div>
      `;
    });

    document.addEventListener('click', function (event) {
      const btn = event.target.closest('.dropdown-btn');
      document.querySelectorAll('.dropdown-menu').forEach(menu => {
        if (menu !== btn?.nextElementSibling) {
          menu.classList.add('hidden');
        }
      });

      if (btn) {
        const menu = btn.nextElementSibling;
        menu.classList.toggle('hidden');
        event.stopPropagation();
      } else {
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
          menu.classList.add('hidden');
        });
      }
    });

  } catch (err) {
    console.log(err);
  }
}
getStudents();

// Delete student funksiyasi
async function deleteStudent(id) {
  try {
    await axios.delete(`https://69135d0ef34a2ff1170bb5ac.mockapi.io/students/${id}`);
    getStudents();
  } catch (err) {
    console.log(err);
  }
}

// Form submit (add yoki edit)
innerModal.addEventListener("submit", async function (e) {
  e.preventDefault();
  let options = {};
  options.email = e.target[0].value;
  options.firstName = e.target[1].value;
  options.lastName = e.target[2].value;
  options.avatar = e.target[3].value;
  options.experience = e.target[4].value;
  options.age = e.target[5].value;
  options.telegram = e.target[6].value;
  options.linkedin = e.target[7].value;
  options.profession = e.target[8].value;
  options.phone = e.target[9].value;
  options.rating = e.target[10].value;
  options.gender = e.target[11].checked;

  try {
    if (select) {
      await axios.put(`https://69135d0ef34a2ff1170bb5ac.mockapi.io/students/${select}`, options);
    } else {
      await axios.post(`https://69135d0ef34a2ff1170bb5ac.mockapi.io/students/`, options);
    }
    getStudents();
    outerModal.classList.add("hidden");
    select = null;
    innerModal[0].value = "";
    innerModal[1].value = "";
    innerModal[2].value = "";
    innerModal[3].value = "";
    innerModal[4].value = "";
    innerModal[5].value = "";
    innerModal[6].value = "";
    innerModal[7].value = "";
    innerModal[8].value = "";
    innerModal[9].value = "";
    innerModal[10].value = "";
    innerModal[11].checked = false;
  } catch (err) {
    console.log(err);
  }
});

// Edit student funksiyasi
async function editStudent(id) {
  outerModal.classList.remove("hidden");
  select = id;
  try {
    let res = await axios.get(`https://69135d0ef34a2ff1170bb5ac.mockapi.io/students/${id}`);
    console.log(res.data);
    innerModal[0].value = res.data.email;
    innerModal[1].value = res.data.firstName;
    innerModal[2].value = res.data.lastName;
    innerModal[3].value = res.data.avatar;
    innerModal[4].value = res.data.experience;
    innerModal[5].value = res.data.age;
    innerModal[6].value = res.data.telegram;
    innerModal[7].value = res.data.linkedin;
    innerModal[8].value = res.data.profession;
    innerModal[9].value = res.data.phone;
    innerModal[10].value = res.data.rating;
    innerModal[11].checked = res.data.gender;
  } catch (err) {
    console.log(err);
  }
}
