async function fetchlistenerInput(
  file,
  element,
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
    element.innerHTML = await response_promise.text();
    //document.getElementById('content').innerHTML = 
  } catch (err) {
    console.log('Fetch error:' + err);
  }

}





export { fetchlistenerInput };