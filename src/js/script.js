/* eslint-disable no-unused-vars */
function burgerSidebar(){
  const btn = document.getElementById('menu-toggle');
  const cls = { open: 'open', close: 'close' };
  const sidebar = document.getElementById('side');
  const body = document.getElementById('body');
  let btnClass = cls.open;
  btn.addEventListener('click', function(){
    if (btn.classList.contains(cls.open)) {
      btn.classList.remove(btnClass);
      btnClass = cls.close;
    } else if (btn.classList.contains(cls.close)) {
      btn.classList.remove(btnClass);
      btnClass = cls.open;
    }

    void btn.offsetWidth;
    btn.classList.add(btnClass);
    console.log(sidebar);
    sidebar.classList.toggle('dis-block');
    body.classList.toggle('grid');
  });
}
burgerSidebar();

// function validation()                                    
// { 
//   const surname = document.forms['RegForm']['Surname'];               
//   const name = document.forms['RegForm']['Name'];               
//   const email = document.forms['RegForm']['EMail'];    
//   const phone = document.forms['RegForm']['Telephone'];  
//   const password = document.forms['RegForm']['Password'];  
//   const repeat = document.forms['RegForm']['Repeat'];  

//   if (repeat.value == password.value)                                  
//   { 
//     window.alert('Please enter again password.'); 
//     repeat.focus(); 
//     return false; 
//   }

//   if (surname.value == '')                                  
//   { 
//     window.alert('Please enter your surname.'); 
//     surname.focus(); 
//     return false; 
//   }

//   if (name.value == '')                                  
//   { 
//     window.alert('Please enter your name.'); 
//     name.focus(); 
//     return false; 
//   }  
       
//   if (email.value == '')                                   
//   { 
//     window.alert('Please enter a valid e-mail address.'); 
//     email.focus(); 
//     return false; 
//   } 
   
//   if (phone.value == '')                           
//   { 
//     window.alert('Please enter your telephone number.'); 
//     phone.focus(); 
//     return false; 
//   } 
   
//   if (password.value == '')                        
//   { 
//     window.alert('Please enter your password'); 
//     password.focus(); 
//     return false; 
//   } 
//   return true; 
// }
// validation();

/* Icons */ 
// const messagerIcon = document.getElementById('pop-messager');
const quitIcon = document.getElementById('pop-quit');
const profilIcon = document.getElementById('pop-profil');
/* Pops-up */
const  login = document.getElementById('login');
const quit = document.getElementById('quit');
/* Button */
const btnCancel = document.getElementById('btnCancel');
const btnQuit = document.getElementById('btnQuit');
function popupsLogin(){
  console.log(login);
  login.classList.add('up');
}
function popupsQuit(){
  quit.classList.add('up');
}
function popupsCancel(){
  login.classList.remove('up');
  quit.classList.remove('up');
}
// Pop-Ups Login


// Pop-ups Quit

// popUps();

function sidebarActive(){
  const sidebars = document.querySelectorAll('.sidebar-menu');
  for(let sidebar of sidebars){
    sidebar.addEventListener('click', function(event){
      event.preventDefault();
      // console.log('To ja', sidebar);
      const idSidebar = sidebar.getAttribute('id');
      const pages = document.querySelectorAll('.container');
      sidebar.classList.remove('side-click');
      for(let page of pages){
        page.classList.remove('active');
        const idPage = page.getAttribute('id');
        if(idSidebar == idPage){
          page.classList.add('active');
          sidebar.classList.add('side-click');
          console.log('dodałem', idSidebar);
        } else {
          page.classList.remove('active');
          sidebar.classList.remove('side-click');
          console.log('zabrałem', idSidebar);

        }
      }
    });
  }
}
sidebarActive();

var ctx = document.getElementById('myChart').getContext('2d');
// eslint-disable-next-line no-undef
var chart = new Chart(ctx, {
  // 1
  type: 'bar',
  data: {
    // 2
    labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
    // 3
    datasets: [{
      // 4
      label: 'Signups',
      // 5
      backgroundColor: '#8DBEC8',
      borderColor: '#8DBEC8',
      // 6
      data: [ 52, 51, 41, 94, 26, 6, 72, 9, 21, 88 ],
    },
    {
      label: 'FTD',
      backgroundColor: '#F29E4E',
      borderColor: '#F29E4E',
      data: [ 6, 72, 1, 0, 47, 11, 50, 44, 63, 76 ],
    },
    {
      label: 'Earned',
      backgroundColor: '#71B374',
      borderColor: '#71B374',
      data: [ 59, 49, 68, 90, 67, 41, 13, 38, 48, 48 ],
      // 7
      hidden: true,
    }]
  },
});