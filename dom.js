
// Show and Hide Form Add Student
document.getElementById("buttonShowAndHide").addEventListener('click',function()
{
    const formAddStudent = document.getElementById("formAddStudent");
    const buttonShowAndHide = document.getElementById("buttonShowAndHide");
    if(formAddStudent.style.display=="none"){
        formAddStudent.style.display = "block";
        buttonShowAndHide.textContent="Hide Form Add New Student";
    }
    else{
        formAddStudent.style.display="none";
        buttonShowAndHide.textContent="Show Form Add New Student";  

    }
});



const studentTable = document.getElementById("table-column");


let students = [
    {
        "nim" : "105021810010",
        "fullName" : "Mark Mononutu",
        "gender" : "Male",
        "faculty" : "Fakultas Ilmu Komputer",
        "programStudy" : "Informatika"
    },
    {
        "nim" : "105021810012",
        "fullName" : "Jibril Mononutu",
        "gender" : "Male",
        "faculty" : "Pascasarjana",
        "programStudy" : "Magister Manajemen"
    },
    {
        "nim" : "105021810013",
        "fullName" : "Wayne Rooney",
        "gender" : "Male",
        "faculty" : "Fakultas Ilmu Komputer",
        "programStudy" : "Sistem Informasi"
    }
 


]



//fungsi untuk mengupdate isi dari tabel
function update_table() {
    //clear table
    while(studentTable.children.length > 0) {
        studentTable.removeChild(studentTable.children[0]);
    }
    //mengisi di table
    for(let i=0; i<students.length; i++) {
        const row = studentTable.insertRow();
        
        const nim = row.insertCell(0);
        nim.innerHTML = students[i].nim;

        const fullName = row.insertCell(1);
        fullName.innerHTML = students[i].fullName;

        const gender = row.insertCell(2);
        gender.innerHTML = students[i].gender;

        const faculty = row.insertCell(3);
        faculty.innerHTML = students[i].faculty;

        const programStudy = row.insertCell(4);
        programStudy.innerHTML = students[i].programStudy;

        const deleteButton_cell = row.insertCell(5);
        
        const deleteButton = document.createElement("button");
        deleteButton.classList.add("fas");
        deleteButton.classList.add("fa-user-minus");
        deleteButton.classList.add("bg-danger");
        deleteButton.classList.add("p-2");
        
        //ketika klik button delete student
        deleteButton.addEventListener('click', () => {
            
            //Memberikan peringatan apakah akan menghapus 
            const konfirmasi= confirm("You want to delete this student?");
            if (konfirmasi==true){
                //menghapus satu elemen array
                students.splice(i, 1);
                update_table();
            }
            else{
                //tidak melakukan apa-apa
                
            }
        });

        deleteButton_cell.appendChild(deleteButton);
    }
}





//Daftar Jurusan dan Prodi untuk dimasukkan ke select box
let fakultasProdi = [
    {
    fakultas:"Pascasarjana",
    prodi:["Magister Manajemen","Magister Teologi"]
    },

    {
    fakultas:"Fakultas Filsafat",
    prodi:["Ilmu Filsafat"]
    },

    {
    fakultas:"Fakultas Keguruan dan Ilmu Pendidikan",
    prodi:["Pendidikan Agama", "Pendidikan Bahasa Inggris",
            "Pendidikan Ekonomi", "Pendidikan Luar Sekolah"]
    },
 
    {
    fakultas:"Fakultas Ekonomi dan Bisnis",
    prodi: ["Akuntansi", "Manajemen"]
    },

    {
    fakultas: "Fakultas Pertanian",
    prodi: ["Argoteknologi"]
    },

    {
    fakultas: "Fakultas Ilmu Komputer",
    prodi: ["Informatika","Sistem Informasi"]
    },


    {
    fakultas:"Fakultas Keperawatan",
    prodi: ["Keperawatan","Profesi Ners"]
    },

    {
    fakultas:"Akademi Sekretari Manajemen Indonesia Klabat",
    prodi: ["Sekretari (D3)"]
    },
];


 

