
// let path = new URLSearchParams(location.search);
// let teacherId = path.get("teacherId");


// let studentsContainer = document.getElementById("students");
// let addStudentBtn = document.getElementById("add-student");
// let outerModal = document.getElementById("outer-modal");
// let innerModal = document.getElementById("inner-modal");


// let select = null;


// addStudentBtn.addEventListener("click", function () {
//   outerModal.classList.remove("hidden");
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
// });


// outerModal.addEventListener("click", function () {
//   outerModal.classList.add("hidden");
//   select = null;
//  innerModal[0].value = "";
//  innerModal[1].value = "";
//  innerModal[2].value = "";
//  innerModal[3].value = "";
//  innerModal[4].value = "";
//  innerModal[5].value = "";
//  innerModal[6].value = "";
//  innerModal[7].value = "";
//  innerModal[8].value = "";
//  innerModal[9].value = "";
//  innerModal[10].value = "";
//  innerModal[11].checked = false;
// });


// innerModal.addEventListener("click", function (e) {
//   e.stopPropagation();
// });


// async function getStudents() {
//   try {
//     let url = teacherId
//       ? `https://69135d0ef34a2ff1170bb5ac.mockapi.io/Teachers/${teacherId}/students/`
//       : `https://69135d0ef34a2ff1170bb5ac.mockapi.io/students/`;
//     let res = await axios.get(url);
//     console.log(res.data);
//     studentsContainer.innerHTML = "";

//     res.data.map(el => {
//       studentsContainer.innerHTML += `
//                 <div class="group relative max-w-[320px] w-full h-[290px] overflow-hidden rounded-lg shadow-md">
//                 <img src="${el.avatar}" alt="avatar" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
//                 <div class="absolute inset-0 bg-black/60 flex flex-col items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   <button class="dropdown-btn ml-[230px] inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
//                       <span class="sr-only">Open dropdown</span>
//                       <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
//                           <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
//                       </svg>
//                   </button>
//                   <div class="dropdown-menu hidden absolute right-0 mt-2 w-28 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-700">
//                       <ul class="py-2 text-base px-[10px] text-gray-700 dark:text-gray-200">
//                       <button onClick="editStudent(${el.id})"><p class="block px-4 py-2">Edit</p></button>
//                       <button onClick="deleteStudent(${el.id})"><p class="block px-4 py-2 text-red-600">Delete</p></button>
//                       </ul>
//                   </div>
//                 <h5 class="text-white text-lg font-semibold">${el.firstName} ${el.lastName}</h5>
//                   <p class="text-gray-200 text-sm">${el.telegram}</p>
//                   <a href="../pages/student-info.html?studentId=${el.id}"
//                     class="mt-4 inline-block px-4 py-2 bg-white text-black rounded hover:bg-gray-200 transition">
//                     Student Info
//                   </a>
//                 </div>
//               </div>

//       `;
//     });

//     document.addEventListener('click', function (event) {
//       const btn = event.target.closest('.dropdown-btn');
//       document.querySelectorAll('.dropdown-menu').forEach(menu => {
//         if (menu !== btn?.nextElementSibling) {
//           menu.classList.add('hidden');
//         }
//       });

//       if (btn) {
//         const menu = btn.nextElementSibling;
//         menu.classList.remove('hidden');
//         event.stopPropagation();
//       } else {
//         document.querySelectorAll('.dropdown-menu').forEach(menu => {
//           menu.classList.add('hidden');
//         });
//       }
//     });

//   } catch (err) {
//     console.log(err);
//   }
// }
// getStudents();


// async function deleteStudent(id) {
//   try {
//     await axios.delete(`https://69135d0ef34a2ff1170bb5ac.mockapi.io/students/${id}`);
//     getStudents();
//   } catch (err) {
//     console.log(err);
//   }
// }


// innerModal.addEventListener("submit", async function (e) {
//   e.preventDefault();
//   let options = {};
//   console.log(options.email = e.target[0].value);
//   console.log(options.firstName = e.target[1].value);
//   console.log(options.lastName = e.target[2].value);
//   console.log(options.avatar = e.target[3].value);
//   console.log(options.experience = e.target[4].value);
//   console.log(options.age = e.target[5].value);
//   console.log(options.telegram = e.target[6].value);
//   console.log(options.linkedin = e.target[7].value);
//   console.log(options.profession = e.target[8].value);
//   console.log(options.phone = e.target[9].value);
//   console.log(options.rating = e.target[10].value);
//   console.log(options.gender = e.target[11].checked);
  
//   select = id;

//   try {
//      select ? await axios.put(`https://69135d0ef34a2ff1170bb5ac.mockapi.io/students/${select}`, options) :
//       await axios.post(`https://69135d0ef34a2ff1170bb5ac.mockapi.io/students/`, options);
//     getStudents();
//     outerModal.classList.add("hidden");
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
// });


// async function editStudent(id) {
//   outerModal.classList.remove("hidden");
//   select = id;
//   try {
//     let res = await axios.get(`https://69135d0ef34a2ff1170bb5ac.mockapi.io/students/${select}`);
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



let path = new URLSearchParams(location.search);
let teacherId = path.get("teacherId");

let studentsContainer = document.getElementById("students");
let addStudentBtn = document.getElementById("add-student");
let outerModal = document.getElementById("outer-modal");
let innerModal = document.getElementById("inner-modal");

let select = null;

