const textToCopy = document.querySelector(".linnk");
const copyButton = document.querySelector(".btn1");

copyButton.addEventListener("click", function() {
  // Select the text
  const range = document.createRange();
  range.selectNode(textToCopy);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  
  // Copy the text to the clipboard
  document.execCommand("copy");
  
  // Deselect the text
  window.getSelection().removeAllRanges();
  
  // Update the button text
  copyButton.textContent = "Copied!";
});
