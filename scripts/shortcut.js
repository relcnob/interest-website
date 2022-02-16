const url = "https://shrtct-2d24.restdb.io/rest/shortcut";
// api-key : 

const options = {
    Headers: {   "x-apikey": "620cdf7d34fd62156585865e"

    }
 };
fetch (url, options)
.then ((response) => {
  if (!response.ok) {
      throw Error(response.statusText);
  }
  return response.json();
})
.then((data) => { 
    //we have the data
    console.log(data);
    //handleData(data);
})
.catch(e => {
    //woops, something went wrong
    console.error("An error occured:" , e.message);
}); 
