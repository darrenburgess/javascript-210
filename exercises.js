function printOddNumbers(limit) {
  for( i = 1 ; i <= limit ; i++){
    if(i % 2 === 0) {
      continue;
    }
    console.log(i);
  }
} 

printOddNumbers(10);
