screen Greet "Type a name and get a greeting"
  navbar "Greeter"
  heading "Greet someone"
  input "Name"
  button "Greet" primary // completes in place: the greeting renders below on the same screen
  text "Hello, Ada! 👋"
  text "Enter a name to get a greeting." muted

flow "Greet a person"
  role "User"
  description "A signed-in user types a name and sees a greeting for it"
  Greet
