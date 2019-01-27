class ConfirmationPage extends Component{

    constructor(repetoire){

        super();
        this.addRoute('/bokabiljett/konfirmera', 'Boka');

        this.repetoire = {
            auditorium: "Lilla Salongen",
            movie: "Vilda Västern 5",
            date: "05-02-2019",
            time: "20.00",
            guests: "42",
            price: "120.00",
            seatsTaken: "Yes"
        };
        this.confirmBooking();
    }

    async confirmBooking(){
        //let repetoire = await Repetoire.find(bookingNum);
        //console.log(repetoire.date);

        //let x = new Auditorium({name:'olle',"seatsPerRow": [3,4]});
        //console.log(x);

    }
    


}