const urlParams = new URLSearchParams(window.location.search);
// const query = urlParams.get("q");
// const id = urlParams.get("id");
let id = "620badec8d779a0100035796";
const url = "https://shrtct-2d24.restdb.io/rest/shortcut/" + id;
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

    handleData(data);
  })
  .catch((e) => {
    //woops, something went wrong
    console.error("An error occured:", e.message);
  });

function handleData(shortcut) {
  //   console.log(shortcut);
  //   console.log(shortcut._id);

  document.querySelector(".shortcutWrapper section h2").textContent =
    shortcut.shortcut_name;
  document.querySelector(".description").textContent = shortcut.description;
  document.querySelector(".version").textContent = shortcut.version;

  //display other softwares where it also works
  //   let alsoWorksIn = shortcut.also_works_in;
  //   alsoWorksIn.forEach(displayAlsoworksIn);

  //   function displayAlsoworksIn() {
  //     document.querySelector("worksIn span a").textContent = alsoWorksIn;
  //   }

  let windowsShortcutIcon = shortcut.windows_shortcut;
  let macShortcutIcon = shortcut.mac_shortcut;

  windowsShortcutIcon.forEach(displaysShortcutWindows);
  macShortcutIcon.forEach(displaysShortcutMac);

  //display other softwares where it also works
  let alsoWorksIn = shortcut.also_works_in;
  console.log(alsoWorksIn);

  if (alsoWorksIn.length == 0) {
    document.querySelector(".worksIn span").textContent = "-";
  } else {
    alsoWorksIn.forEach(displayAlsoworksIn);
  }
}
function displayAlsoworksIn(program) {
  let link = document.createElement("a");
  let linkText = document.createTextNode(program);
  link.setAttribute("href", "subcategory.html?program=" + program);
  link.appendChild(linkText);
  document.querySelector(".worksIn span").appendChild(link);
}

function displaysShortcutWindows(key) {
  //creates span
  let button = document.createElement("span");
  button.classList.add("key");
  let text = document.createTextNode(key);
  button.appendChild(text);
  document.querySelector(".shortcutWindows").appendChild(button);

  //creates p with pluss
  let plus = document.createElement("p");
  let plusText = document.createTextNode("+");
  plus.appendChild(plusText);
  document.querySelector(".shortcutWindows").appendChild(plus);
}
function displaysShortcutMac(key) {
  let button = document.createElement("span");
  button.classList.add("key");
  let text = document.createTextNode(key);
  button.appendChild(text);
  document.querySelector(".shortcutMac").appendChild(button);
  let plus = document.createElement("p");
  let plusText = document.createTextNode("+");
  plus.appendChild(plusText);
  document.querySelector(".shortcutMac").appendChild(plus);
}
