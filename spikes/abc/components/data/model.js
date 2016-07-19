
import NativeStore from './nativestore.js';

class Model {

    async getCounts() {
        try {
            const countDb = new NativeStore();
            const data = await countDB.read();
            console.log('got data', data);
            return JSON.parse(data);
        } catch (error) {
            console.error('AsyncStorage error: ' + error.message);
        }
    }
}

// exports.getCounts = function () {
//
//     let data =  countDb.read().then(function (d) {
//         console.log('resolved', d);
//     });
//
//     console.log('data read is ', data);
//
//     const counts = [
//         {
//             id : 1,
//             value : 1,
//             name : 'Runs',
//             increment : 1,
//             units : 'runs',
//             timestamp : 1,
//             geoJson : {
//                 lat : 67.89,
//                 lon : 0.00
//             }
//         },
//         {
//             id : 2,
//             value : 4,
//             name : 'Coffees',
//             increment : 1,
//             units : 'cups',
//             timestamp : 1,
//             geoJson : {
//                 lat : 67.89,
//                 lon : 0.00
//             }
//         }
//     ];
//
//     return counts;
//
// };
//
// exports.incrementCount = function (count) {
//
//     count.value = count.value + count.increment;
//     count.timestamp = currentTimeStamp();
//     count.geoJson = currentPlace();
//     countDb.save(count);
//     return count;
//
// };
//
// function currentTimeStamp() {
//     return new Date().toISOstring();
// }
//
// function currentPlace() {
//     // get geo location, ogtherwise use last onPress
//     let place = {};
//     return place;
// }

export default Model;
