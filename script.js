var navLinks = document.getElementById("navLinks");
function showMenu() {
    navLinks.style.right = "0";
}

function hideMenu() {
    navLinks.style.right = "-200px";
}

function submitFormKomen() {
    document.getElementById("blog-form").submit();
    alert("Komentarmu telah diposting!");
}

function submitFormPesan() {
  document.getElementById("kontak-form").submit();
  alert("Pesanmu Telah Dikirim!");
}

function confirmLeavePage() {
  return confirm("Apakah Anda yakin untuk meninggalkan laman ini?");
}

function openNewTab(url) {
  if (confirmLeavePage()) {
    window.open(url, '_blank');
  }
}
