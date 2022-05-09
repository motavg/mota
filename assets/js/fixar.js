$(document).ready(function () {
  //varaiveis locais
  var_containerBtn = $('[data-container="botao-voltar"]');
  var_containerMenu = $('[data-container="menu"]');

  //mostrar o botao voltar ao topo
  $(window).scroll(function () {
    if ($(this).scrollTop() > 90) {
      _containerBtn.fadeIn(500);
      _containerMenu.addClass("fixo");
    } else {
      _containerBtn.fadeOut(0);
      _containerMenu.removeClass("fixo");
    }
  });

  //click e volte ao topo
  _containerBtn.click(function () {
    $("html, body").animate({ scrollTop: 0 }, 800);

    return false;
  });
});
