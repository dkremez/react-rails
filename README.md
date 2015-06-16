## Steps for setting up this project

1. Get a package manager for your OS, like apt-get on Ubuntu or Homebrew on Mac OS X, Sorry windows users
2. Install node.js (node.js will come with npm, its awesome package manager)
3. Git checkout this project 
4. Get a nice editor for javascript, like Sublime Text 3 with JSFormatter, JSHint, and JavascriptNext plugins via Package Control system in Sublime
5. Run `npm install` to load all the project dependencies
6. Run `bin/gulp.js` to compite dist directory
7. Go to api dir: `cd api`
8. Run `bundle`
9. Run `rake db:migrate`
10. Run `rake db:seed`
11. Run `rails s`
12. Run `node ../dist/server.js`
13. Login like 'user@test.com' with 'password' and enjoy