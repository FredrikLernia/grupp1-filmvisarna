class Booking extends Component {

    constructor(){
      super();
      this.addRoute('/bokabiljett', 'Boka');
      this.bookinNum = 0;
      this.addEvents({
          'click button' : 'getBookingNum'});
    }

    getBookingNum(){
        this.bookinNum++
        console.log(this.bookinNum);
    }
  
  }