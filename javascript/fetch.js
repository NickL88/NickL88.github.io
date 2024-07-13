const server = "controller.php";


async function fetchlistenerInput(
  file,
  //output = Function(),
  //input = Function(),
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
  let response_promise = fetch(file, options);
  //console.log(response_promise);
  //if (options.method != "DELETE") {
    response_promise.then(
      response => response.text().then(
        html => {
          //console.log(html);
          document.getElementById('content').innerHTML = html;
          //output(responseJson, id);
        }));
  //}
}



export {server, fetchlistenerInput};