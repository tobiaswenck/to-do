function appendToToDoList() {
    const textarea = document.querySelector('.text-container textarea'); 
    const listContainer = document.querySelector('.list-container ul'); 
    const text = textarea.value.trim(); 
    
    if (text) { 
        const li = document.createElement('li'); 
        li.textContent = text; 
        listContainer.appendChild(li); 
        textarea.value = ''; 
    }
}

document.getElementById('add').addEventListener('mousedown', function() {
    this.style.transform = 'scale(0.95)';
  });
  
  document.getElementById('add').addEventListener('mouseup', function() {
    this.style.transform = 'scale(1)';
  });
