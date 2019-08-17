import '../../scripts/slider';

/**load styles */
import '../styles/index.scss';

import {test} from './test';
let temp = false;
let element = document.getElementsByClassName('test')[0];
setInterval( () => {
if(temp) {
    element.style.backgroundColor = '#004';
    temp = !temp;
}
else {
    element.style.backgroundColor = '#040';
    temp = !temp;
}
    
} , 3000);

if(document.documentElement.clientWidth < '794px' ) {
    document.getElementById('about-img').style.width = '700px';
}
setInterval( () => {
    console.log(document.documentElement.clientWidth);
} , 4000);
let test2 = test;


console.log(test2);