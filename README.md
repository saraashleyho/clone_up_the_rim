# Lesson Description

Roll Up the Rim was a huge initiative for our team in 2020.  For context, see some of the [press coverage](https://www.toronto.com/news-story/9877119-when-does-roll-up-the-rim-to-win-start-in-2020-/).

## Objective

Students will be able to manipulate the DOM with JavaScript, allowing the user to interact with the page to win a prize.  

## Explanation

The HTML and CSS needed for the final product is already written -- do not alter them!  You should be doing all of your work in the `game.js` file.

##### Your task is to take the page from this:

![Before](readme/before.png)

##### to this:

![After](readme/after.gif)

## Implementation Details

- The trick to getting the cup to animate is to understand the concept of a [CSS Sprite](https://css-tricks.com/css-sprites/).  In this case, we have a very long image called `gameplay-sprite.png` in the images folder.

## Key Skills

- [HTML](https://www.w3schools.com/html/)
- [CSS](https://www.w3schools.com/css/)
- [JavaScript](https://www.w3schools.com/js/)

## Setup Steps

- Clone this repository.
- `cd` into it and open vscode.
- Open a terminal pane and run `npx http-server -c-1` in the command line.
- Visit `localhost:8080`.
- When you edit code and save, reload the browser window.

## Submission Instructions

- File an issue against this repository with a `Given / When / Then` explanation of the desired interation.

```
Given some condition
When something happens
Then the result should be...
```

- Taking note of the unique issue number, checkout a unique branch that corresponds to your issue, with the naming convention `feature-<issue-number>-<your-name>-hamburger-menu`.
- Once you have implemented as much of the interaction as possible, commit your work and push the branch upstream.
- Open a pull request that [autocloses your issue](https://help.github.com/en/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue).
- Request a PR review from `@rbilabs/rbi-teaching`.

## Resources

- [HTML](https://www.w3schools.com/html/)
- [CSS](https://www.w3schools.com/css/)
- [JavaScript](https://www.w3schools.com/js/)

# TEACHER NOTES - Students will not see below this line

Demo available at...

To provision the student repo, with no previous git history:

* Make sure a repo exists with the same name as this one, swapping "Learning" for "Teaching"
* Add any commands needed to clobber the solution in `teacher/scripts/clobber_solution.sh`
* from root, run `teacher/scripts/provision_student_repo.sh`

#### Have you?

- [ ] Required 2 code reviews on this repository's `master` branch?
- [ ] Required 2 code reviews and 1 CODEOWNER on the learning repository's `master` branch?
- [ ] Added the `@rbilabs/rbi-learning` team to the learning repo?
