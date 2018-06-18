function main() {
  createBoard();
  startTimmer();

  // submit function
  document.getElementById("submit").addEventListener("click", checkSolved);

  // quit function 
  document.getElementById("quit").addEventListener("click", reset);
}

main();