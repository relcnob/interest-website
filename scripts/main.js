console.log("main.js init");
const urlParams = new URLSearchParams(window.location.search);
// const query = urlParams.get("q");
const subcategory = urlParams.get("program");
// let subcategory = "Visual Studio Code";
const url = "https://shrtct-2d24.restdb.io/rest/shortcut?sort=ID&r=1&max=4";
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
  data.sort(function (a, b) {
    if (a.ID < b.ID) {
      return 1;
    }
    if (a.ID > b.ID) {
      return -1;
    }
    return 0;
  });
  data.forEach(showSoftware);
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
  software.windows_shortcut.forEach((key) => {
    copy.querySelector(
      ".shortcutWindows"
    ).innerHTML += `<span class="key">${key}</span> <p>+</p>`;
  });
  software.mac_shortcut.forEach((key) => {
    copy.querySelector(
      ".shortcutMac"
    ).innerHTML += `<span class="key">${key}</span> <p>+</p>`;
  });
  let softwareIcon = software.software;
  let result = softwareIcon.replace(/ /g, "");
  copy
    .querySelector(".shortcutIcon")
    .setAttribute("src", `img/icons/` + result + `.png`);
  copy.querySelector(".shortcutIcon").setAttribute("alt", result + ` icon`);
  const parent = document.querySelector("#homeContent");

  parent.appendChild(copy);
}
