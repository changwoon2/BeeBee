$(document).ready(function () {
  //1. 햄버거메뉴 클릭시 gnb 효과 왼쪽에 튀나오게
  $(".ham").click(function () {
    $(".gnb").fadeToggle();
  });

  //1-1. BEST메뉴 클릭시 sub_gnb 보이게
  $(".gnb li")
    .eq(0)
    .click(function () {
      $(".gnb").hide();
      $(".sub_gnb").fadeIn();
    });

  //1-2. 햄버거메뉴 클릭시 .sub_gnb 도 가리기
  $(".ham").click(function () {
    $(".sub_gnb").hide();
  });
});

//스크롤이 100px 이상이 되었을 때 TOP버튼이 나타나게 하기 위한 초기값
var sa = 150;
$(window).scroll(function () {
  var num = $("html,body").scrollTop();
  console.log(num);
  if (num > sa) {
    $("aside .top_btn").stop().fadeIn();
  } else {
    $("aside .top_btn").stop().fadeOut();
  }
});
$(".top").click(function (e) {
  $("html,body").stop().animate(
    {
      scrollTop: 0,
    },
    1000,
    "swing"
  );
  e.preventDefault();
});

//2. top버튼 클릭시 가장 상단화면 보이기
$("aside .top_btn").click(function (e) {
  e.preventDefault();
  $("html,body").animate(
    {
      scrollTop: 0,
    },
    1000,
    "swing"
  );
});

$(function () {
  // 변수 선언
  var imageButton = $(".item-box .item-img a");
  var popup = $(".img-popup");
  var closeButton = popup.find("> .popup-inner > .close-btn");
  var htmlAndBody = $("html, body");
  var focusTarget;

  // 팝업 생성
  imageButton.on("click", function (e) {
    e.preventDefault();
    var popupImg = popup.find("> .popup-inner > img");
    var image = $(this).find("> img");
    var src = image.attr("src");
    var alt = image.attr("alt");
    focusTarget = $(this);
    popupImg.attr("src", src).attr("alt", alt);
    createPopup();
  });

  // 팝업 제거
  popup.on("click", function () {
    removePopup();
  });
  closeButton.on("click", function (e) {
    e.preventDefault();
    removePopup();
  });

  // 팝업창 검은배경과 닫기 버튼을 제외한 나머지 부분 클릭시 닫히지 않도록 하기
  popup.find("> .popup-inner").on("click", function (e) {
    e.stopPropagation();
  });

  // 팝업 생성 함수
  function createPopup() {
    popup.addClass("active");
    htmlAndBody.css("overflow-y", "hidden");
    setTimeout(function () {
      closeButton.focus();
    }, 50);
  }
  // 팝업 제거 함수
  function removePopup() {
    popup.removeClass("active");
    focusTarget.focus();
    htmlAndBody.css("overflow-y", "visible");
  }
});
