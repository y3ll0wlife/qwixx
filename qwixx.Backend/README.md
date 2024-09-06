# qwixx.Backend

Backend witten in [Rust](https://www.rust-lang.org/) with [socketioxide](https://github.com/Totodore/socketioxide) to handle the [Socket.IO](https://socket.io/) connection from the frontend.

## Environment variables

`JWT_SECRET` can be created with a [node.js](https://nodejs.org/en) one liner.

```javascript
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```
