To reproduce run:

npm i
npm run test:integration

In HttpClient, if remove "@Injectable({ scope: Scope.TRANSIENT })" the test works.
