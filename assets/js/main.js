function toggleMenu() {
  var nav = document.getElementsByClassName("site-header-nav")[0];
  if (nav.style.display == "inline-flex") {
    nav.style.display = "none";
  } else {
    nav.style.display = "inline-flex";
  }
}

jQuery(function() {
  // 回到顶部
  function toTop () {
    var $toTop = $(".gotop");

    $(window).on("scroll", function () {
      if ($(window).scrollTop() >= $(window).height()) {
        $toTop.css("display", "block").fadeIn();
      } else {
        $toTop.fadeOut();
      }
    });

    $toTop.on("click", function (evt) {
      var $obj = $("body,html");
      $obj.animate({
        scrollTop: 0
      }, 240);

      evt.preventDefault();
    });
  }

  toTop();

  // Sticky Header
  function stickyHeader() {
    var $header = $(".site-header");
    var headerOffset = $header.offset().top;

    $(window).on("scroll", function() {
      if ($(window).scrollTop() > headerOffset) {
        $header.addClass("sticky");
      } else {
        $header.removeClass("sticky");
      }
    });
  }

  stickyHeader();

  // Reading Progress Bar (only on post pages)
  if ($(".article-content").length > 0) {
    // Create progress bar element
    $("body").prepend('<div class="reading-progress"></div>');

    var $progressBar = $(".reading-progress");
    var $article = $(".article-content");

    $(window).on("scroll", function() {
      var articleTop = $article.offset().top;
      var articleHeight = $article.outerHeight();
      var windowHeight = $(window).height();
      var scrollTop = $(window).scrollTop();

      var articleStart = articleTop - windowHeight / 2;
      var articleEnd = articleTop + articleHeight - windowHeight / 2;
      var progress = 0;

      if (scrollTop >= articleStart && scrollTop <= articleEnd) {
        progress = ((scrollTop - articleStart) / (articleEnd - articleStart)) * 100;
      } else if (scrollTop > articleEnd) {
        progress = 100;
      }

      $progressBar.css("width", progress + "%");
    });
  }
});
