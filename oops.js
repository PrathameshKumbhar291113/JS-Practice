//fibonaci 


// var a=0,b=1,n=8, c = 0;
// console.log(a);
// console.log(b);

// for(let i = 1;i<= n-2 ;i++){
//     c=a+b;
//     console.log(c);
//     a=b;
//     b=c;

// }
// 0 , 1, 1, 2, 3, 5, 8


//prime or not prime

// var number=15;
// if(number==1){
//     console.log(`${number} is not prime number nor composite number`);
// }else if(number<1){
//     console.log(`${number} is not a prime number`);
// }else{
//     for(var i=2;i<number;i++){
//       if(number%i == 0){
//         var res=`${number} is not a prime number`
//         break;
//       }else{
//         var res = `${number} is  a prime number`
//       }
//     }
//     console.log(res);
// }


// white space
// let anu=' hey     bhaiii    '
// let anu1=anu.split(' ').join('')

// console.log(anu1);



//white space in string character
// const str = "Hello World";
// const newStr = str.replace(/\s+/g, "");
// console.log(newStr); // Output: "Hello+W+World"


//removespace 
// var str = "     prathamesh      k   production      "
// var trimedString  = str.trim();
// var newString = "";

// for(let i = 0; i< trimedString.length; i++){
//     if (trimedString[i] == ' ') {
//         newString += "";
//     } else {
//         newString += trimedString[i];
//     }
// }

// console.log(newString);/

   
// practice whitespace 
// let a = "  an  u      b ha  aaa ii    "
// let b=a.trim();
// let c="";
//  for(let i = 0 ; i < b.length ; i++){
//     if(b[i]== " "){           
//         c += "";
//     }else{
//         c += b[i]
//     }
//  }
//  console.log(c);


// let number=7;
// for(let i = 2; i< number;i++){
//     if(number%i == 0){
//         var res = "this is a not a prime number"
//         break;
//     }else{
//        var res = "this is a prime number"
//     }
    
// }
// console.log(res);

// const str = 'this is the original string';
// const reverseString = (str = '') => {
//    let reverse = '';
//    const { length: len } = str;
//    for(let i = len - 1; i >= 0; i--){
//       reverse += str[i];
//    };
//    return reverse;
// };
// console.log(reverseString(str));

// let str = "123456"
// let newStr = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//       newStr += str[i];
//     }
//     console.log(newStr);