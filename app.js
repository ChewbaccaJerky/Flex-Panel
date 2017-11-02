const panels = document.querySelectorAll('.panel');
console.log(panels);


const defaultSize = function defaultSize(){
  panels.forEach(panel => {
    panel.style.width = '20%';
  });
};

const changeSize = function update(e){
  defaultSize();
  e.target.style.width = '50%';
};

panels.forEach((panel)=>{
  panel.addEventListener('click', changeSize);
});
