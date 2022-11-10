const items = document.querySelectorAll(".item");
gsap.defaults({ duration: 0.3 });

items.forEach(function (item, index) {
  // console.log(item, index);
  const tl = gsap.timeline({ paused: true });

  tl.to(item.querySelector(".text"), {
    color: "white",
    x: 10,
    scale: 1.3,
    transformOrigin: "left center",
  }) //horizontal, vertical
    .to(item.querySelector(".dot"), { backgroundColor: "#f93", scale: 1.5 }, 0);

  item.addEventListener("mouseenter", () => tl.play());
  item.addEventListener("mouseleave", () => tl.reverse());
});
