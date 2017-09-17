# Puzzle Application

This Application is developed as a single page application.
Flow of the application is as follows,
 - `pzmain`  is the main view
 - `pzmain`  contains `question` view and `results` view. 
 - `question` displays the question statement, respective options  and a button group, which allows the user to select the answer 
 - Initially `question` view is shown and `results` view is hidden.
 - Whenever one chooses an answer for the current qn, `question` view is updated to the next question via binding.
 - When the last qn is answered, the `results` view gets displayed with a grid containing the chosen answer, solution and the respective marks for each qn. 


# Basic Application Structure

    src/js               # Contains JavaScript code
        views/           # Html files which represents views
        viewModels/      # Contains Contorllers aand viewmodel data w.r.t each view 
        css/     		 # Contains application specific css

    index.html           # Home page of the application
    appController        # application level controller
    main.js          	 # starts the application

    web/ 				 # Contains the built code


Have git ignored the node modules and themes folders.