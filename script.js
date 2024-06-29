
window.onload = function() {
  gsap.registerPlugin(ScrollTrigger);

  // Animation for .nav-sub elements
  gsap.from(".nav-sub", {
    y: 590,
    stagger: 0.4,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".nav-sub",
      start: "top 80%",
      end: "top 20%",
      toggleActions: "play none none none"
    }
  });

  // Animation for .hero-content
  gsap.from(".hero-content", {
    y: -590,
    stagger: 0.4,
    opacity: 0,
    delay: 0.8,
    duration: 0.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".hero-content",
      start: "top 80%",
      end: "top 20%",
      toggleActions: "play none none none"
    }
  });

  // Animation for .file section
  gsap.from(".file", {
    x: 500,
    y: 500,
    opacity: 0,
    delay: 1,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".file",
      start: "top 80%",
      end: "top 20%",
      toggleActions: "play none none none"
    }
  });

  // Animation for p and a elements
  gsap.from("p, a", {
    x: 500,
    y: 500,
    opacity: 0,
    delay: 1,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "p, a",
      start: "top 80%",
      end: "top 20%",
      toggleActions: "play none none none"
    }
  });

  // Animation for card elements
  gsap.from(".nandsection", {
    y: 200,
    opacity: 0,
    stagger: 0.3,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".nandsection",
      start: "top 80%",
      end: "top 20%",
      toggleActions: "play none none none"
    }
  });

  // Animation for footer elements
  gsap.from(".footer, .panel2", {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".footer, .panel2",
      start: "top 90%",
      end: "top 10%",
      toggleActions: "play none none none"
    }
  });
};
