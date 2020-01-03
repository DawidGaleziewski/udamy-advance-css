# running node-sass

1. Install node-sass via:
npm install node-sass --save-dev

2. Setup a script in package.json "scripts":
"compile:sass" : "node-sass input-file.scss output-file.css"

3. run:
npm run compile:sass

4. to make node-sass just watch our files we can add -w flag at the end of the
	 script
