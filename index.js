let arr = [
  {
    title: "Discover innovative ways to decorate",
    bodyTxt:
      "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
  },

  {
    title: " We are available all across the globe",
    bodyTxt:
      "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  },

  {
    title: "Manufactured with the best materials ",
    bodyTxt:
      "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
  },
];

// count from 1 to 3
let itemNo = 1;
let screenWidth = innerWidth;

$("#closeSVG").addClass("hide");
$("#hamburgerSVG").addClass("hide");
$("#overlay").addClass("hide");

if (screenWidth <= 768) {
  $("#div1").removeClass("desktop-hero-1");
  $("#div1").addClass("mobile-hero-1");
  $("#hamburgerSVG").removeClass("hide");
  $("#hamburgerSVG").addClass("show");
  $("#navigation").addClass("hide");
} else if (screenWidth > 768) {
  $("#div1").addClass("desktop-hero-1");
  $("#div1").removeClass("mobile-hero-1");
}

$("#hamburgerSVG").click(() => {
  $("body").addClass("prevent-scroll");
  $("#angle-arrows").addClass("angle-arrows-hide");
  $("#overlay").removeClass("hide");
  $("#hamburgerSVG").removeClass("show");
  $("#hamburgerSVG").addClass("hide");
  $("#closeSVG").removeClass("hide");
  $("#header").addClass("white-nav");
  $("#navigation").removeClass("hide");
  $("#logoSVG").addClass("hide");
});

$("#closeSVG").click(() => {
  $("body").removeClass("prevent-scroll");
  $("#angle-arrows").removeClass("angle-arrows-hide");
  $("#overlay").addClass("hide");
  $("#hamburgerSVG").addClass("show");
  $("#hamburgerSVG").removeClass("hide");
  $("#closeSVG").addClass("hide");
  $("#header").removeClass("white-nav");
  $("#navigation").addClass("hide");
  $("#logoSVG").removeClass("hide");
});

$("#prev").click(() => {
  let device;
  if (screenWidth > 768) {
    device = "desktop";
  } else {
    device = "mobile";
  }

  let prevNo;
  prevNo = itemNo;
  if (prevNo <= 1) {
    prevNo = 3;
  } else {
    prevNo = itemNo - 1;
  }

  $("#div1").removeClass(`${device}-hero-${itemNo}`);
  $("#div1").addClass(`${device}-hero-${prevNo}`);
  $("#titleDiv").text(arr[prevNo - 1].title);
  $("#bodyDiv").text(arr[prevNo - 1].bodyTxt);
  itemNo = prevNo;
});

$("#next").click(() => {
  let device;
  if (screenWidth > 768) {
    device = "desktop";
  } else {
    device = "mobile";
  }

  let nextNo;
  nextNo = itemNo;
  if (nextNo >= 3) {
    nextNo = 1;
  } else {
    nextNo = itemNo + 1;
  }

  $("#div1").removeClass(`${device}-hero-${itemNo}`);
  $("#div1").addClass(`${device}-hero-${nextNo}`);
  $("#titleDiv").text(arr[nextNo - 1].title);
  $("#bodyDiv").text(arr[nextNo - 1].bodyTxt);
  itemNo = nextNo;
});
