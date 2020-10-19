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





