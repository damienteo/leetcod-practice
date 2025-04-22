function longestCommonPrefix(strs: string[]): string {
  // set variable to be compared against
  // prefix will be the first string at the start
  let prefix = strs[0];

  // brute force method
  // compare element by element
  for (let i = 1; i < strs.length; i++) {
    // break loop if common prefix is not found after comparison of the first two elements
    // if comparison of any two elements does not result in a common prefix, the prefix will be set to zero at the end of the loop
    if (i > 1 && prefix.length === 0) {
      break;
    }
    //reset nextPrefix every loop
    let nextPrefix = "";
    // brute force method
    // compare letter by letter
    // length should be compared against the previous string in case the next string is shorter than the first string
    for (let j = 0; j < strs[i - 1].length; j++) {
      // first iteration compares string
      // second iteration compares against common prefix
      console.log({ str: strs[i][j], nextPrefix });
      if (prefix[j] === strs[i][j]) {
        nextPrefix += strs[i][j];
      } else {
        console.log({ nextPrefix });
        // set latest nextPrefix as prefix
        prefix = nextPrefix;
        //break loop if different character encountered.
        break;
      }
    }
  }
  return prefix;
}

// function longestCommonPrefix(strs: string[]): string {
//     if (strs.length === 0) return "";

//     // Start with the first string as the initial prefix
//     let prefix = strs[0];

//     for (let i = 1; i < strs.length; i++) {
//       // Shrink prefix until it's a prefix of strs[i]
//       while (!strs[i].startsWith(prefix)) {
//         prefix = prefix.slice(0, -1);
//         if (prefix === "") return "";
//       }
//     }

//     return prefix;
//   }
