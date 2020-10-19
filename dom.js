// // Show and Hide Form Add Student
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

const liFaculties = document.getElementById('selectFaculty');

const faculty = [
    {
    fakultas:"Pascasarjana",
    prodi:["Magister","Sistem Informasi"]
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
]



const liFaculties = document.querySelector('selectFaculty');
// const tagOptionFaculty = document.createElement('option');
// for(f of faculty){
//     const tagFaculty = document.createElement('option');
//     const facultycontent = document.createTextNode(f.fakultas);
//     tagFaculty.appendChild(facultycontent);
//     liFaculties.appendChild(tagFaculty);
// }

// const Prodies = document.getElementById('selectPrody');
// const tagOptionPrody = document.createElement('option');

// faculties.addEventListener("click", (e) =>{
// const select = e.target.value;
// let pilih;

// if(select == "Pascasarjana"){
//     pilih = 0;
// }
// else if(select == "Fakultas Filsafat"){
//     pilih = 1;
// }
// else if(select == "Fakultas Keguruan dan Ilmu Pendidikan"){
//     pilih = 2;
// }
// else if(select == "Fakultas Ekonomi dan Bisnis"){
//     pilih = 3;
// }
// else if (select == "Fakultas Pertanian"){
//     pilih = 4;
// }
// else if (select =="Fakultas Ilmu Komputer"){
//     pilih = 5;
// }
// else if (select == "Fakultas Keperawatan"){
//     pilih = 6;
// }
// else if (select == "Akademi Sekretari Manajemen Indonesia Klabat"){
//     pilih = 7;
// }

// // for(p of faculties[pilih].prodi)
// // {
// //     const tagOptionPrody = document.createElement('option');
// //     const ProdyContent = document.createTextNode(p)

// //     tagOptionPrody.appendChild(ProdyContent)
// //     Prodies.appendChild(tagOptionPrody);
// // }



// });







