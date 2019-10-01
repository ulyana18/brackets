module.exports = function check(str, bracketsConfig) {
  let firstbrackets='';
  for(let i=0; i<str.length; i++) {
    for(let n=0; n<bracketsConfig.length; n++) {
      if(str[i]===bracketsConfig[n][0] && bracketsConfig[n][0]===bracketsConfig[n][1]) {
        if(firstbrackets[firstbrackets.length-1]===bracketsConfig[n][0]) {
          firstbrackets=firstbrackets.slice(0, firstbrackets.length-1);
          break;
        }
        if(firstbrackets[firstbrackets.length-1]!==bracketsConfig[n][0]) {
          firstbrackets+=str[i]; 
          break;
        }
        return false;
      }

      if(str[i]===bracketsConfig[n][0]) {
        firstbrackets+=str[i]; 
        break;
      }
      if(str[i]===bracketsConfig[n][1]) {
        if(firstbrackets[firstbrackets.length-1]===bracketsConfig[n][0]) {
          firstbrackets=firstbrackets.slice(0, firstbrackets.length-1);
          break;
        }
        else return false;
      }
    }
  }
  if(firstbrackets === '')
  return true;
  else return false;
}
