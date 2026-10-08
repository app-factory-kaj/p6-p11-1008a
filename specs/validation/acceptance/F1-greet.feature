Feature: F1 Greet

  @story-F1.1 @story-F1.2 @story-F1.3
  Rule: Pressing Greet with a name shows a greeting for that name

    Scenario: Ada is greeted
      Given Ada is signed in on the Greet form
      When she enters "Ada" and presses Greet
      Then a greeting containing "Ada" is shown below the form

    Scenario: A different name gets its own greeting
      Given Ben is signed in on the Greet form
      When he enters "Ben" and presses Greet
      Then a greeting containing "Ben" is shown below the form

  @story-F1.4
  Rule: Pressing Greet without a name shows a message instead of a greeting

    @negative
    Scenario: Greet pressed with no name entered
      Given Ada is signed in on the Greet form with the name field empty
      When she presses Greet
      Then no greeting is shown
      And she sees a clear message asking her to enter a name
