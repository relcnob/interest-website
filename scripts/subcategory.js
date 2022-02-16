const urlParams = new URLSearchParams(window.location.search);
// const query = urlParams.get("q");
// const id = urlParams.get("id");
let subcategory = "Visual Studio Code";
const url =
  `https://shrtct-2d24.restdb.io/rest/shortcut?q={"software" : "` +
  subcategory +
  `" }`;
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
  document.querySelector(".grid h1").textContent = subcategory;
}

function showSoftware(software) {
  console.log(software);

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

  //   let windowsShortcutIcon = software.windows_shortcut;

  //   windowsShortcutIcon.forEach(showButtons(copy, windowsShortcutIcon));
  //   function showButtons(copy, key) {
  //     console.log(key);

  //     //creates span
  //     let button = document.createElement("span");
  //     button.classList.add("key");
  //     let text = document.createTextNode(key);
  //     button.appendChild(text);
  //     copy.querySelector(".shortcutWindows").appendChild(button);
  //   }
  const parent = document.querySelector("main article");

  parent.appendChild(copy);
}
