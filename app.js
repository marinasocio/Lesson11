const getUsers = async () => {
	try {
		const result = await fetch('https://jsonplaceholder.typicode.com/todos');
		const users = await result.json();

		let i = 1;
		users.forEach(function(item) {
      let countTrue = 0;
      let countFalse = 0;

			if ((item.userId = i)) {
   
				if (item.completed) {
					countTrue += 1;
				} else {
					countFalse += 1;
        }
        
			} else {
				let li = document.createElement('li');
				li.innerHTML = `Пользователь userID = ${item.userId + 1} имеет ${countTrue} завершенных и ${countFalse} не завершенных заданий`;
        ul.appendChild(li);
      }
      i += 1;
		});
	} catch (err) {
		console.error(err);
	}
};

getUsers();
