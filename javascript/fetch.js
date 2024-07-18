

async function fetchlistenerInput(
  file,
  //data = {},
  options = {
    method: "GET",
    headers: { "Content-Type": "text/html" }
  }
) {
  //const id = data.id;
  /*if (options.method != "GET") {
    //data = input(data);
    options.body = JSON.stringify(data);
  }*/
  try {
    let response_promise = await fetch(file, options);
    document.getElementById('content').innerHTML = await response_promise.text();
  } catch (err) {
    console.log('Fetch error:' + err);
  }

}



export { fetchlistenerInput };