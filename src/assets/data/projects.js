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
      'REPRESENTACIÓN LEGAL EN PROCESOS PENALES Y ASESORAMIENTO',
    img: PenalImg,
    navLink: '/penal',
  },
  {
    id: uuidv4(),
    name: 'FAMILIA',
    desc:
      'SOLUCIONES LEGALES EFECTIVAS PARA SU TRANQUILIDAD',
    img: FamiliaImg,
    navLink: '/familia',
  },
  {
    id: uuidv4(),
    name: 'DIVORCIO',
    desc:
      'PROCESOS DE DIVORCIO Y ACUERDOS AMISTOSOS O LITIGIOSOS',
    img: DivorcioImg,
    navLink: '/divorcio',
  },
  {
    id: uuidv4(),
    name: 'LABORAL',
    desc:
      'PROTECCIÓN LEGAL PARA TRABAJADORES Y EMPLEADORES',
    img: LaboralImg,
    navLink: '/laboral'
  },
  {
    id: uuidv4(),
    name: 'CIVILES',
    desc:
      'REPRESENTACIÓN Y ASESORÍA EN TODO TIPO DE ASUNTOS CIVILES',
    img: CivilImg,
    navLink: '/civiles'
  },
  {
    id: uuidv4(),
    name: 'MERCANTIL',
    desc:
      'SOLUCIONES EFICIENTES PARA EMPRENDEDORES Y CORPORACIONES',
    img: MercantilImg,
    navLink: '/mercantil'
  },
  {
    id: uuidv4(),
    name: 'TRIBUTARIO',
    desc:
      'ESTRATEGIAS LEGALES PARA UN CUMPLIMIENTO TRIBUTARIO EFICIENTE',
    img: TributarioImg,
    navLink: '/tributario'
  },
  {
    id: uuidv4(),
    name: 'AMBIENTAL',
    desc:
      'SOLUCIONES LEGALES PARA PROTEGER EL MEDIO AMBIENTE Y SUS INTERESES',
    img: AmbientalImg,
    navLink: '/ambiental'
  },
  {
    id: uuidv4(),
    name: 'HERENCIAS SUCESIONES',
    desc:
      'SOLUCIONES LEGALES PARA LA DISTRIBUCIÓN JUSTA DE HERENCIAS',
    img: TestamentoImg,
    navLink: '/herencias'
  },
  {
    id: uuidv4(),
    name: 'INMOBILIARIOS',
    desc:
      'ASESORAMIENTO LEGAL PARA COMPRAVENTA Y LITIGIOS INMOBILIARIOS',
    img: InmobiliariosImg,
    navLink: '/inmobiliarios'
  },
  
];

export default projects;
  