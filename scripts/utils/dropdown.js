function DropDown(dropDown) {
    const [toggler, menu] = dropDown.children;
    
    const handleClickOut = e => {
      if(!dropDown) {
        return document.removeEventListener('click', handleClickOut);
      }
      
      if(!dropDown.contains(e.target)) {
        this.toggle(false);
      }
    };
    
    const setValue = (item) => {
      const val = item.textContent;
      toggler.textContent = val;
      this.value = val;
      this.toggle(false);
      dropDown.dispatchEvent(new Event('change'));
      toggler.focus();
    }
    
    const handleItemKeyDown = (e) => {
      e.preventDefault();
      
      if(e.keyCode === 38 && e.target.previousElementSibling) { // up
        e.target.previousElementSibling.focus();
      } else if(e.keyCode === 40 && e.target.nextElementSibling) { // down
        e.target.nextElementSibling.focus();
      } else if(e.keyCode === 27) { // escape key
        this.toggle(false);
      } else if(e.keyCode === 13 || e.keyCode === 32) { // enter or spacebar key
        console.log(e.target.innerText)
        switch (e.target.innerText) {
          case 'Date':
            sortByDate()
            break;

          case 'Popularité':
            sortByPop()
            break;
        
          case 'Titre':
            sortByTitle()
            break;

          default:
            break;
        }
        setValue(e.target);
      } else if (e.keyCode === 9) {
        console.log(e.keyCode)
        document.getElementById("portfolio").focus()
      }
    }
  
    const handleToggleKeyPress = (e) => {
      e.preventDefault();
  
      if(e.keyCode === 27) { // escape key
        this.toggle(false);
      } else if(e.keyCode === 13 || e.keyCode === 32) { // enter or spacebar key
        this.toggle(true);
      } else if (e.keyCode === 9) {
        console.log(e.keyCode)
        document.getElementById("portfolio").focus()
      }
    }
    
    toggler.addEventListener('keydown', handleToggleKeyPress);
    toggler.addEventListener('click', () => this.toggle());
    [...menu.children].forEach(item => {
      item.addEventListener('keydown', handleItemKeyDown);
      item.addEventListener('click', () => setValue(item));
    });
    
    this.element = dropDown;
    
    this.value = toggler.textContent;
    
    this.toggle = (expand = null) => {
      expand = expand === null
        ? menu.getAttribute('aria-expanded') !== 'true'
        : expand;
  
      menu.setAttribute('aria-expanded', expand);
      
      if(expand) {
        toggler.classList.add('active');
        menu.children[0].focus();
        document.addEventListener('click', handleClickOut);
        dropDown.dispatchEvent(new Event('opened'));
      } else {
        toggler.classList.remove('active');
        dropDown.dispatchEvent(new Event('closed'));
        document.removeEventListener('click', handleClickOut);
      }
    }
  }
  
const dropDown = new DropDown(document.querySelector('.dropdown'));