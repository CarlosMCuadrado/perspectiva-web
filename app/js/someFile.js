function someFunction() {
  console.log('some function');

  $(function () {


      //añadiendo jquery e easing
      require('jquery');
      require('aos');

      AOS.init({
       duration: 1200,
  easing: 'ease-in-out-back'
      });


  });

}

export default someFunction;
