# Sample GUI for Large Display
To run:  
`npm install -g electron`  
`electron .`

This loads up the video, which loops through all the videos in `./videos` in file order.

Press `space` to switch to data, and press `v` to switch to video.

This is the base application of a live facial recognition display. Imagine that the switch between video and data happens on a motion sensor trigger, and that there is a camera hooked up to the same trigger. The camera uploads a snapshot of a person's face that walks via my querying API, then displays data based on the facial match. This data could be any sort of product recommendation, greeting, sale info, or honestly anything. The world is your oyster once you identify. After input from the user (eg. touch screen) or after a certain amount of time, the application fades back to the video loop. 