// ------------------- MODAL --------------------
addStudentBtn.addEventListener("click", function () {
  outerModal.classList.remove("hidden");
  select = null;

  // Forma tozalash
  for (let i = 0; i < innerModal.length; i++) {
    if (innerModal[i].type === "checkbox") {
      innerModal[i].checked = false;
    } else {
      innerModal[i].value = "";
    }
  }
});

outerModal.addEventListener("click", function () {
  outerModal.classList.add("hidden");
  select = null;

  for (let i = 0; i < innerModal.length; i++) {
    if (innerModal[i].type === "checkbox") {
      innerModal[i].checked = false;
    } else {
      innerModal[i].value = "";
    }
  }
});

innerModal.addEventListener("click", function (e) {
  e.stopPropagation();
});

// ------------------- GET STUDENTS --------------------
async function getStudents() {
  try {
    let url = teacherId
      ? `https://69135d0ef34a2ff1170bb5ac.mockapi.io/Teachers/${teacherId}/students/`
      : `https://69135d0ef34a2ff1170bb5ac.mockapi.io/students/`;

    let res = await axios.get(url);
    studentsContainer.innerHTML = "";

    res.data.forEach(el => {
      studentsContainer.innerHTML += `
        <div class="group relative max-w-[320px] w-full h-[290px] overflow-hidden rounded-lg shadow-md">
          <img src="${el.avatar}" alt="avatar" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
          <div class="absolute inset-0 pb-[90px] bg-black/60 flex flex-col items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button class="dropdown-btn ml-[200px] mb-[30px] inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 16 3">
                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
              </svg>
            </button>
            <div class="dropdown-menu hidden absolute right-0 mt-2 w-28 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-700">
              <ul class="py-2 text-base px-[10px] text-gray-700 dark:text-gray-200">
                <button onClick="editStudent(${el.id})"><p class="block px-4 py-2">Edit</p></button>
                <button onClick="deleteStudent(${el.id})"><p class="block px-4 py-2 text-red-600">Delete</p></button>
              </ul>
            </div>
            <h5 class="text-white text-lg font-semibold">${el.firstName} ${el.lastName}</h5>
            <p class="text-gray-200 text-sm">${el.telegram}</p>
            <a href="../pages/student-info.html?studentId=${el.id}"
              class="mt-4 inline-block px-4 py-2 bg-white text-black rounded hover:bg-gray-200 transition">
              Student Info
            </a>
          </div>
        </div>`;
    });

    document.addEventListener("click", function (event) {
      const btn = event.target.closest(".dropdown-btn");
      document.querySelectorAll(".dropdown-menu").forEach(menu => {
        if (menu !== btn?.nextElementSibling) {
          menu.classList.add("hidden");
        }
      });

      if (btn) {
        const menu = btn.nextElementSibling;
        menu.classList.remove("hidden");
        event.stopPropagation();
      }
    });

  } catch (err) {
    console.log("Get students error:", err);
  }
}

getStudents();

// ------------------- DELETE STUDENT --------------------
async function deleteStudent(id) {
  try {
    let url = teacherId
      ? `https://69135d0ef34a2ff1170bb5ac.mockapi.io/Teachers/${teacherId}/students/${id}`
      : `https://69135d0ef34a2ff1170bb5ac.mockapi.io/students/${id}`;

    await axios.delete(url);
    await getStudents();
  } catch (err) {
    console.log("Delete student error:", err);
  }
}

// ------------------- SUBMIT (ADD yoki EDIT) --------------------
innerModal.addEventListener("submit", async function (e) {
  e.preventDefault();

  let options = {
    email: e.target[0].value,
    firstName: e.target[1].value,
    lastName: e.target[2].value,
    avatar: e.target[3].value,
    experience: e.target[4].value,
    age: e.target[5].value,
    telegram: e.target[6].value,
    linkedin: e.target[7].value,
    profession: e.target[8].value,
    phone: e.target[9].value,
    rating: e.target[10].value,
    gender: e.target[11].checked
  };

  try {
    if (select) {
      let url = teacherId
        ? `https://69135d0ef34a2ff1170bb5ac.mockapi.io/Teachers/${teacherId}/students/${select}`
        : `https://69135d0ef34a2ff1170bb5ac.mockapi.io/students/${select}`;

      await axios.put(url, options);
    } else {
      let url = teacherId
        ? `https://69135d0ef34a2ff1170bb5ac.mockapi.io/Teachers/${teacherId}/students/`
        : `https://69135d0ef34a2ff1170bb5ac.mockapi.io/students/`;

      await axios.post(url, options);
    }

    await getStudents();
    outerModal.classList.add("hidden");
    select = null;

    for (let i = 0; i < innerModal.length; i++) {
      if (innerModal[i].type === "checkbox") {
        innerModal[i].checked = false;
      } else {
        innerModal[i].value = "";
      }
    }

  } catch (err) {
    console.log("Submit student error:", err);
  }
});

// ------------------- EDIT STUDENT --------------------
async function editStudent(id) {
  outerModal.classList.remove("hidden");
  select = id;

  try {
    let url = teacherId
      ? `https://69135d0ef34a2ff1170bb5ac.mockapi.io/Teachers/${teacherId}/students/${select}`
      : `https://69135d0ef34a2ff1170bb5ac.mockapi.io/students/${select}`;

    let res = await axios.get(url);

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
    console.log("Edit student error:", err);
  }
}
