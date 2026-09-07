//input:
  // [[ 0, 1, 2, 3, 4 ],
  //  [ 10,11,12,13,14 ],
  //  [ 20,21,22,23,24 ],
  //  [ 30,31,32,33,34 ]] 
    
//output:
  //   '0,1,2,3,4\n'
  //  +'10,11,12,13,14\n'
  //  +'20,21,22,23,24\n'
  //  +'30,31,32,33,34'

  let array:number[][] = [
    [0, 1, 2, 3, 4],
    [10, 11, 12, 13, 14],
    [20, 21, 22, 23, 24],
    [30, 31, 32, 33, 34]
  ];
  console.log(array[0].toString()+ "\n" + array[1].toString() + "\n" + array[2].toString() + "\n" + array[3].toString());
  console.log(array[0].join(",") + "\n" + array[1].join(",") + "\n" + array[2].join(",") + "\n" + array[3].join(","));
  console.log(array.join("\n"));
