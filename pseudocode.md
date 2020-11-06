# Quiz.html structure
    1. Nav Bar element with a link to scoreboard and the timer. 
    2. Section element - Will contain welcome message (with a start button below the welcome message) 
    as well the quiz questions. 
    3. Section element - right below the quiz question, will display to show if the user
    answered the question correctly or incorrently. 
    4. Question breakdown - A h2 or h3 element that contains the question. Then below that 
    an unordered list containing buttons for each response
    5. Input element - for user to add their initials after they are done taking the test. 

# Scoreboard.html structure
    1. Section element - will contain an ordered list with two buttons below the list that the user
    can click on to go back to the welcome screen or to clear the scoreboard list and start fresh. 

# Quiz.html functionality

    1. When I click on the word "scoreboard" in the top left hand corner of the screen, i should be redirected to the scoreboard.html page. 
    2. When I click on the "start" button, the first quiz question should display and the timer in the top right hand corner of the screen should begin.  
    3. When the user clicks on choice, they should be notified whether or not the answer they provided was correct or incorrect. If the user answers the question incorrectly, time will be deducted from the current timeleft on the screen. 
    4. When user finishes answering all questions or if timer reaches o (which ever scenario occurs first), display the user's final score and ask them for their initials (user input field). After user inputs their initials and clicks submit redirect the user to the scoreboard.html page. 

# scoreboard.html functionality 

    1. After the user submits their initials on the previous page, the following should take place. 
        a. If they were the first ones taking this quiz, then automatically display their submitted name as the first item in the ordered list. 
        b. If they were the second, third, fourth, or nth user to take the quiz, then compare their score with scores of the individuals who have take this quiz and place them accordingly on the list. 
    2. If user clicks on "Back to welcome screen" then redirect the user back to the welcome screen. 
    3. If user clicks on the "clear scoreboard" button then clear all the users from the scoreboard and start again. This should also clear all the associated data stored in local storage as well. 