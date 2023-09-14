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