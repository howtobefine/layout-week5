$(document).ready(function () {
  $('.dropdown-all').click(function (e) {
    event.preventDefault();
    $('.dropdown-menu-courses').toggleClass('show');
  })
})

$(document).ready(function () {
  $('.reply-btn, .cancel-btn').click(function (e) {
    event.preventDefault();
    $('.answer, .assignment-pag, .reply').toggleClass('d-none');
  })
})