const btnGeneratePassword = document.querySelector('.generate-password');
const passwordSuggestions = document.querySelector('.passwords');
const optionsForm = document.querySelector('.options');

btnGeneratePassword.addEventListener('click', (e) => {
	e.preventDefault();

	const length = +optionsForm.length.value;
	const includeNumbers = optionsForm.numbers.checked;
	const includespecialCharas = optionsForm.symbols.checked;

	getPasswordSuggestions(length, includeNumbers, includespecialCharas);
});

function getPassword(length, includeNumbers, includeSymbols) {
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

	let availableCharacters = characters;

	if (includeNumbers) {
		availableCharacters = characters.concat(numbers);
	}

	if (includeSymbols) {
		availableCharacters = availableCharacters.concat(specialCharacters);
	}

	console.log(availableCharacters);

	let password = '';

	for (let i = 0; i < length; i++) {
		password +=
			availableCharacters[
				Math.floor(Math.random() * availableCharacters.length)
			];
	}

	return password;
}

function getPasswordSuggestions(
	length = 16,
	includeNumbers = false,
	includeSymbols = false
) {
	const suggestionsEl = document.querySelectorAll('.password-suggestion');

	suggestionsEl.forEach((element) => {
		// console.log(element);
		element.value = `${getPassword(length, includeNumbers, includeSymbols)}`;
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
