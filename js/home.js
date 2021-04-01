$( document ).ready(function() {
  let myPicture = $('#my-picture')[0]
  let widthMyPicture = myPicture.width
  let heightMyPicture = myPicture.height
  let pictureCenterX = myPicture.offsetLeft + (widthMyPicture / 2)
  let pictureCenterY = myPicture.offsetTop + (heightMyPicture / 2)

  // Handle animation signature
  function changePositionImage () {
    window.addEventListener('mousemove', function (e) {
      $('#x-value')[0].textContent = e.x
      $('#y-value')[0].textContent = e.y

      if (e.x < pictureCenterX && e.y < pictureCenterY) {
        console.log('Trên trái')
        $('#my-picture').css("object-position","60%")
      }

      if (e.x < pictureCenterX && e.y === pictureCenterY) {
          console.log('Ngang trái')
        $('#my-picture').css("object-position","100%")
      }

      if (e.x < pictureCenterX && e.y > pictureCenterY) {
        console.log('Dưới trái')
        $('#my-picture').css("object-position","90%")
      }

      if (e.x === pictureCenterX && e.y > pictureCenterY) {
        console.log('Thẳng dưới')
        $('#my-picture').css("object-position","80%")
      }

      if (e.x > pictureCenterX && e.y > pictureCenterY) {
        console.log('Dưới phải')
      }

      if (e.x > pictureCenterX && e.y === pictureCenterY) {
        console.log('Ngang phải')
      }

      if (e.x > pictureCenterX && e.y < pictureCenterY) {
        console.log('Trên phải')
      }

      if (e.x === pictureCenterX && e.y < pictureCenterY) {
        console.log('Thẳng trên')
      }
    })
    console.log('center X', pictureCenterX)
    console.log('center Y', pictureCenterY)
  }

  // Bind Events
  function bindEvents () {
    changePositionImage()
  }

  bindEvents();

})
