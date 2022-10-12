const btnGeneratePassword = document.querySelector('.generate-password');
const passwordSuggestions = document.querySelector('.passwords');

btnGeneratePassword.addEventListener('click', getPasswordSuggestions);

function getPassword(length) {
	const characters = [
		'A',
		'B',
		'C',
		'D',
		'E',
		'F',
		'G',
		'H',
		'I',
		'J',
		'K',
		'L',
		'M',
		'N',
		'O',
		'P',
		'Q',
		'R',
		'S',
		'T',
		'U',
		'V',
		'W',
		'X',
		'Y',
		'Z',
		'a',
		'b',
		'c',
		'd',
		'e',
		'f',
		'g',
		'h',
		'i',
		'j',
		'k',
		'l',
		'm',
		'n',
		'o',
		'p',
		'q',
		'r',
		's',
		't',
		'u',
		'v',
		'w',
		'x',
		'y',
		'z',
	];

	const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
	const specialCharacters = [
		'~',
		'`',
		'!',
		'@',
		'#',
		'$',
		'%',
		'^',
		'&',
		'*',
		'(',
		')',
		'_',
		'-',
		'+',
		'=',
		'{',
		'[',
		'}',
		']',
		',',
		'|',
		':',
		';',
		'<',
		'>',
		'.',
		'?',
		'/',
	];

	const availableCharacters = characters
		.concat(numbers)
		.concat(specialCharacters);

	let password = '';

	for (let i = 0; i < length; i++) {
		password +=
			availableCharacters[
				Math.floor(Math.random() * availableCharacters.length)
			];
	}

	return password;
}

function getPasswordSuggestions() {
	const length = 16;
	const suggestionsEl = document.querySelectorAll('.password-suggestion');

	suggestionsEl.forEach((element) => {
		console.log(element);
		element.value = `${getPassword(length)}`;
	});
}

passwordSuggestions.addEventListener('click', (e) => {
	const passwordClicked = e.target;

	navigator.clipboard.writeText(passwordClicked.value);

	passwordClicked.classList.add('copied');

	setTimeout(() => {
		passwordClicked.classList.remove('copied');
	}, 400);
});
