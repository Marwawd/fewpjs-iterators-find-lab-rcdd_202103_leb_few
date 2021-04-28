const testVar = {}

function testFunc() {
  return "hi"
}


 function superbowlWin(array){
  let k=array.find( e => { return e.result === "W"})
  if(k!==-1) return k.year ;
  else break ;
 }

 const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
];
superbowlWin(record);
