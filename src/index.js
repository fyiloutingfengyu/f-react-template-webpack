import './main.css';
import './index.scss';
import './assets/icon_apliay.png';
import './assets/test_pic.jpg';

const sum = (a, b) => {
  return a + b;
};

let result = sum(12, 10);

console.log(result);

let myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('6');
  }, 1000);
});

myPromise.then(res => {
  console.log(res);
});

