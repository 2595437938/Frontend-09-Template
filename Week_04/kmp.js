function kmp(source, pattern) {
	let table = new Array(pattern.length).fill(0);
	{
		let i = 1, j = 0;//i是原字符串的位置，j是table的
		while (i < pattern.length) {
			if (pattern[i] === pattern[j]) {
				++i, ++j;
				table[i] = j;
			} else {
				if (j > 0)
					j = table[j];
				else
					++i;
			}
		}
	}
	//console.log(table);

	//匹配
	{
		let i = 0, j = 0;
		while (i < source.length) {
			if (pattern[j] === source[i]) {
				++i, ++j;
			} else {
				if (j > 0)
					j = table[j];
				else
					++i;
			}
			if (j === pattern.length) {
				return true;
			}
		}
		return false;
	}

}
console.log(kmp("abc", "abc"));
