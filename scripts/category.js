const url = `https://shrtct-2d24.restdb.io/rest/shortcut?q{"$distinct" : "software"}`;
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

  const template = document.querySelector("#shortcutTemplate").content;

  //clone it

  const copy = template.cloneNode(true);

  //change content
  let id = software._id;
  copy.querySelector(".shortcutCard h2").textContent = software.shortcut_name;
  copy
    .querySelector(" .shortcutCard a")
    .setAttribute("href", `shortcut.html?id=` + id);

  //setAttribute("href", "subcategory.html?program=" + program)

  const parent = document.querySelector("main article");

  parent.appendChild(copy);
}
