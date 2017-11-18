const MongoDatabase = new (require('./server/database'));

const res = {
  type: 'Emergency Shelters',
  name: 'Salt Lake Christmas Box House',
  url: 'http://www.thechristmasboxhouse.org/',
  address: {
    street: '3660 South, West Temple',
    city: 'Salt Lake City',
    state: 'UT',
    zip: '84115',
  },
  phone: '(801) 747-2201',
  details: "Emergency Shelter for Children only ",
}

MongoDatabase.createResource(res, x => { console.log('Done'); });