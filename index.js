// Code your solutions in this file

function writeCards( array, element ) {
    let thankYou = []
    for ( let i = 0; i < array.length; i++ ) {
        const name = array[i];
      thankYou.push( `Thank you, ${name}, for the wonderful ${element} gift!` )
    }
    return thankYou
  }

  function countDown( num ) {
    while ( num > 0 ) {
      console.log( num );
      num -= 1;
    }
    console.log( num );
  }