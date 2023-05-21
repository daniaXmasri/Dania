document.addEventListener("DOMContentLoaded", function () {
    var form = document.querySelector(".form");
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      var mail = document.querySelector('input[name="mail"]').value;
      var sifre = document.querySelector('input[name="sifre"]').value;
  
      if (mail === "b221210569@sakarya.edu.tr" && sifre === "b221210569") {
        var message = document.createElement("p");
        message.innerHTML =
          'Hoşgeldiniz "b221210569"<br><br>Ana Sayfaya Devam Etmek İçin <a href="index.html">Tıklayın</a>';
        form.appendChild(message);
      } else {
        var errorMessage = document.createElement("p");
        errorMessage.innerHTML =
          "<strong>Yanlış Bilgi Girmişsiniz!!</strong><br><br><strong>Giriş Sayfasına Yönlendireceksiniz.</strong>";
        form.appendChild(errorMessage);
  
        setTimeout(function () {
          window.location.href = "login.htm";
        }, 3000);
      }
    });
  });
  