function TodoController($scope) {
	$scope.saved = localStorage.getItem('todos');
	$scope.todos = (localStorage.getItem('todos') !== null) ? JSON.parse($scope.saved) : [{ text: ''}];
	localStorage.setItem('todos', JSON.stringify($scope.todos));


	$scope.addTodo = function () {
		$scope.todos.push({
			text: $scope.todoText,
			
		});
		$scope.todoText = ''; //clear the input after adding
		localStorage.setItem('todos', JSON.stringify($scope.todos));
	};


	$scope.archive = function () {
		var oldTodos = $scope.todos;
		$scope.todos = [];
		angular.forEach(oldTodos, function (todo) {
			if (!todo.done)
				$scope.todos.push(todo);
				$scope.localStorage.delete(); //delete local storage
		});
		
		localStorage.setItem('todos', JSON.stringify($scope.todos));


	};
}


