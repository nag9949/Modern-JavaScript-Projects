const correctAnswers = ['B', 'B', 'B', 'B'];

const form = document.querySelector('.quiz-form');

const result = document.querySelector('.result');


form.addEventListener('submit', e => {
  e.preventDefault(); //.. prevent the default refreshing feature whenever we click submit button

  let score = 0;
  const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

  //checking the answers
  userAnswers.forEach((answers, index) => {

    if (answers === correctAnswers[index]) {
      score += 25;
    }

  });

  // show results on the page
  result.classList.remove('d-none');

  // whenever we click submit it will scrollTo top of the page at x-cord.. 0, y-cord.. 0 position
  scrollTo(0, 0);

  // // setInterval and animate the score
  let outputTimer = 0;

  const timer = setInterval(() => {
    result.querySelector('span').textContent = `${outputTimer}%`;

    if (outputTimer === score) {
      clearInterval(timer);
    } else {
      outputTimer++;
    }

  }, 10);



});

