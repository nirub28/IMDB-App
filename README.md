A IMDB App


### Steps Followed to create an App

- Thinking about the UI
- Functionality
	- Add a TODO
	- Delete a TODO
	- Check task
	- Total tasks count
	- Delete all completed tasks
	- Mark all tasks as complete
	- Check pending and completed tasks
- Data
	- tasks - an array
	- completed - an array
	- uncomplete - an array
    - task - {done, text, id}
- Functions (in code)
	- addTodo
	- deleteTodo
	- checkTodo
	- renderTodosList
	- showNotification
	- handleInputKeyPress

	---------
	Home Page
Search any movie from the API and display the search results on the frontend (as I type the search results should update, just like Google does for suggestions).
Each search result of the movie should have a favourite button, clicking on which the movie should be added to “My favourite movies” (a list).
On clicking any particular search result (any movie), open a new page with more information about that movie (movie page)

Movie Page
Should show information about the movie like its name, photo, plot, etc (these are must, rest you can add if you want).

My favourite movies Page
Display a list of all the favourite movies.
Make this list persistent (should have the same number of movies before and after closing the browser/refreshing the browser).
Remove from favourites button: Each movie should have remove from favourites button, clicking on which should remove that movie from the list.
