function dragstartHandler(ev) {
  ev.dataTransfer.setData("substance_dragged", ev.target.id);
}

function dragoverHandler(ev) {
  ev.preventDefault();
}

function dropHandler(ev) {
  ev.preventDefault();
  const substance_dropped_id = ev.target.id;
  const substance_dragged_id = ev.dataTransfer.getData("substance_dragged");
  equationHandler(substance_dragged_id, substance_dropped_id);
}

function animationHandler(container) {
 container.classList.add("entering");
 setTimeout(() => {
    container.classList.remove("entering");
 }, 1);
}

function equationHandler(sub1, sub2) {
  const box = document.getElementById(sub2).parentNode;
  switch (true) {
    case sub1 == "iron_ingot" && sub2 == "copper(II)sulfate":
      box.innerHTML = `<img
            
            id="copper_ingot"
            src="./hoahoc15/copper_ingot.png"
            alt="mảnh đồng"
          ></img>
          
           <img
            
            id="iron(II)sulfate"
            src="./hoahoc15/iron(II)sulfate.png"
            alt="dung dịch iron(II)sulfate"
          ></img>`;
      break;

    case sub1 == "raw_iron" && sub2 == "furnace_unlit":
      box.innerHTML = `<img  id="coal" src="./hoahoc15/coal.png" alt="than" draggable="true" ondragstart="dragstartHandler(event)">
          
            <img
            
            id="furnace_unlit"
            src="./hoahoc15/furnace_unlit.webp"
            alt="lò nung chưa đốt"
            ondrop="dropHandler(event)"
            ondragover="dragoverHandler(event)"
            />`;
      break;

    case sub1 == "coal" && sub2 == "furnace_unlit":
        box.innerHTML = `<img
            
            id="furnace_lit"
            src="./hoahoc15/furnace_lit.webp"
            alt="lò nung đốt"
            ondrop="dropHandler(event)"
            ondragover="dragoverHandler(event)"
              /> `
        
        setTimeout(() => {
        box.innerHTML = `
              <img
                
                id="iron_ingot"
                src="./hoahoc15/iron_ingot.png"
                alt="mảnh sắt"
                draggable="true"
                ondragstart="dragstartHandler(event)"
              />

            <img
            
            id="furnace_unlit"
            src="./hoahoc15/furnace_unlit.webp"
            alt="lò nung chưa đốt"
            ondrop="dropHandler(event)"
            ondragover="dragoverHandler(event)"
              />      
      
      `;
      animationHandler(box);
        },1000)        

      break;

    default:
      alert("Hai chất này không phản ứng được!");
      return;
  }
  animationHandler(box)
}
