const MongoDatabase = new (require('./server/database'));

const res = {
  type: 'Emergency Shelters',
  name: 'The Road Home – Salt Lake Community Shelter',
  url: 'http://www.theroadhome.org/',
  address: {
    street: '210 South, Rio Grande Street',
    city: 'Salt Lake City',
    state: 'UT',
    zip: '84101',
  },
  phone: '(801) 359-4142',
  details: 'Largest shelter in Utah: For men, women, and children. Singles line up at 10:00am to get a bed',
}

MongoDatabase.createResource(res, x => { console.log('Done'); });