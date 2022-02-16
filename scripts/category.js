const url = `https://shrtct-2d24.restdb.io/rest/shortcut?q={"$distinct" : "software"}`;
// api-key :

const options = {
  headers: { "x-apikey": "620cdf7d34fd62156585865e" },
};
fetch(url, options)
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    //we have the data

    handleSoftwareList(data);
  })
  .catch((e) => {
    //woops, something went wrong
    console.error("An error occured:", e.message);
  });

function handleSoftwareList(data) {
  console.log(data);
  //   console.log(shortcut._id);
  data.forEach(showSoftware);
}

function showSoftware(software) {
  //grab template

  console.log(software);

  //clone it
  const catTemplate = document.querySelector("#categoryTemplate").content;
  const clone = catTemplate.cloneNode(true);
  clone
    .querySelector(".softwareCard")
    .setAttribute("href", `subcategory.html?program=` + software);
  clone.querySelector(".softwareCard span").textContent = software;
  const parent = document.querySelector(".grid");
  parent.appendChild(clone);
}
