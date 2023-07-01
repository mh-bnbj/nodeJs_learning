# nodejs-learning_robotProject

This is robot movement project for learning nodejs course

## what does this app do :

Draw a 5x5 checkerboard

In the beginning the robot will be placed in SOUTH WEST, i.e. point (0,0).

A command file should be given to the system, which can contain the following commands in each line:

-   PLACE X,Y,F :
    Set the robot at the X and Y points, and the direction of F: NORTH/SOUTH/WEST/EAST

-   MOVE :
    The robot moves forward one step in the F direction. Note that the bot cannot leave the board

-   LEFT :
    The robot rotates in the anti-clockwise direction

-   RIGHT :
    The robot rotates clockwise

-   REPORT :
    The robot reports where it is.

It process each command and return results

## how to run app:

There is two way to use robot and send command :

-   By commands.txt file and console

-   By html webPage and webServer

### text file

First you should write down all the commands in commands.txt file line by line

After that run this code to start project :

    $ npm run startFile

Then as you can see on console, first it read the commands.txt and extract commands and then it will run the command and will return the result

### webServe

The commands.txt file is not necessary in this method

First run this code to start project :

    $ npm run startServer

It will start server on 127.0.0.1 (localhost) on port 3000

If you open "http://127.0.0.1:3000/mainPage" in you browser, you can use the "command" input and "send command" button on html WebPage to write command and send it to webServer.
Command will processed in webServer and it use robotModel to run command and respond back the result toward webPage.
Result will be shown in the left 5\*5 table.

You can also see your previous commands and its result in the right box
