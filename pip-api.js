//const URL = "https://127.0.0.1:3306/ole_pipper?user=root?password=PASSWORD=Mgz87-jrg'";
const URL = "http://127.0.0.1:8000/pip";
// const apikey =
   //"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV2anVhbGhoeGNqd3JoYmp1eHBwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQwMDI1OTMsImV4cCI6MjAwOTU3ODU5M30.s9Q3pShvbvlxD713RunCvHWaa7wLcPetO51HL95_egs";

export async function fetchPips() {
  const response = await fetch(URL, {
    // headers: {
    //   method: get
    // },
  });
  const body = await response.json();
  console.log(body);

  return body;
}

export async function postPip(data) {
  console.log("data", data);
  const response = await fetch(URL, {
    method: "POST",
    body: JSON.stringify(data),
  });
  console.log(response);

  const body = await response.json();
  console.log(body);

  return body;
}
/*
const form = document.getElementById("form");

form.addEventListener("submit", async (event) => {
  console.log("Hello from Form");
  event.preventDefault();
  const data = new FormData(form);

  const name = data.get("brugernavn");
  console.log(name);

  const pip = data.get("pip");
  console.log(pip);

  const image = data.get("img");
  console.log(image);

  const base64 = await imageToBase64(image);
  console.log(base64);

  const newPip = {
    name: name,
    pip: pip,
    img_base64: base64,
  };

  const x = postPip(newPip);

  fetch("127.0.0.1:8000", {
    method: "POST",
    body: JSON.stringify({"name": name, "pip": pip, "img": img})
  })

});
*/
