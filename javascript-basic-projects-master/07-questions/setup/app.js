const questionsTag = document.querySelectorAll(".question");

questionsTag.forEach((q1) => {
  const plusBtn = q1.querySelector(".question-btn");

  plusBtn.addEventListener("click", () => {
    questionsTag.forEach((q2) => {
      if (q1 === q2) q2.classList.toggle("show-text");
      else q2.classList.remove("show-text");
    });
  });
});
