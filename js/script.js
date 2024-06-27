$(function () {
  // 대상을 변수에 저장
  const $window = $(window);
  const $aboutPic = $(".about-pic");
  const $pic1 = $aboutPic.find(".con.a-pic1");
  const $pic2 = $aboutPic.find(".con.a-pic2");
  const $pic3 = $aboutPic.find(".con.a-pic3");
  const $pic4 = $aboutPic.find(".con.a-pic4");
  const $cloDec = $(".deco");
  const $cloDectwo = $(".deco top");

  console.log($cloDectwo);
  // console.log($pic1, $pic2, $pic3, $pic4);
  // console.log(cloDec);

  gsap.registerPlugin(ScrollTrigger);

  // about의 글(효과)
  const TL = gsap.timeline({
    duration: 0.5,

    scrollTrigger: {
      trigger: ".sec.about",
      // markers: true,
      start: "top 70%",
    },
  });

  TL.from(".h2", { y: 200, autoAlpha: 0, duration: 1, ease: "none" });
  TL.from(".p1", { y: 200, autoAlpha: 0, duration: 1, ease: "none" }, "-=0.3");
  TL.from(".p2", { y: 200, autoAlpha: 0, duration: 1, ease: "none" }, "-=0.3");
  TL.from(".p3", { y: 200, autoAlpha: 0, duration: 1, ease: "none" }, "-=0.3");
  TL.from(".p4", { y: 200, autoAlpha: 0, duration: 1, ease: "none" }, "-=0.3");
  TL.from(".p5", { y: 200, autoAlpha: 0, duration: 1, ease: "none" }, "-=0.3");
  TL.from(".p6", { y: 200, autoAlpha: 0, duration: 1, ease: "none" }, "-=0.3");
  TL.from(".about-num h3", { y: 400, autoAlpha: 0, duration: 1, ease: "none" });
  TL.from(".text-dec", { fadeIn: 400, autoAlpha: 0, duration: 2 }, "-=0.2");

  // about의 글(효과)를 보기위한 핀 고정
  // const sectionEl = gsap.utils.toArray('.sec.about');
  // console.log(sectionEl);

  // sectionEl.forEach((sec) => {
  //   ScrollTrigger.create({
  //     trigger: sec,
  //     markers: true,
  //     start: 'top top',
  //     pin: true,
  //     pinspacing: false,
  //   });
  // });

  const T3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".initiate",
      start: "top 30%",
      end: "bottom top",
      toggleActions: "play none none none",
      markers: true,
    },
  });

  /* 이미지 바꾸기 */
  const initImgone = document.getElementById("init-img-one");
  const initImgtwo = document.getElementById("init-img-two");

  const newSrcone = "./img/Don t be afraid to fail-white.png";
  const newSrctwo = "./img/Be afraid not to try-white.png"; /* 이미지 경로 */

  T3.from(
    ".initiate .txt-one",
    {
      x: 500,
      opacity: 0,
      duration: 2,
    },
    0
  ) // 시작 시간을 0으로 설정하여 첫 애니메이션과 동시에 시작

    .from(
      ".initiate .txt-two",
      {
        x: -500,
        opacity: 0,
        duration: 2,
      },
      0
    ); // 시작 시간을 0으로 설정하여 첫 애니메이션과 동시에 시작

  T3.from(".initiate .init-txt-kn", {
    opacity: 0,
    duration: 1,
  });

  T3.from(".initiate", {
    clipPath: "circle(100% at 50% 50%)",
    duration: 1.5,
    ease: "circ.inOut",
  });

  T3.to(".initiate", {
    clipPath: "circle(100% at 50% 50%)",
    duration: 1.5,
    ease: "circ.inOut",
    onUpdate: function () {
      // 클립 패스 애니메이션과 동시에 배경 색상 변화 적용
      const element = document.querySelector(".initiate");
      const progress = this.progress(); // 애니메이션 진행도 (0 to 1)
      const newColor = `linear-gradient(
        to right,
        #9ecfff ${progress * 100}%,
        #6bbbff ${40 + progress * 100}%,
        #b8dcff ${100 - (1 - progress) * 100}%
      )`;
      element.style.background = newColor;
    },
    onComplete: function () {
      const element = document.querySelector(".initiate");
      element.style.background =
        "linear-gradient(to right, #9ecfff 0%, #6bbbff 40%, #b8dcff 100%)"; // 동적 배경을 제거
    },
  });

  T3.to([initImgone, initImgtwo], {
    opacity: 0,
    duration: 1,
    onComplete: function () {
      // 이미지 소스 변경
      initImgone.src = newSrcone;
      initImgtwo.src = newSrctwo;

      T3.to([initImgone, initImgtwo], {
        opacity: 1,
        duration: 2,
      });

      T3.to(".initiate .init-txt-kn", {
        opacity: 1,
        duration: 1,
        color: "#fff",
      });
    },
  });

  /*   T3.add(() => {
    document.querySelector(".initiate").classList.add("initiate-bg");

    document.querySelector(".initiate").style.background =
      "linear-gradient(to right, #9ecfff 0%, #6bbbff 40%, #b8dcff 100%)";
  });
 */
  //  구름 움직이게
  const Tl = gsap.timeline();

  Tl.to($cloDec, {
    y: 200,
    duration: 0.8,

    scrollTrigger: {
      trigger: $cloDec,
      // markers: true,
      start: "top 20%",
      end: "bottom top",
      scrub: 2,
    },
  });

  Tl.from(".deco bottom", { autoAlpha: 1, y: -300, duration: 0.8, delay: 2 });

  //about영역에서는 벗어났지만 about의 관련된 사진 효과
  const TL2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".about-pic .con",
      // markers: true,
      start: "top 70%",
    },
    stagger: {
      each: 0.4,
      from: "random",
    },
  });

  TL2.from(".about-pic .a-pic1", { autoAlpha: 0, y: 100, duration: 1 });
  TL2.from(".about-pic .a-pic2", { autoAlpha: 0, y: 100, duration: 1 });
  TL2.from(".about-pic .a-pic3", { autoAlpha: 0, y: 100, duration: 1 });
  TL2.from(".about-pic .a-pic4", { autoAlpha: 0, y: 100, duration: 1 });
  TL2.add(move);

  // const TLtwo = gsap.timeline({
  //   pin: true,
  //   scrub: 1,
  //   // markers: true,
  //   start: 'top 0%',
  //   end: 'bottom+=3000 0%',
  // });

  // TLtwo.from('.bg-black', { autoAlpha: 0 });

  // const t1 = gsap.timeline();

  // t1.from('.con-btext', { y: 400, duration: 2, ease: 'none' });

  // gsap.from('.about-title',{

  // })

  // 이건 사진 효과에 따른 마우스 이동시 움직임
  let x = 0;
  let y = 0;

  let mx = 0;
  let my = 0;

  const speed = 0.005;
  const maxDistance = 50;

  $aboutPic.on("mousemove", function (e) {
    x = (e.pageX - $window.outerWidth() / 2) / maxDistance;
    y = (e.pageY - $window.outerHeight() / 2) / maxDistance;
  });

  $aboutPic.on("mouseleave", function (e) {
    x = 0;
    y = 0;
  });

  function move() {
    mx += (x - mx) * speed;
    my += (y - my) * speed;

    // 개같이 움직이고 통제가 안돼.
    const maxTranslateX = 100; //최대 이동거리
    const maxTranslateY = 100;

    // mx와 my를 제한된 범위 내에서 조정
    const limitedMx = Math.max(-maxTranslateX, Math.min(maxTranslateX, mx));
    const limitedMy = Math.max(-maxTranslateY, Math.min(maxTranslateY, my));

    // 대상에 값 적용

    $pic1.css({
      transform: `translate(${-limitedMx}px, ${-limitedMy}px)`,
    });

    $pic2.css({
      transform: `translate(${-limitedMx}px, ${-limitedMy}px)`,
    });

    $pic3.css({
      transform: `translate(${-limitedMy}px, ${-limitedMy}px)`,
    });

    $pic4.css({
      transform: `translate(${-limitedMy}px, ${-limitedMy}px)`,
    });

    requestAnimationFrame(move);
  }

  //  사람이 나타나고 내려가는 효과
  gsap.fromTo(
    ".clo-man",
    {
      opacity: 1,
      y: 0,
    },
    {
      opacity: 1,
      y: 5000,
      scrollTrigger: {
        trigger: ".bg-gra",
        start: "top top",
        end: "+=5000",
        scrub: 15,
        /*         onEnter: () =>
          gsap.to(".clo-man", { opacity: 1, y: 5000, duration: 20 }), */
        /*    onLeave: () =>
          gsap.to(".clo-man", { opacity: 0, y: -5000, duration: 1 }), */
      },
    }
  );

  // 구름 양 옆으로
  let t2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".bg-gra",
      start: "top 20%",
      end: "bottom bottom",
      scrub: 2,
      ease: "power4.inOut",
      markers: true,
    },
    stagger: {
      each: 0.8,
      from: "1",
    },
  });

  t2.to(
    ".clo-img:nth-child(odd)",
    {
      x: 700,
      y: 100,
      // y: 500,
      // autoAlpha: 0,
    },
    0
  );

  t2.to(
    ".clo-img:nth-child(even)",
    {
      x: -700,
      y: -100,
      // y: -500,
      // autoAlpha: 0,
    },
    0
  );

  // $(".clo-eff:nth-child(odd)").each((index, img) => {
  //   gsap.from(img, {
  //     x: 200,

  //     scrollTrigger: {
  //       trigger: img,
  //       start: "top top",
  //       scrub: 1,
  //     },
  //   });
  // });

  // $(".clo-eff:nth-child(even)").each((index, img) => {
  //   gsap.from(img, {
  //     x: -200,

  //     scrollTrigger: {
  //       trigger: img,
  //       start: "top top",
  //       scrub: 1,
  //     },
  //   });
  // });

  const sectionEl = gsap.utils.toArray(".sec-bg");
  // console.log(sectionEl);

  sectionEl.forEach((item) => {
    const bgColor = item.getAttribute("data-bgcolor");
    // console.log(bgColor);

    const conbg = ScrollTrigger.create({
      trigger: item,
      // markers: true,
      start: "top bottom",
      end: "bottom 10%",
      pin: true,

      onEnter: () => {
        gsap.to("body", {
          background: bgColor,
          duration: 2,
        });
      },

      onEnterBack: () => {
        gsap.to("body", {
          background: bgColor,
          duration: 2,
        });
      },
    });
    $(".btn-top").on("click", () => {
      $("html , body")
        .stop()
        .animate(
          {
            scrollTop: 0,
          },
          function () {
            gsap.to(".btn-top"),
              {
                autoAlpha: 1,
              };
          }
        );
    });
  });
  // const TL2 = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: '.project .web-design > div',
  //     markers: true,
  //     start: 'top 0%',
  //     end: 'bottom+=3000 0%',
  //     pin: true,
  //   },
  // });

  // TL2.from('.project .web-design > div', {
  //   y: 'random(100, 150, 200)',
  //   autoAlpha: 0,
  //   stagger: 0.2,
  // });

  // TL2.to('.project .web-design > div', {
  //   autoAlpha: 1,
  // });

  // const TL2 = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: '#project',
  //     start: 'top 30%',
  //     end: '+=3000',
  //     pin: true,
  //     scrub: 1,
  //     markers: true,
  //   },
  // });
  // TL2.from('#project .web-design', {
  //   autoAlpha: 0,
  //   y: 100,
  //   stagger: 0.2,
  //   duration: 1,
  // });
  // TL2.from('#project .app-design', {
  //   autoAlpha: 0,
  //   y: 100,
  //   duration: 1,
  // });

  /* project부분의 사진 효과 */
  // const picani = gsap.timeline();
  // picani.to('.design .web-title', { y: 100, autoAlpha: 1 });
  // picani.to('.design .pr-pic', { y: 100, autoAlpha: 1 });
  // picani.to('.design .web-txt', { y: 100, autoAlpha: 1 });
  // // picani.to('.design .web-title', { y: 100 });

  // ScrollTrigger.create({
  //   animation: picani,
  //   trigger: '.design',
  //   start: 'top top',
  //   end: '+=3000',

  //   pin: true,
  //   anticpatePin: 1,
  //   markers: true,
  // });

  const prPic = gsap.utils.toArray(".pr-pic");
  // console.log(prPic);

  prPic.forEach((item) => {
    const prTxt = item.closest(".design").querySelector(".pr-txt");

    gsap.from(item, {
      y: "random(100, 125, 150)",
      duration: 1,
      opacity: 0,

      //스크롤 값과 연동
      scrollTrigger: {
        trigger: item,
        // markers: true,
        start: "top 70%",
        // toggleActions: 'play none none reset', // 애니메이션 시작과 되돌리기 설정
      },
    });
    gsap.from(prTxt, {
      y: "random(100, 125, 150)",
      duration: 2,
      opacity: 0,

      scrollTrigger: {
        trigger: item,
        start: "top 10%",
        // toggleActions: 'play none none reset',
      },
    });
  });

  /* Top버튼. */
  gsap.from(".btn-top", {
    autoAlpha: 0,

    scrollTrigger: {
      trigger: ".project",
      // markers: true,
      start: "top 50%",
      toggleActions: "play none reverse reverse",
    },
  });

  /* 커서 (수정해야될 것 같긴 함) */
  const $cursorTwo = $(".cursor-two");
  // const trailLength = 10;
  // const trailFadeOutTime = 1000;

  // let trailElements = [];

  // let mouseX = 0;
  // let mouseY = 0;
  const speedtwo = 0.3;

  function animateCursor(mouseX, mouseY) {
    const dx = (mouseX - $cursorTwo.offset().left) * speedtwo;
    const dy = (mouseY - $cursorTwo.offset().top) * speedtwo;

    $cursorTwo.css({
      left: $cursorTwo.offset().left + dx + "px",
      top: $cursorTwo.offset().top + dy + "px",
    });

    requestAnimationFrame(() => animateCursor(mouseX, mouseY));
  }

  $(document).on("mousemove", function (e) {
    // const $newTrailElement = $('<div class="trail"></div>').appendTo('body');
    // trailElements.push($newTrailElement);

    const mouseX = e.pageX;
    const mouseY = e.pageY;
    // $newTrailElement.css({
    //   left: mouseX + 'px',
    //   top: mouseY + 'px',
    // });

    // setTimeout(() => {
    //   $newTrailElement.css('opacity', 0);
    // }, trailFadeOutTime);

    // if (trailElements.length > trailLength) {
    //   trailElements[0].remove(); //가장 오래된 잔상 요소 삭제
    //   trailElements.shift(); // 배열에서도 삭제
    // }
    animateCursor(mouseX, mouseY);
  });
  // $cursorTwo.css('opacity', 1); // 초기에 가짜 커서는 보이도록 설정
});
