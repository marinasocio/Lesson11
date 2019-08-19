const getUsers = async () => {
	try {
		const result = await fetch('https://jsonplaceholder.typicode.com/todos');
		const users = await result.json();

		let i = 1;
		let countTrue = 0;
		let countFalse = 0;

		users.forEach(function(item) {
		
			if ((item.userId == i) && (item.id % 20)) {
				console.log(item.id % 20);
				if (item.completed) {
					countTrue += 1;
				} else {
					countFalse += 1;
				}
			} else {
				if (item.completed) {
					countTrue += 1;
				} else {
					countFalse += 1;
				}
				let li = document.createElement('li');
				li.innerHTML = `Пользователь userID = ${item.userId} имеет ${countTrue} завершенных и ${countFalse} не завершенных заданий`;
				console.log(item.userId);
				ul.appendChild(li);
				countTrue = 0;
				countFalse = 0;
				i += 1;
			}
	
		})
	} catch (err) {
		console.error(err);
	}
};

getUsers();
