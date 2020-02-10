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

function popUps(){
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
  
  window.opener = self;
  // Pop-Ups Login
  profilIcon.addEventListener('click',function(){
    login.style.display = 'flex';
  });

  // Pop-ups Quit
  quitIcon.addEventListener('click', function(){
    quit.style.display = 'flex';
  });
  btnCancel.addEventListener('click', function(){
    quit.style.display = 'none';
  });
  btnQuit.addEventListener('click', function(){
    window.close();
    quit.style.display = 'none';
  });
}
popUps();

function sidebarActive(){
  const sidebars = document.querySelectorAll('.sidebar-menu');
  for(let sidebar of sidebars){
    sidebar.addEventListener('click', function(event){
      event.preventDefault();
      // console.log('To ja', sidebar);
      const idSidebar = sidebar.getAttribute('id');
      const pages = document.querySelectorAll('.container');
      for(let page of pages){
        page.classList.remove('active');
        const idPage = page.getAttribute('id');
        if(idSidebar === idPage){
          page.classList.add('active');
          sidebar.classList.add('side-click');
        } else {
          page.classList.remove('active');
          sidebar.classList.remove('side-click');
        }
      }
    });
  }
}
sidebarActive();