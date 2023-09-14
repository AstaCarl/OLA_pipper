const mainContent = document.getElementById("main-content");

export function createAvatar(x) {
  console.log(x.id);


   // Clone template
   const clone = getTemplateClone();

   fillImage(clone, x);
   fillBrugernavn(clone, x);
  //  fillP(clone, x);
   fillPip(clone, x);
 
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
  
  function fillBrugernavn(clone, x) {
    // Udfylde minus knappen
    const brugernavnClone = clone.getElementById("brugernavn");
    // const cloneP = clone.getElementById("amount");
    brugernavnClone.id = "brugernavn-" + x.id;
  
    // minusClone.addEventListener("click", () => {
    //   if (Number(cloneP.innerText)) {
    //     cloneP.innerText = Number(cloneP.innerText) - 1;
    //     // TODO : Subtract 250kr from total
    //   }
    // });
  }
  
  function fillPip(clone, x) {
    // Udfylde nyt ID for amount plus button
    const pipClone = clone.getElementById("pip-besked");
    pipClone.id = "pip-besked-" + x.id;
  
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


