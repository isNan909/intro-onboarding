window.addEventListener('DOMContentLoaded', () => {
  introJs()
    .setOptions({
      steps: [
        {
          element: document.querySelector('.logobrand'),
          title: 'Welcome',
          intro: 'Our dummy logo stays here.',
          position: 'top',
        },
        {
          element: document.querySelector('.news-subscribe '),
          intro: 'And this is our final step!',
          position: 'left',
        },
        {
          element: document.querySelector('.student-subscribe  '),
          intro: 'And this is our final step!',
          position: 'right',
        },
      ],
      showProgress: true,
    })
    .onbeforeexit(function () {
      return confirm('Are you sure?');
    })
    .start();
});
