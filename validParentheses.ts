// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:

// Input: s = "()"

// Output: true

// Example 2:

// Input: s = "()[]{}"

// Output: true

// Example 3:

// Input: s = "(]"

// Output: false

// Example 4:

// Input: s = "([])"

// Output: true

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

function isValid(s: string): boolean {
  // There are inner and outer loops
  // Must be closed in the right order
  const map = new Map<string, string>([
    ["{", "}"],
    ["(", ")"],
    ["[", "]"],
  ]);

  const refMap = new Map<string, number>([]);

  // Split string into array
  const arr = s.split(""); // not necessary?

  for (let i = 0; i < s.length; i++) {
    const currentElement = s[i];
    const nextCloser = map.get(s[i]);
    const currentRef = refMap.get(currentElement);
    console.log({ currentElement, nextCloser, currentRef });
    // If it starts with an opening bracket,
    // it should add a reference to the refmap to check for the closing bracket
    if (nextCloser !== undefined) {
      // Update the number of closing brackets to check for
      const nextNum = refMap.get(s[i]) ?? 0 + 1;
      refMap.set(nextCloser, nextNum);
    } else if (refMap.get(currentElement) !== undefined) {
      // check if there's a closing bracket to be closed

      // Case not addressed: closure in the right order?
      // using refmap as a basis
      // Cannot delete or subtract from value if there is another un-closed bracket
      // But how to tell which opening brakcet came first

      // issue here
      const nextNum = refMap.get(currentElement) ?? 0 - 1;
      if (nextNum <= 0) {
        refMap.delete(currentElement);
      } else {
        refMap.set(currentElement, nextNum);
      }
    } else {
      // return false if there is neither an opening bracket
      // Or if there is no closing bracket required
      return false;
    }
  }

  // number of entries in refmap should be 0 by end of the loop
  // means that all brackets are closed

  console.log({ size: refMap.size });
  // If refMap has any entries, it means that there are some brackets which are not closed
  return !refMap.size;
}

function isValid2(s: string): boolean {
  // There are inner and outer loops
  // Reference of closing brackets to opening brackets
  const map = new Map<string, string>([
    ["}", "{"],
    [")", "("],
    ["]", "["],
  ]);

  // reference of opening brackets to close
  // should only have opening brackets added
  const stack: string[] = [];

  for (let char of s) {
    if (char === "{" || char === "(" || char === "[") {
      // Add as an opening bracket to be closed
      stack.push(char);
    } else if (map.get(char) !== undefined) {
      // if its a closing bracket
      // compare against the latest opening bracket to be closed
      const query = stack.pop();

      // Return false immediately if its not the corresponding opening bracket
      if (query !== map.get(char)) return false;
    }
  }

  // Stack should be empty if properly closed
  return !stack.length;
}
