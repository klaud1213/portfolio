$(document).ready(function () {
  /*const MobileMenuToggle = document.querySelector(".toggle-menu");
  const MobMenu = document.querySelector(".header-menu");
  const MobOverlay = document.querySelector("#overlay");
  MobileMenuToggle.addEventListener("click", function () {
    MobMenu.classList.toggle("active");
    this.classList.toggle("active");
    MobOverlay.classList.toggle("active");
  });
  window.addEventListener("resize", function () {
    MobMenu.classList.remove("active");
    MobileMenuToggle.classList.remove("active");
    MobOverlay.classList.remove("active");
  });*/
  let containerEl = document.querySelector("#portfolio-project");
  let mixer = mixitup(containerEl, {
    classNames: {
      block: "",
    },
  });

  const filter = document.querySelectorAll(".list-portfolio button");
  const portfolioBigCard = document.querySelectorAll(".block-portfolio");
  for (let i = 0; i < filter.length; i++) {
    filter[i].addEventListener("click", function () {
      if (i == 0) {
        for (let j = 0; j < 2; j++) {
          portfolioBigCard[j].classList.add("block-portfolio-big");
          portfolioBigCard[j].classList.remove("block-portfolio-small");
        }
      } else {
        for (let j = 0; j < 2; j++) {
          portfolioBigCard[j].classList.remove("block-portfolio-big");
          portfolioBigCard[j].classList.add("block-portfolio-small");
        }
      }
    });
  }

  const forminputs = document.querySelectorAll(".form-input");
  for (let item of forminputs) {
    const inputplaceholder = item.nextElementSibling;
    item.addEventListener("click", function () {
      inputplaceholder.classList.add("active-form");
    });
    item.addEventListener("blur", function () {
      if (this.value == "") {
        inputplaceholder.classList.remove("active-form");
      }
    });
  }
  $("#contact-form").validate({
    rules: {
      email: {
        required: true,
        email: true,
      },
      theme: {
        required: true,
      },
      message: {
        required: true,
      },
    },
    messages: {
      email: {
        required: "Введите Ваш email",
        email: "некорректно введен email",
      },
      theme: {
        required: "Введите тему сообщения",
      },
      message: {
        required: "Введите текс сообщения",
      },
    },
    submitHandler: function (form) {
      ajaxFormSubmit();
    },
  });
  function ajaxFormSubmit() {
    let string = $("#contact-form").serialize(); // Соханяем данные введенные в форму в строку.

    //Формируем ajax запрос
    $.ajax({
      type: "POST", // Тип запроса - POST
      url: "php/mail.php", // Куда отправляем запрос
      data: string, // Какие даные отправляем, в данном случае отправляем переменную string

      // Функция если все прошло успешно
      success: function (html) {
        $("#contact-form").slideUp(800);
        $("#answer").html(html);
      },
    });

    // Чтобы по Submit больше ничего не выполнялось - делаем возврат false чтобы прервать цепчку срабатывания остальных функций
    return false;
  }
});
