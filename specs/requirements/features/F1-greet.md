# Greet

## Purpose

Lets a signed-in user type a name, press a Greet button, and see a greeting for that name displayed below the form.

## User Stories

- F1.1 As a User, I enter a name in a text field.
- F1.2 As a User, I press a Greet button to submit the name.
- F1.3 As a User, I see a greeting that includes the name I entered, shown below the form.
- F1.4 As a User, I see a clear message if I press Greet without entering a name, instead of a greeting. *assumed*

## Decisions

- The greeting is generated locally in the app (e.g. "Hello, `<name>`!") — no external service or agent is involved in producing it. *assumed*

## Out of Scope

- Saving or recalling previously entered names.

## Open Questions

None.