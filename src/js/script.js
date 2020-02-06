function burgerSidebar(){
  const btn = document.getElementById('menu-toggle');
  // const lines = btn.querySelectorAll('.line');
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