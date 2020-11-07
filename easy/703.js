// class KthLargest {
//     constructor() {
//         this.items = [];
//     }
//
//     seek() {
//         return this.items[0];
//     }
//
//     add(item) {
//         let len = this.items.length;
//         this.items.push(item);
//         while (len > 0 && this.items[(Math.floor((len + 1) / 2 - 1))] > this.items[len]) {
//             let t = this.items[len];
//             this.items[len] = this.items[(Math.floor((len + 1) / 2 - 1))];
//             this.items[(Math.floor((len + 1) / 2 - 1))] = t;
//             len = Math.floor((len + 1) / 2 - 1);
//         }
//     }
//
//     pop() {
//         if (this.items.length === 1) {
//             return this.items.pop();
//         }
//         const ret = this.items[0];
//         this.items[0] = this.items.pop();
//         let i = 0;
//         while (true) {
//             let lowest = this.items[(i + 1) * 2] < this.items[(i + 1) * 2 - 1]
//                 ? (i + 1) * 2 : (i + 1) * 2 - 1;
//             if (this.items[i] < this.items[lowest]) {
//                 let t = this.items[i];
//                 this.items[i] = this.items[lowest];
//                 this.items[lowest] = t;
//                 i = lowest
//             } else break;
//         }
//         return ret;
//     }
// }
//
// let l = new KthLargest();
// l.push(4);
// l.push(5);
// l.push(8);
// l.push(2);
//
// console.log(l.pop())
// console.log(l.pop());
// console.log(l.pop());
// console.log('================')
// console.log(l.seek())
// console.log(l)
// console.log('================')