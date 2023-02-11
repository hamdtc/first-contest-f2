/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
   arr.map(
      function(arr){
        if(arr.marks > 50){
            console.log(arr);
        }
    });
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  arr.forEach(
        function(array){
          if(array.marks > 50 ){
           console.log(array);
          }
      });
}

function addData() {
  //Write your code here, just console.log
  var data={id:4,name:"susan",age:"20",marks:45};
    arr.push(data);
    console.log(arr);
}

function removeFailedStudent() {
  //Write your code here, just console.log
  var newArr=arr.filter(removeStd);
    function removeStd(arr){
      return arr.marks >= 50;
    }
    console.log(newArr);
}

function concatenateArray() {
  //Write your code here, just console.log
   var newArray= [
      { id: 5, name: "tommy", age: "18", marks: 90 },
      { id: 6, name: "arthur", age: "20", marks: 60 },
      { id: 7, name: "polly", age: "26", marks: 85 },
    ];
    var finalArray= arr.concat(newArray);
    console.log(finalArray);
}
