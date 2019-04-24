function main(){
  //$('body>h1').hide()
//  $('.bio').hide()
//you can chain lines of code together in jquery
  $('.bio').hide().fadeIn(2000)
  $('.items').hide()
//the shortcut for the word function is =>
  $('.button').on('click', event => {
    //$('.items').slideToggle(300)
    //$('.button').toggleClass('active')
    //$('.button').text('Viewed')
//this makes it so only one is showing at a time when you click on it
    $(event.currentTarget).toggleClass('active')
    //$(this).text('Viewed')
    $(event.currentTarget).next().slideToggle(300)
  })
  //if you want to use the old function() then you can use $(this)
}





//make sure you include the link in the html and then add the ready
$(document).ready(main)
