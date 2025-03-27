// Выбор города
document.addEventListener("DOMContentLoaded", function () {
  const earningsCitySelect = document.getElementById("earnings-city");

  const earningsData = {
    moscow: {
      auto: { daily: "от 5610 ₽/день", hourly: "≈ 510 ₽/час" },
      foot: { daily: "от 4344 ₽/день", hourly: "≈ 395 ₽/час" },
      bike: { daily: "от 4937 ₽/день", hourly: "≈ 449 ₽/час" }
    },
    spb: {
      auto: { daily: "от 5000 ₽/день", hourly: "≈ 460 ₽/час" },
      foot: { daily: "от 4000 ₽/день", hourly: "≈ 370 ₽/час" },
      bike: { daily: "от 4500 ₽/день", hourly: "≈ 420 ₽/час" }
    },
    kazan: {
      auto: { daily: "от 4800 ₽/день", hourly: "≈ 450 ₽/час" },
      foot: { daily: "от 3800 ₽/день", hourly: "≈ 350 ₽/час" },
      bike: { daily: "от 4300 ₽/день", hourly: "≈ 410 ₽/час" }
    }
  };

  function updateEarnings(city) {
    if (earningsData[city]) {
      const autoEarnings = earningsData[city].auto;
      const footEarnings = earningsData[city].foot;
      const bikeEarnings = earningsData[city].bike;

      document.getElementById("auto-value").textContent = autoEarnings.daily;
      document.getElementById("foot-value").textContent = footEarnings.daily;
      document.getElementById("bike-value").textContent = bikeEarnings.daily;

      document.getElementById("auto-value").nextElementSibling.textContent = autoEarnings.hourly;
      document.getElementById("foot-value").nextElementSibling.textContent = footEarnings.hourly;
      document.getElementById("bike-value").nextElementSibling.textContent = bikeEarnings.hourly;
    }
  }


  updateEarnings("moscow");

 
  earningsCitySelect.addEventListener("change", function () {
    const selectedCity = earningsCitySelect.value;
    updateEarnings(selectedCity);
  });
});

// FAQ
function toggleAnswer(id) {
  const answer = document.getElementById(id);
  answer.classList.toggle('show'); 
}

// Скролл вручную
const wrapper = document.getElementById("reviewsWrapper");
let scrollAmount = 270; 

function scrollReviews(direction) {
    wrapper.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });
}

// Автоматический слайдер
function autoScroll() {
    wrapper.scrollBy({ left: scrollAmount, behavior: "smooth" });

    if (wrapper.scrollLeft + wrapper.clientWidth >= wrapper.scrollWidth) {
        setTimeout(() => {
            wrapper.scrollTo({ left: 0, behavior: "smooth" });
        }, 2000);
    }
}

setInterval(autoScroll, 5000);

// Cкролл вверх
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollToTopBtn.style.display = "block"; 
    } else {
        scrollToTopBtn.style.display = "none"; 
    }
};

scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth" 
    });
});

// Скролл вверх при обновлении
window.onload = function() {
  window.scrollTo(0, 0);
};
