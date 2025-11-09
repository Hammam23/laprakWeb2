// === Interaktivitas JavaScript ===
document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const modeBtn = document.getElementById("mode-toggle");
  const collapseAll = document.getElementById("collapse-all");
  const expandAll = document.getElementById("expand-all");

  // Klik pada <h3> untuk toggle
  document.querySelectorAll(".section h3").forEach((h3) => {
    h3.addEventListener("click", () => {
      const answer = h3.nextElementSibling;
      if (!answer) return;
      const confirmHide = confirm("Sembunyikan konten bagian ini?");
      if (confirmHide) {
        answer.setAttribute("data-hidden", "true");
      } else {
        answer.setAttribute("data-hidden", "false");
      }
    });
  });

  // Tombol mode tampilan
  modeBtn.addEventListener("click", () => {
    body.classList.toggle("berantakan");
    modeBtn.textContent = body.classList.contains("berantakan")
      ? "Mode Rapi"
      : "Mode Berantakan";
  });

  // Tombol sembunyikan semua
  collapseAll.addEventListener("click", () => {
    document
      .querySelectorAll(".answer")
      .forEach((a) => a.setAttribute("data-hidden", "true"));
  });

  // Tombol tampilkan semua
  expandAll.addEventListener("click", () => {
    document
      .querySelectorAll(".answer")
      .forEach((a) => a.setAttribute("data-hidden", "false"));
  });
});
