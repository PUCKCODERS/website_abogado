import { v4 as uuidv4 } from 'uuid';
import PenalImg from '../images/penal.png';
import FamiliaImg from '../images/familia.png';
import DivorcioImg from '../images/divorcio.png';
import LaboralImg from '../images/laboral.png';
import CivilImg from '../images/civil.png';
import MercantilImg from '../images/mercantil.jpg';
import TributarioImg from '../images/tributario.jpg';
import AmbientalImg from '../images/ambiental.png';
import TestamentoImg from '../images/testamento.jpg';
import InmobiliariosImg from '../images/inmobiliarios.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'PENAL',
    desc:
      'A HOLAS web application that helps you find the nearest caves in your area. It also provides information about the caves and their locations.',
    img: PenalImg,
    navLink: '/penal',
  },
  {
    id: uuidv4(),
    name: 'FAMILIA',
    desc:
      'A web application that helps you track your university courses, assignments, and grades. It also provides a calendar view to help you manage your time better.',
    img: FamiliaImg,
    navLink: '/familia',
  },
  {
    id: uuidv4(),
    name: 'DIVORCIO',
    desc:
      'A web application that helps you find the nearest green spaces in Chittagong city. It also provides information about the parks and playgrounds.',
    img: DivorcioImg,
    navLink: '/divorcio',
  },
  {
    id: uuidv4(),
    name: 'LABORAL',
    desc:
      'A web application that helps you track the prices of cryptocurrencies. It also provides a detailed view of the price changes over time.',
    img: LaboralImg,
    navLink: '/laboral'
  },
  {
    id: uuidv4(),
    name: 'CIVILES',
    desc:
      'A web application that helps you find the nearest caves in your area. It also provides information about the caves and their locations.',
    img: CivilImg,
    navLink: '/civiles'
  },
  {
    id: uuidv4(),
    name: 'MERCANTIL',
    desc:
      'A web application that helps you find the nearest caves in your area. It also provides information about the caves and their locations.',
    img: MercantilImg,
    navLink: '/mercantil'
  },
  {
    id: uuidv4(),
    name: 'TRIBUTARIO',
    desc:
      'A web application that helps you find the nearest caves in your area. It also provides information about the caves and their locations.',
    img: TributarioImg,
    navLink: '/tributario'
  },
  {
    id: uuidv4(),
    name: 'AMBIENTAL',
    desc:
      'A web application that helps you find the nearest caves in your area. It also provides information about the caves and their locations.',
    img: AmbientalImg,
    navLink: '/ambiental'
  },
  {
    id: uuidv4(),
    name: 'HERENCIAS SUCESIONES',
    desc:
      'A web application that helps you find the nearest caves in your area. It also provides information about the caves and their locations.',
    img: TestamentoImg,
    navLink: '/herencias'
  },
  {
    id: uuidv4(),
    name: 'INMOBILIARIOS',
    desc:
      'A web application that helps you find the nearest caves in your area. It also provides information about the caves and their locations.',
    img: InmobiliariosImg,
    navLink: '/inmobiliarios'
  },
  
];

export default projects;
  