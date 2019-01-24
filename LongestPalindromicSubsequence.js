
/* 
draft - this doesn't work yet 
idea is to create a 2d array

looking at all the possible lengths, and seeing whether the first and last character 
in a given substring match, and asking the cache about the whether the charcters 
between them are also a palindrome. 

*/


var longestPalindromeSubseq = function(s) {
    var sChars = s.split('')
    var len = sChars.length 
    var maxLen = 1
    var maxStart = 0

    // initialize 2D array 
    var isPalin = []
    for (var i = 0; i <= len; i++) {
      var newArray = new Array(len).fill(false)
      isPalin.push(newArray)
    }

    function pArray() {
      for (row of isPalin) {
        console.log(row)
      }
    }
    //pArray()
    
    // set palin whose length is 1 
    for (var i = 0; i < len; i++) {
      isPalin[i][i] = true; 
    }

    // pArray()

    // set palindrone whose length is 2 
    for (var i = 1; i < len - 1; i++) {
        if (sChars[i] === sChars[i + 1]) {
          isPalin[i][i + 1] = true
          maxLen = 2
          maxStart = i 
        }
    }

    //pArray()

    if (len > 3) {
      for (var length = 3; length <= len; length ++) {
        for (var i = 0; i <= len - length; i++) {
          console.log("length: " + length + " i: " + i)

          var checkRow = i + 1
          var checkColumn = i + length - 2 
          console.log("checkRow: " + checkRow + "  checkColum: " + checkColumn)

          if (sChars[i] === sChars[i + length - 1] && isPalin[checkRow][checkColumn])
          console.log("found")
          isPalin[i][i + length - 1] = true 
          maxLen = length 
          maxStart = i 

        }
      }
    }

    var retString = ""; 
    var end = maxStart + maxLen - 1
    for (var start = maxStart; start <= end; start++) {
      retString += sChars[start]
    }

    return retString
};

longestPalindromeSubseq('bananas')
