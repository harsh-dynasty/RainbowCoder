function multiply(x){
  return (num)=>{
    return num*x;
  }
}

const multiplyByTwo = multiply(2);

console.log(multiplyByTwo(3)) //6
