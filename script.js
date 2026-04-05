function searchStudent() {
  let input = document.getElementById("search").value.toLowerCase();
  let rows = document.querySelectorAll("#studentTable tr");

  rows.forEach((row, index) => {
    if (index === 0) return; // skip header

    let text = row.innerText.toLowerCase();
    row.style.display = text.includes(input) ? "" : "none";
  });
}