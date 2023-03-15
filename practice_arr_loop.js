// ex1

const queue = ['Sofia','David','Juan'];
console.log(queue);

// 2 people join line and first queue got call
queue.push('Sara','Augustin');
queue.shift();
console.log(queue);

// David save spot for his friend behind him and 1 people join the line

queue.splice(1,0,'Ranata');
queue.push('Elena');
console.log(queue);

// ex2 
const star = (num) =>{
    for(let i=0; i<num; i++){
        let starArr = []
        for(let n=0; n<=i; n++){
            starArr.push('*')
        }
        console.log(starArr.join(' '));
    }
}
star(5);

/*  แบบสั้นๆ
let Estars ='' 
    for (let i = 1; i<=5; i++){
        Estars += '*'
        console.log(Estars);
}
*/



//ex3
//3.1
/*    Repeatedly print the value of the variable xValue, decreasing it by 0.5 each time, as long as xValue remains positive.     */
const xValue = (x) =>{
    console.log(`Your number is started from ${x}.`)
    while(x>0){
        x -= 0.5;
        console.log(`Current number is ${x}`);
    }
}
xValue(10)  



//3.2
/*-    Print all the odd numbers between 1 - 100.    */
const oddNumber = (x) => {
    let Find = [];
    for (let i = 1; i <= x; i++) {
      if (i % 2 === 1) Find.push(i);
    }
    return Find.join(' ');
  };
console.log(oddNumber(50));


//3.3
/*-   Write a method with a while loop to print 1 through n in square brackets. For example, if n = 6 print [1] [2] [3] [4] [5] [6]    */

const thruSQ = n =>{
    console.log(`Number will shown : ${n} number`)
    let i = 0;
    while(i<n){
        i += 1;
        console.log(`[${i}]`);
    }
}

thruSQ(20);


//3.4
/*-   Write a method with a while loop that computes the sum of first n positive integers: 
sum = 1 + 2 + 3 + … + n
Examples:
n = 5 sum = 15
n = 19 sum = 190  */

const Sum = num => {
    let i = 0;
    let sumUp = 0;
    while(i<num){
        i++;
        sumUp = sumUp + i;
    }
    console.log(`Your sum is ${sumUp}.`)
}

Sum(100);