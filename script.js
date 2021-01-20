








var select = document.getElementById("select");
var text_in = document.getElementById("text_in");
var text_out = document.getElementById("text_out");





text_in.addEventListener("input",()=>
    {
         make_result();
    });
select.addEventListener("change",()=>
    {
         make_result();
    });


function make_result(){
   if (select.value == "decode")
        {
            text_out.value = window.atob(text_in.value) ;
        }
   
   else if (select.value == "encode")
        {
            text_out.value = window.btoa(text_in.value) ;
        }

}


// ar.onclick = () => {

//     set_lang("arabic");
//     localStorage.setItem("lang", "arabic");

// };

// fr.onclick = () => {

//     set_lang("français");
//     localStorage.setItem("lang", "français");

// };

// en.onclick = () => {

//     set_lang("english");
//     localStorage.setItem("lang", "english");

// };



// onload = () => { set_lang(localStorage.getItem("lang")); };


// function set_lang(lang)

//     {
//             if(lang === "arabic")
//                 {
//                     //tradcution.innerHTML = "أنا";
//                     tra_welcome.innerHTML = " مرحبا بكم في موقعي ";
//                     tra_txt_1.innerHTML = " الجافا هي لغة برمجة موجهة للكائنات أنشأها جايمس جاسلين و باتريك نوجتون ، موظفو سان مايكروسيستم ، بدعم من بيل جاو (المؤسس المشارك لشركة سان مايكروسيستم في عام 1982) ، والتي تم تقديمها رسميًا في 23 مايو 1995 في سان وورد. ";
                    
//                     tra_txt_2.innerHTML = "  الجافاسكريبت هي لغة برمجة نصية تُستخدم بشكل أساسي في صفحات الويب التفاعلية ، وبالتالي فهي جزء أساسي من تطبيقات الويب. إلى جانب تقنيات هاش تي ام ال و سي اس اس ، تُعتبر الجافاسكريبت أحيانًا إحدى التقنيات الأساسية لشبكة الويب العالمية 2";
                    
//                     tra_txt_3.innerHTML = "   البايثون هي لغة برمجة مفسرة ومتعددة النماذج ومتعددة المنصات. يشجع البرمجة الحتمية المنظمة والوظيفية والموجهة نحو الكائن. تتميز بالكتابة الديناميكية القوية وإدارة الذاكرة التلقائية عن طريق جمع القمامة ونظام إدارة الاستثناءات. ";

//                     tra_about.innerHTML = " معلومات عنا ";
//                     tra_ing.innerHTML = "مرحبًا بكم أنا من تونس وأعمل مهندس كمبيوتر وتكنولوجيا معلومات ";
//                     tra_contact.innerHTML = " إتصل بنا ";






//                 }

//             else if(lang === "français")
//                 {
//                     //tradcution.innerHTML = "Je";

//                     tra_welcome.innerHTML = " Bienvenu Dans Mon Site Web ! ";
//                     tra_txt_1.innerHTML = " Java est un langage de programmation orienté objet créé par James Gosling et Patrick Naughton, employés de Sun Microsystems, avec le soutien de Bill Joy (cofondateur de Sun Microsystems en 1982), présenté officiellement le 23 mai 1995 au SunWorld. ";
                    
//                     tra_txt_2.innerHTML = " JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives et à ce titre est une partie essentielle des applications web. Avec les technologies HTML et CSS, JavaScript est parfois considéré comme l'une des technologies cœur du World Wide Web2. " ;
                    
//                     tra_txt_3.innerHTML = " Paython est un langage de programmation interprété, multi-paradigme et multiplateformes. Il favorise la programmation impérative structurée, fonctionnelle et orientée objet. Il est doté d'un typage dynamique fort, d'une gestion automatique de la mémoire par ramasse-miettes et d'un système de gestion d'exceptions. ";

//                     tra_about.innerHTML = "  A propos de nous ";
//                     tra_ing.innerHTML = "Bonjour, je suis originaire de Tunisie et je travaille comme ingénieur informatique industrielle";
//                     tra_contact.innerHTML = " Nous contacter ";




//                 }

//             else if(lang === "english")
//                 {
//                     //tradcution.innerHTML = "I";

//                     tra_welcome.innerHTML = " Welcome To My Website ! ";
//                     tra_txt_1.innerHTML = " Java is an object oriented programming language created by James Gosling and Patrick Naughton, employees of Sun Microsystems, with the support of Bill Joy (co-founder of Sun Microsystems in 1982), officially presented on May 23, 1995 at SunWorld.  ";
                    
//                     tra_txt_2.innerHTML = " JavaScript is a scripting programming language primarily used in interactive web pages and as such is an essential part of web applications. Along with HTML and CSS technologies, JavaScript is sometimes considered one of the core technologies of the World Wide Web2.";
                    
//                     tra_txt_3.innerHTML = " Python is an interpreted, multi-paradigm, cross-platform programming language. It promotes structured, functional and object-oriented imperative programming. It has strong dynamic typing, automatic memory management by garbage collection and an exception management system. ";

//                     tra_about.innerHTML = "  About Us ";
//                     tra_ing.innerHTML = "I am from Tunisia and I work as a computer Industrial and IT engineer";
//                     tra_contact.innerHTML = " Contact Us";
//                 }
    
//     }


// run.onclick = () => {

//     output.innerHTML = textarea.value;
//     localStorage.setItem("sav", textarea.value);

// };


// remove.onclick = () => {

//     output.innerHTML = " ";

// };


// onload += () => { textarea.value = localStorage.getItem("sav"); }


