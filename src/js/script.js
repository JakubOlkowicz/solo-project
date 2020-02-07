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

function validation()                                    
{ 
  const surname = document.forms['RegForm']['Surname'];               
  const name = document.forms['RegForm']['Name'];               
  const email = document.forms['RegForm']['EMail'];    
  const phone = document.forms['RegForm']['Telephone'];  
  const password = document.forms['RegForm']['Password'];  
  const repeat = document.forms['RegForm']['Repeat'];  

  if (repeat.value == password.value)                                  
  { 
    window.alert('Please enter again password.'); 
    repeat.focus(); 
    return false; 
  }

  if (surname.value == '')                                  
  { 
    window.alert('Please enter your surname.'); 
    surname.focus(); 
    return false; 
  }

  if (name.value == '')                                  
  { 
    window.alert('Please enter your name.'); 
    name.focus(); 
    return false; 
  }  
       
  if (email.value == '')                                   
  { 
    window.alert('Please enter a valid e-mail address.'); 
    email.focus(); 
    return false; 
  } 
   
  if (phone.value == '')                           
  { 
    window.alert('Please enter your telephone number.'); 
    phone.focus(); 
    return false; 
  } 
   
  if (password.value == '')                        
  { 
    window.alert('Please enter your password'); 
    password.focus(); 
    return false; 
  } 
  return true; 
}
validation();