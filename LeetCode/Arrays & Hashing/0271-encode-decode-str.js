/**
	@title 271. Encode and Decode Strings
	@difficulty Medium
	@url https://leetcode.com/problems/encode-and-decode-strings/

	@description
		Design an algorithm to encode a list of strings to a string. The encoded string is then sent over the network and is decoded back to the original list of strings.
		Machine 1 (sender) has the function:
		string encode(vector<string> strs) {
		  // ... your code
		  return encoded_string;
		}
		Machine 2 (receiver) has the function:
		vector<string> decode(string s) {
		  //... your code
		  return strs;
		}
		So Machine 1 does:
		string encoded_string = encode(strs);
		and Machine 2 does:
		vector<string> strs2 = decode(encoded_string);
		strs2 in Machine 2 should be the same as strs in Machine 1.
		Implement the encode and decode methods.

	Note:
		The string may contain any possible characters out of 256 valid ascii characters. Your algorithm should be generalized enough to work on any possible characters.
		Do not use class member/global/static variables to store states. Your encode and decode algorithms should be stateless.
		Do not rely on any library method such as eval or serialize methods. You should implement your own encode/decode algorithm.

	@param	{string[]} strs
	@return {string}
 */

var encode = function (strs) {
    return strs.map((str) => `${str.length}#${str}`).join("");
};

var decode = function (str) {
    let i = 0,
        result = [];

    while (i < str.length) {
        let j = i;
        while (str[j] !== "#") {
            ++j;
        }

        const len = Number(str.slice(i, j));
        result.push(str.slice(++j, j + len));
        i = j + len;
    }

    return result;
};
console.log(encode(["abc", "def"]));
console.log(decode("3#abc3#def"));
