function palindrome(str) {
    // 1. Replace special characters
    let regex = /\_|\-|\s|\(|\)|\\|\/|\.|\,/g;
    let newStr = str.replace(regex, "");
    
    // 2. To lowercase
    let newStrLow = newStr.toLowerCase();
    
    // 3. Create an array of characters
    let separated = newStrLow.split('');
    
    // 4. Clone array before inverting it
    let cloned = separated.map((x) => x);
    
    // 5. Create an array of inverted elements
    let inverse = cloned.reverse();
    
    // 6. Join Array
    let joinedInverse = inverse.join('');
    
    // 7. Compare strings
    if (newStrLow != joinedInverse) {
      return false; 
      } else {
      return true;
      }
    }
    