import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/project.jpg';
import UTrackerImg from '../images/utracker.jpg';
import GreenCtgImg from '../images/greenctg.jpg';
import CoinTrackerImg from '../images/cointracker.jpg';
import CavingImg from '../images/caving.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'U Tracker',
    desc:
      'A web application that helps you track your university courses, assignments, and grades. It also provides a calendar view to help you manage your time better.',
    img: UTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'Green CTG',
    desc:
      'A web application that helps you find the nearest green spaces in Chittagong city. It also provides information about the parks and playgrounds.',
    img: GreenCtgImg,
  },
  {
    id: uuidv4(),
    name: 'Coin Tracker',
    desc:
      'A web application that helps you track the prices of cryptocurrencies. It also provides a detailed view of the price changes over time.',
    img: CoinTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'Cavings Portfolio',
    desc:
      'A web application that helps you find the nearest caves in your area. It also provides information about the caves and their locations.',
    img: CavingImg,
  },
  {
    id: uuidv4(),
    name: 'Tracking Soft',
    desc:
      'A web application that helps you find the nearest caves in your area. It also provides information about the caves and their locations.',
    img: ProjectImg,
  },
];

export default projects;
  