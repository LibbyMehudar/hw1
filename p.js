let count = 0;

function addnum() {
  let btn = document.getElementById("b");

  if (btn == null) return;
  count++;
  document.getElementById("b").textContent = count;
}