//Filter by Faculty
function filterFaculty() {
    let filterFaculty = document.getElementById("filterByFaculty");
    filterFaculty = filterFaculty.options[filterFaculty.selectedIndex];
    
    while(studentTable.children.length > 0) {
        studentTable.removeChild(studentTable.children[0]);
    }

    for(let i=0; i<students.length; i++) {
        if(students[i].faculty == filterFaculty.text)
        {
        const row = studentTable.insertRow();
        
        const nim = row.insertCell(0);
        nim.innerHTML = students[i].nim;

        const fullName = row.insertCell(1);
        fullName.innerHTML = students[i].fullName;

        const gender = row.insertCell(2);
        gender.innerHTML = students[i].gender;

        const faculty = row.insertCell(3);
        faculty.innerHTML = students[i].faculty;

        const programStudy = row.insertCell(4);
        programStudy.innerHTML = students[i].programStudy;

        const deleteButton_cell = row.insertCell(5);
        
        let deleteButton = document.createElement("button");
        deleteButton.classList.add("fas");
        deleteButton.classList.add("fa-user-minus");
        deleteButton.classList.add("bg-danger");
        deleteButton.classList.add("p-2");
        
        //ketika klik button delete student
        deleteButton.addEventListener('click', () => {
            
            //Memberikan peringatan apakah akan menghapus 
            const konfirmasi= confirm("You want to delete this student?");
            // jika klik ok
            if (konfirmasi==true){
                //menghapus satu elemen array
                students.splice(i, 1);
                update_table();

                
            }
            // jika klik cancel
            else{
                //tidak melakukan apa-apa
                
            }
        });
    
        deleteButton_cell.appendChild(deleteButton);
    
     }  
    
    }
}

//Filter by Prody
function filterPrody() {
    let filterPrody = document.getElementById("filterByPrody");
    filterPrody = filterPrody.options[filterPrody.selectedIndex];
    
    while(studentTable.children.length > 0) {
        studentTable.removeChild(studentTable.children[0]);
    }

    for(let i=0; i<students.length; i++) {
        if(students[i].programStudy == filterPrody.text)
        {
        const row = studentTable.insertRow();
        
        const nim = row.insertCell(0);
        nim.innerHTML = students[i].nim;

        const fullName = row.insertCell(1);
        fullName.innerHTML = students[i].fullName;

        const gender = row.insertCell(2);
        gender.innerHTML = students[i].gender;

        const faculty = row.insertCell(3);
        faculty.innerHTML = students[i].faculty;

        const programStudy = row.insertCell(4);
        programStudy.innerHTML = students[i].programStudy;

        const deleteButton_cell = row.insertCell(5);
        
        let deleteButton = document.createElement("button");
        deleteButton.classList.add("fas");
        deleteButton.classList.add("fa-user-minus");
        deleteButton.classList.add("bg-danger");
        deleteButton.classList.add("p-3");
        
        
        //ketika klik button delete student
        deleteButton.addEventListener('click', () => {
            
            //Memberikan peringatan apakah akan menghapus 
            const konfirmasi= confirm("You want to delete this student?");
            // jika klik ok
            if (konfirmasi==true){
                //menghapus satu elemen array
                students.splice(i, 1);
                update_table();

                
            }
            // jika klik cancel
            else{
                //tidak melakukan apa-apa
                
            }
        });
    
        deleteButton_cell.appendChild(deleteButton);
    
     }  
    
    }
}
    

const buttonAddStudent = document.querySelector("#buttonAddStudent")
buttonAddStudent.addEventListener("click",()=>{

    const new_nim = document.querySelector("#inputSudentID").value;
    const new_fullName =  document.querySelector("#inputFullName").value;
    const new_gender = document.querySelector("input[name='gender']:checked").value;
    const new_faculty = document.querySelector("#selectFaculty").options[document.querySelector("#selectFaculty").selectedIndex].value;
    const new_prody = document.querySelector("#selectPrody").options[document.querySelector("#selectPrody").selectedIndex].value;

    const newColumn = document.querySelector('#table-column');
    newColumn.innerHTML = "";
    
    
    
    students.push({
        nim : new_nim,
        fullName:new_fullName,
        gender:new_gender,
        faculty:new_faculty,
        programStudy:new_prody
    });
    
    updateList();

});
function updateList()
{
    const newColumn = document.querySelector('#table-column');
    newColumn.innerHTML = "";

    for(student of students)
    {
        const trTag = document.createElement("tr");
        for(value in student)
        {
            const tdTag = document.createElement("td");
            const text = document.createTextNode(student[value]);
            tdTag.appendChild(text);

            trTag.appendChild(tdTag);
            newColumn.appendChild(trTag);
        }
        //Button - Delete
        const tdTag = document.createElement("td");
        const icon = `<button onclick="deleteRow(this)" type="button" class="bg-danger fas fa-user-minus p-2"> </button>`;
        tdTag.innerHTML = icon;
        trTag.appendChild(tdTag);

    }
}

