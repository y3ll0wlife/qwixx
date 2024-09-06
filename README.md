![Banner](/assets/banner.png)

# qwixx

> A fast family dice game

## About

This project aims to create an online scorecard that can be used instead of of the paper cards that the game provides.

### How to play?

Here is a 5 minute video on how to play the game that is well done. https://www.youtube.com/watch?v=iOHv75q-kP4

After watching that you can return here to use this instead of the paper scorecards.

![Landing page](./assets/landing%20page.png)

On the first page you are choiced with option of either creating and game or joining one. Either way you have to choose an username. Then you can either create the game if you want to be the administrator else wait until someone else has created a game and you can enter the 5 character code and press join game and you will be part of their game.

![Game screen](./assets/game%20screen.png)

Now that you have a created or joined a game you will be on this screen. This is the game screen where you the majority of the time will be spent. We we will now go over what the some of the key components on the screen.

1. This is the game code that is used to join a game.
2. This are the end tiles, disabled until the requirements are meet.
3. These are the penalty buttons, pressing one will lower your score by 5
4. This is your score, each row has it's own point calculation with subraction of the penalties next to the end and then the your total score after that.
5. **(Game creator only)** The game creator has the option to the end game after a end game condition has been meet this present the end scoreboard.
6. This will make the user leave the game if they don't feel like playing anymore.

![End game screen](./assets/end%20game%20screen.png)

After the game creator has ended the game everyone will be presented the end game screen. Where you are able to see how everyone performed that game ordered by the total points in descending order.

After that you are presented with a leave game button and you are ready to play your next game.

### Key features of this program

**Leave protection**, if a user accidently refreshes the page or turns their phone of the game will keep track of this information and automatically reconnect them to the game.

**Enforce rules**, the program enforces all the rules of Qwixx and makes it impossible to break them so no cheating ;).

## Project structure

We have 2 packages inside the project:

- **qwixx.Frontend:** [React](https://react.dev/) frontend.
- **qwixx.Backend:** [Rust](https://www.rust-lang.org/) backend.

## License

[MIT](./LICENSE)
