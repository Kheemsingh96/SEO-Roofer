<script>
  const navToggle = document.getElementById("navToggle");
  const navLinksMobile = document.getElementById("navLinksMobile");
  const closeBtn = document.getElementById("closeBtn");

  navToggle.onclick = () => navLinksMobile.classList.add("open");
  closeBtn.onclick = () => navLinksMobile.classList.remove("open");
</script>
