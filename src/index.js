// import { v4 as uuidv4} from 'uuid'; npm uuid;
import generateJoke from './generateJoke';
import './styles/main.scss';
import car from './assets/car.jpeg'

const carImg = document.getElementById('orangeCar');
carImg.src = car;

const getBtn = document.getElementById('jokeBtn');
getBtn.addEventListener('click',generateJoke);

generateJoke();

