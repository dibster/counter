'use strict';

const counterJson = {
  userid : 1,
  username : 'dibster',
  appLastUsedTime : 1456563996,
  appLastUsedPlace : {
    type: "Feature",
    geometry: {
     type : 'Point',
     coordinates : [125.6, 10.1]
    },
    properties : {
      name : 'home'
    }
  },

  currentCounters : [
    {
      counterId : 445554,
      topic : 'Pub Visits',
      counter : 'Beers',
      value : 3,
      units  : 'Pints',
      counterLastUsedPlace : {
        type: "Feature",
        geometry: {
          type : 'Point',
          coordinates : [125.6, 10.1]
        },
        properties : {
          name : 'home'
        }
      },
      comment : 'Stella'
    },
    {
      counterId : 678767,
      topic : 'Work Project',
      counter : 'MH Hours',
      value : 4,
      units  : 'Hours',
      counterLastUsedTime : 1456563996,
      counterLastUsedPlace : {
        type: "Feature",
        geometry: {
          type : 'Point',
          coordinates : [125.6, 10.1]
        },
        properties : {
          name : 'home'
        },
        comment : 'Doing Stuff'
      }
    }

  ]

}

const user = {
  id : 1,
  name : 'Dave',
  email : 'dave@evrythng.com',
  friends : [
    {
      id : 1,
      name : 'Zack'
    },
    {
      id : 1,
      name : 'Zack'
    }
  ],
  places : [
    {
      placeid : 123,
      geoPlace : {
        geometry: {
          type : 'Point',
          coordinates : [125.6, 10.1]
        },
        properties : {
          name : 'home'
        }
      }
    }
  ]
}

const counterHistory = {
  userId : 1,
  history : [
    {
      counterId : 456889,
      counts : [
        {
          counterSetAtTime : 1456563996,
          counterSetAtplace : {
            type: "Feature",
            geometry: {
              type : 'Point',
              coordinates : [125.6, 10.1]
            },
            properties : {
              name : 'home',
              placeId : 123
            },
            comment : 'Doing Stuff'
          }
        }
      ]
    }
  ]
}