function deleteRow(btn) 
{
	var row = btn.parentNode.parentNode;
	new_nim = (row.querySelector("tr td").textContent);

	const cf = confirm(`You want to delete this student?`);
 
    if(cf == true)
    {		
        students = students.filter((s) =>
        {
			return s.nim != new_nim;
		});

		updateList();
        console.log(students.length);
	}
}





//Search berdasarkan Nama mahasiswa di textbox search dengan fungsi update tapi compare string

const search_table = document.getElementById("searchStudentName");
function searching() {
    //clear table
    while(studentTable.children.length > 0) {
        studentTable.removeChild(studentTable.children[0]);
    }
    //mengisi di table
    for(let i=0; i<students.length; i++) {
        // Mengecek apakah nama ada di tabel (tidak case sensitive)
        if(students[i].fullName.toUpperCase().includes(search_table.value.toUpperCase())){
        
        // Memasukkan semua data mahasiswa ke tiap cell tabel
        const row = studentTable.insertRow();
        
        const nim = row.insertCell(0);
        nim.innerHTML = students[i].nim;

        const fullName = row.insertCell(1);
        fullName.innerHTML = students[i].fullName;

        const gender = row.insertCell(2);
        gender.innerHTML = students[i].gender;

        const faculty = row.insertCell(3);
        faculty.innerHTML = students[i].faculty;

        const programStudy = row.insertCell(4);
        programStudy.innerHTML = students[i].programStudy;

        const deleteButton_cell = row.insertCell(5);
        
        let deleteButton = document.createElement("button");
        deleteButton.classList.add("fas");
        deleteButton.classList.add("fa-user-minus");
        deleteButton.classList.add("bg-danger");
        deleteButton.classList.add("p-2");
        
        //ketika klik button delete student
        deleteButton.addEventListener('click', () => {
            
            //Memberikan peringatan apakah akan menghapus 
            const konfirmasi= confirm("You want to delete this student?");
            // jika klik ok
            if (konfirmasi==true){
                //menghapus satu elemen array
                students.splice(i, 1);
                update_table();

                
            }
            // jika klik cancel
            else{
                //tidak melakukan apa-apa
                
            }
        });
    
        deleteButton_cell.appendChild(deleteButton);
    
     }  
    
    }
}


//Dependent Select Box
// Select Box Fakultas
const liFaculty = document.querySelector('#selectFaculty');

for(f of fakultasProdi){
    const tagF = document.createElement('option');
    const contentF= document.createTextNode(f.fakultas);
    tagF.appendChild(contentF);
    liFaculty.appendChild(tagF);
}

//Select Box Prodi
const liPrody = document.querySelector('#selectPrody');
const tagForProdi = document.createElement('option');

liFaculty.addEventListener("click", (e) =>
{
    const facultyselected = e.target.value;
    let index = 0;

    liPrody.innerHTML = '<select class="form-control" id="selectFaculty"><option>-- SELECT PROGRAM OF STUDY --</option></select>';

    if(facultyselected == "Pascasarjana"){ 
        index = 0; }
    else if(facultyselected == "Fakultas Filsafat"){ 
        index = 1; }
    else if(facultyselected == "Fakultas Keguruan dan Ilmu Pendidikan"){ 
        index = 2; }
    else if(facultyselected == "Fakultas Ekonomi dan Bisnis"){ 
        index = 3; }
    else if(facultyselected == "Fakultas Pertanian"){ 
        index = 4; }
    else if(facultyselected == "Fakultas Ilmu Komputer") { 
        index = 5; }
    else if(facultyselected == "Fakultas Keperawatan"){ 
        index = 6; }
    else if(facultyselected == "Akademi Sekertaris Manajemen Indonesia Klabat"){ 
        index = 7; }

    for(s of fakultasProdi[index].prodi)
    {
        const tagForPrody = document.createElement('option');
        const contentPrody = document.createTextNode(s);    

        tagForPrody.appendChild(contentPrody);
        liPrody.appendChild(tagForPrody);
        console.log(s);
    }
});


update_table();


