# React Redux assignment — Actions, Reducer, Normalizr, Immutable, Selectors

This project contains two mini-projects required by the assignment:

- Project 1: Action creators that fetch notifications and normalize them using Normalizr. Includes async action (thunk) and tests.
- Project 2: Reducer and selectors that use Immutable.js for state shape and pure reducer rules. Includes unit tests for reducer and selectors.

How to run tests (on Ubuntu 18.04 / Node 12.x as required by the assignment):

Install dependencies:

```bash
npm install
```

Run tests:

```bash
npm test
```

Files of interest:

- `src/actions/notificationsActions.js` — async action creator that fetches notifications and normalizes them using Normalizr.
- `src/schemas/notifications.js` — Normalizr schema used to normalize nested notifications.
- `src/reducers/notificationsReducer.js` — reducer implemented using Immutable.js Map and List.
- `src/selectors/notificationsSelectors.js` — selectors to get denormalized lists and counts.
- `__tests__/` — Jest tests covering actions (with mock store), reducer, and selectors.
