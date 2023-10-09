# DrevoGo

DrevoGo is ...

## Prerequisite

When using VSCode, install `prettier` and `ESLint` extensions.
Configure VSCode to use prettier editor on save:

1. Press Ctrl/Cmd + Shift + P
2. Type "settings"
3. Choose "Preferences: Open User Settings (JSON)"
4. Add next lines

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true
}
```

## Running the app

Enter the following at a command prompt:
Install all dependencies:
`npm i`

Local development - run app on port `:8080`
`npm start`

## Commit Message Guidelines

We have very precise rules over how our git commit messages can be formatted ([source](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md)). This leads to **more
readable messages** that are easy to follow when looking through the **project history**. But also,
we use the git commit messages to **generate the change log**.

### Commit Message Format

Each commit message consists of a **type**, a **task** and a **message**:

```
<type>(<task>): <message>
```

Samples:

```
docs: update changelog
```

```
fix(AB-1650): include current filter when export
```

```
feat(AB-1665): review status of images
```

### Type

Must be one of the following:

- **build**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- **ci**: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
- **docs**: Documentation only changes
- **feat**: A new feature
- **fix**: A bug fix
- **perf**: A code change that improves performance
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **test**: Adding missing tests or correcting existing tests

### Task

Must be the same as in jira task, like AB-1665.

### Message

The message contains a succinct description of the change:

- use the imperative, present tense: "change" not "changed" nor "changes"
- don't capitalize the first letter
- no dot (.) at the end
