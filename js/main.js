let teachers = document.getElementById("teachers");
let addTeacherBtn = document.getElementById("add-teacher");


let select = null;

addTeacherBtn.addEventListener("click" , function(){
    addOuterModal();
})

outerModal.addEventListener("click" , function(){
    removeOuterModal();
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
})

innerModal.addEventListener("click" , function(e){
    e.stopPropagation();
})



async function getTeachers() {
    try {
        let res = await axios("https://69135d0ef34a2ff1170bb5ac.mockapi.io/Teachers/");
        console.log(res.data);
        teachers.innerHTML = "";
        res.data.map(el => {
            teachers.innerHTML += `
        <div class="border-[1px] max-w-[400px] w-full px-[10px] pt-[20px] rounded-[6px] dark:border-gray-800 mb-[20px]">
          <div class="flex justify-between">
            <div class="flex flex-col">
              <h1 class="text-[15px] font-bold">${el.firstName} ${el.lastName}</h1>
              <p class="text-[12px] text-[#6E7681] pt-[5px] line-clamp-[1]">Age: ${el.age}</p>
              <p class="text-[12px] text-[#6E7681] pt-[5px] line-clamp-[1]">Experience: ${el.experience}</p>
              <div class="flex items-center gap-[5px] pt-[5px]">
                <p class="text-[12px] text-[#6E7681]">${el.email}</p>
              </div>
              <p class="text-[12px] text-[#6E7681] pt-[5px] line-clamp-[1]">${el.phone}</p>
              <p class="text-[12px] text-[#6E7681] pt-[5px] line-clamp-[1]">${el.telegram}</p>
              <button class="h-[30px] w-[120px] rounded-[6px] mt-[20px] mb-[15px] dark:bg-gray-800 hover:bg-[#21262D]/90">
                <a class="text-[13px] text-[#C9D1D9]" href="../pages/students.html?teacherId=${el.id}">All Students</a>
              </button>
            </div>
            <div class="relative">
              <button class="dropdown-btn inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                <span class="sr-only">Open dropdown</span>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                  <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                </svg>
              </button>
              <!-- Dropdown menu -->
              <div class="dropdown-menu hidden absolute right-0 mt-2 w-28 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-700">
                <ul class="py-2 text-base px-[10px] text-gray-700 dark:text-gray-200">
                  <button
                    onClick="editTeacher(${el.id})"
                    <p class="block px-4 py-2">Edit</p>
                  </button>
                  <button
                  onClick="deleteTeacher(${el.id})"
                  
                    <a class="block px-4 py-2 text-white-600 ">Delete</a>
                  </button>
                </ul>
              </div>
              <img class="w-[60px] rounded-[150px] mt-[10px]" src="${el.avatar}" alt="avatar">
              <p class="text-[14px] text-[gray] font-bold mt-[5px]">${el.gender ? "Erkak" : "Ayol"}</p>
            </div>
          </div>
        </div>
      `;
        });

        document.addEventListener('click', function (event) {
            let btn = event.target.closest('.dropdown-btn');
            document.querySelectorAll('.dropdown-menu').forEach(menu => {
                if (menu !== btn?.nextElementSibling) {
                    menu.classList.add('hidden');
                }
            });

            if (btn) {
                let menu = btn.nextElementSibling;
                menu.classList.remove('hidden');
                event.stopPropagation();
                event.preventDefault();
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
getTeachers();

async function deleteTeacher(id){
    try{
        await axios.delete(`https://69135d0ef34a2ff1170bb5ac.mockapi.io/Teachers/${id}`);
        getTeachers();
    }catch(err){
        console.log(err);
    }
}


innerModal.addEventListener("submit" , async function(e){
    e.preventDefault();
    let options = {}
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
    
    try{
        select ? await axios.put(`https://69135d0ef34a2ff1170bb5ac.mockapi.io/Teachers/${select}`, options) :
            await axios.post(`https://69135d0ef34a2ff1170bb5ac.mockapi.io/Teachers/`, options);
        getTeachers();
        outerModal.classList.add("hidden")
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
    }catch(err){
        console.log(err);
    }
})


async function editTeacher(id){
    outerModal.classList.remove("hidden");
    select = id;
    try{
        let res = await axios.get(`https://69135d0ef34a2ff1170bb5ac.mockapi.io/Teachers/${id}`);
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
    }catch(err){
        console.log(err);
    }
}