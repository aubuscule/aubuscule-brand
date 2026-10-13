(function () {
  var buttons = document.querySelectorAll("[data-export-target]");
  var status = document.querySelector("[data-export-status]");

  buttons.forEach(function (button) {
    button.addEventListener("click", async function () {
      var artboard = document.querySelector(button.dataset.exportTarget);
      if (!(artboard instanceof HTMLElement)) {
        reportError(new Error("The selected artboard could not be found."));
        return;
      }

      var exportMarks = Array.from(artboard.querySelectorAll(".mark")).filter(function (mark) {
        return !mark.classList.contains("mark--asset");
      });

      button.disabled = true;
      if (status) {
        status.dataset.state = "working";
        status.textContent = "Preparing PNG…";
      }

      try {
        var qrFrame = artboard.querySelector("[data-business-card-qr]");
        if (qrFrame) {
          if (!window.aubusculeBusinessCardQr) {
            throw new Error("The business card QR code is unavailable.");
          }
          window.aubusculeBusinessCardQr.refresh();
        }

        var capture = window.htmlToImage;
        if (!capture || typeof capture.toBlob !== "function") {
          throw new Error("The PNG capture library is unavailable.");
        }
        if (document.fonts) await document.fonts.ready;

        exportMarks.forEach(function (mark) {
          mark.classList.add("mark--asset");
        });

        var blob = await capture.toBlob(artboard, {
          pixelRatio: 2,
          cacheBust: true
        });
        if (!blob) throw new Error("PNG rendering returned no image.");

        var filename = button.dataset.exportFilename || "aubuscule-artboard.png";
        var url = URL.createObjectURL(blob);
        var link = document.createElement("a");
        link.href = url;
        link.download = filename;
        link.click();
        window.setTimeout(function () {
          URL.revokeObjectURL(url);
        }, 1000);

        if (status) {
          status.dataset.state = "success";
          status.textContent = filename + " downloaded.";
        }
      } catch (error) {
        reportError(error);
      } finally {
        exportMarks.forEach(function (mark) {
          mark.classList.remove("mark--asset");
        });
        button.disabled = false;
      }
    });
  });

  function reportError(error) {
    console.error("PNG export failed:", error);
    if (status) {
      status.dataset.state = "error";
      status.textContent = "PNG export failed. Reload the page or use the screenshot instructions.";
    }
  }
})();
