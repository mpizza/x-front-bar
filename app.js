function addXBar () {
  var xBar = document.createElement("div");
  xBar.id = "xbar";
  document.body.append(xBar);
  xBar.addEventListener('click', () => {
    xBar.classList.add('remove');
  });
}

addXBar();

