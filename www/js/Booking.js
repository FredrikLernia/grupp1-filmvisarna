class Booking extends Component {

    constructor(){
      super();
      this.addRoute('/boka', 'Boka');
      this.bookinNum = 0;
      this.addEvents({
          'click button' : 'getBookingNum'});
    }

    getBookingNum(){
        this.bookinNum++
        console.log(this.bookinNum);
    }
  
  }