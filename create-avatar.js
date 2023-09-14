const mainContent = document.getElementById("main-content");

export function createAvatar(x) {
  console.log(x.id);
   // Clone template
   const clone = getTemplateClone();

   fillImage(clone, x);
   fillMinusButton(clone, x);
   fillP(clone, x);
   fillAddButton(clone, x);
 
   // Sætter den udfyldte kopi ind på hjemmesiden
   mainContent.appendChild(clone);
 }
 
 function getTemplateClone() {
   // Hiver fat i skabelonen fra HTML
   const template = document.getElementById("template");
 
   // Clone template
   const clone = document.importNode(template.content, true);
   return clone;
 }


 /*   kode skal modiceres*/ 

 
 function getTemplateClone() {
    // Hiver fat i skabelonen fra HTML
    const template = document.getElementById("template");
  
    // Clone template
    const clone = document.importNode(template.content, true);
    return clone;
  }
  
  function fillImage(clone, x) {
    console.log(x);
  
    if (x.imgUrl) {
      // Hente billede fra imgUrl
      // Udfylder img på kopien
      const img = clone.getElementById("img");
      img.src = x.imgUrl;
      img.id = "image-" + x.id;
    } else if (x.img_base64) {
      // Hente billede fra base64
      const img = clone.getElementById("img");
      img.src = x.img_base64;
    }
  }
  
  function fillMinusButton(clone, x) {
    // Udfylde minus knappen
    const minusClone = clone.getElementById("minus-button");
    const cloneP = clone.getElementById("amount");
    minusClone.id = "minus-button-" + x.id;
  
    minusClone.addEventListener("click", () => {
      if (Number(cloneP.innerText)) {
        cloneP.innerText = Number(cloneP.innerText) - 1;
        // TODO : Subtract 250kr from total
      }
    });
  }
  
  function fillAddButton(clone, x) {
    // Udfylde nyt ID for amount plus button
    const addClone = clone.getElementById("add-button");
    const cloneP = clone.getElementById("amount");
    addClone.id = "add-button-" + x.id;
  
    addClone.addEventListener("click", () => {
      console.log("hej fra plus knap");
      cloneP.innerText = Number(cloneP.innerText) + 1;
    });
  }
  
  function fillP(clone, x) {
    // Udfylde nyt ID for amount p-tag
    const cloneP = clone.getElementById("amount");
    cloneP.id = "amount-" + x.id;
  }