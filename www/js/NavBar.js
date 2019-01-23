class NavBar extends Component {

  constructor(){
    super();
    this.navItems = [
      new NavItem('Filmvisarna', '/'),
      new NavItem('Boka', '/boka'),
      new NavItem('Filmer', '/filmer'),
      new NavItem('Salonger', '/salonger'),
      new NavItem('Hitta oss', '/hitta-oss')
    ];
  }

}