# parkshark
Helps you find parking a little more efficiently

## Requirements

### Node Packages
- Mongoose >= 6.5.0
- Express >= 4.18.2
- Firebase >= 5.2.9
- React == 18.1.0
(Refer to package.json for additional packages)

### Backend 
- NodeJS
- Firebase Email/Password Auth
- MongoDB


## Start backend 
Set Environment Variable\
 `MONGODB_URL=mongodb+srv://<user>:<password>@<URL>/?retryWrites=true&w=majority` \
Run \
`$ npm run serve`

## Start frontend
In `src/keys.json`set the `key` field to a Google Maps API Key with access to the Dynamic Maps API and the Geocoding API, otherwise the site will not work.
Run \
`$ npm start`
