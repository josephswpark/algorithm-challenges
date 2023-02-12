// // Calculating invoices for customer billing

// // Background

// // In the past, we provided some raw billing data in JSON format to the finance team, which they used to manually generate monthly invoices for our customers.Recently, they’ve asked us to create some automation to make this process less error - prone.

// //   Instructions

// // Your goal is to implement the billFor function to calculate the total monthly bill for a customer.

// // Customers are billed based on their subscription tier for the month.We charge them a prorated amount for each user who was active during that month.

// // The most - senior engineer on your team suggested you should also spend some time designing your algorithm before jumping into the problem, since some ways of handling this might end up being harder to build than others.

// //   Parameters

// // This billing function accepts the following parameters:

// // month
// // Always present. Has the following structure:

// // "2019-01"   // January 2019 in YYYY-MM format
// // activeSubscription
// // May be undefined / null.If present, has the following structure:

// // {
// //   id: 1,
// //   customerId: 1,
// //   monthlyPriceInDollars: 4,  // price per active user per month
// // }
// // users
// // May be empty, but not undefined / null. Has the following structure:

// // [
// //   {
// //     id: 1,
// //     name: "Employee #1",
// //     customerId: 1,

// //     // when this user started
// //     activatedOn: new Date("2018-11-04"),

// //     // last day to bill for user
// //     // should bill up to and including this date
// //     // since user had some access on this date
// //     deactivatedOn: new Date("2019-01-10")
// //   },
// //   {
// //     id: 2,
// //     name: "Employee #2",
// //     customerId: 1,

// //     // when this user started
// //     activatedOn: new Date("2018-12-04"),

// //     // hasn't been deactivated yet
// //     deactivatedOn: null
// //   },
// // ]
// // Return value

// // This function should return the total monthly bill for the customer, rounded to 2 decimal places.

// // If there are no users or the subscription is not present, the function should return 0 since the customer does not owe anything for that month.

// //   Testing

// // The automated tests we provide only cover a few key cases, so you should plan to add some of your own tests or modify the existing ones to ensure that your solution handles any edge cases.You should be able to follow the existing patterns for naming and constructing tests to add your own.

// //  Notes / Edge cases

// // It’s more important for the return value to be correct than it is for the algorithm to be highly optimized.
// // You can store intermediate results as any kind of decimal type(e.g.float, double).You do not need to round values until the last step.
// // You should not change function names or return types of the provided functions since our test cases depend on those not changing.

// // function isActiveInMonth(user, month) {
// //   const monthStart = firstDayOfMonth(new Date(month));
// //   const monthEnd = lastDayOfMonth(new Date(month));
// //   console.log('start', monthStart);
// //   console.log('end', monthEnd);
// //   return user.activatedOn <= monthStart && (user.deactivatedOn === null || user.deactivatedOn >= monthEnd);
// // }

// const userSignedUp = [
//   {
//     id: 1,
//     name: 'Employee #1',
//     activatedOn: new Date('2018-11-04'),
//     deactivatedOn: null,
//     customerId: 1
//   },
//   {
//     id: 2,
//     name: 'Employee #2',
//     activatedOn: new Date('2018-12-04'),
//     deactivatedOn: null,
//     customerId: 1
//   },
//   {
//     id: 3,
//     name: 'Employee #3',
//     activatedOn: new Date('2019-01-10'),
//     deactivatedOn: null,
//     customerId: 1
//   }
// ];

// const constantUsers = [
//   {
//     id: 1,
//     name: 'Employee #1',
//     activatedOn: new Date('2018-11-04'),
//     deactivatedOn: null,
//     customerId: 1
//   },
//   {
//     id: 2,
//     name: 'Employee #2',
//     activatedOn: new Date('2018-12-04'),
//     deactivatedOn: null,
//     customerId: 1
//   }
// ];

// const newPlan = {
//   id: 1,
//   customerId: 1,
//   monthlyPriceInDollars: 4
// };

// const noUsers = [];

// function billFor(month, activeSubscription, users) {
//   // your code here!
//   const splitMonth = month.split('-');
//   let total = 0;

//   for (let i = 0; i < users.length; i++) {
//     const currentDate = new Date(users[i].activatedOn).getDate() + 1;
//     const firstDay = firstDayOfMonth(users[i].activatedOn).getDate();
//     const lastDay = lastDayOfMonth(users[i].activatedOn).getDate();
//     const billingMonth = new Date(splitMonth);
//     const currentMonth = billingMonth.getMonth();
//     const currentYear = billingMonth.getFullYear();
//     const activatedMonth = users[i].activatedOn.getMonth();
//     const activatedYear = users[i].activatedOn.getFullYear();
//     const dailyRate = activeSubscription.monthlyPriceInDollars / lastDay;

//     if (currentYear < activatedYear) {
//       total += 0;
//     } else if (currentYear === activatedYear && currentMonth < activatedMonth) {
//       total += 0;
//     } else {
//       if (users[i].deactivatedOn === null) {
//         if (currentMonth === activatedMonth && currentYear === activatedYear) {
//           total += dailyRate * (lastDay - currentDate + 1);
//         } else {
//           total += activeSubscription.monthlyPriceInDollars;
//         }
//       } else if (firstDay !== currentDate && users[i].deactivatedOn !== null) {
//         total += dailyRate * (lastDay - currentDate + 1);
//       }
//     }
//   }
//   return total.toFixed(2);
// }

// /*******************
// * Helper functions *
// *******************/

// /**
// Takes a Date instance and returns a Date which is the first day
// of that month. For example:

// firstDayOfMonth(new Date(2019, 2, 7)) // => new Date(2019, 2, 1)

// Input type: Date
// Output type: Date
// **/

// function firstDayOfMonth(date) {
//   return new Date(date.getFullYear(), date.getMonth(), 1);
// }

// // this turns any date into the first day of the month

// /**
// Takes a Date object and returns a Date which is the last day
// of that month. For example:

// lastDayOfMonth(new Date(2019, 2, 7)) // => new Date(2019, 2, 28)

// Input type: Date
// Output type: Date
// **/
// function lastDayOfMonth(date) {
//   return new Date(date.getFullYear(), date.getMonth() + 1, 0);
// }

// // turns into the last day of the month

// /**
// Takes a Date object and returns a Date which is the next day.
// For example:

// nextDay(new Date(2019, 2, 7)) // => new Date(2019, 2, 8)
// nextDay(new Date(2019, 2, 28)) // => new Date(2019, 3, 1)

// Input type: Date
// Output type: Date
// **/
// // function nextDay(date) {
// //   return new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
// // }

// // console.log('no-user', billFor('2019-01', newPlan, noUsers));
// // console.log('constant-user', billFor('2019-01', newPlan, constantUsers)); // 8
// // console.log('signedUp', billFor('2019-01', newPlan, userSignedUp)); // equal 10.84

// const activeSubscription = {
//   id: 763,
//   customerId: 328,
//   monthlyPriceInDollars: 4
// };

// const users = [
//   {
//     id: 1,
//     name: 'Employee #1',
//     customerId: 1,
//     activatedOn: new Date('2021-11-04'),
//     deactivatedOn: new Date('2022-04-10')
//   },
//   {
//     id: 2,
//     name: 'Employee #2',
//     customerId: 1,
//     activatedOn: new Date('2021-12-04'),
//     deactivatedOn: null
//   }
// ];

// // console.log('deactivated-one', billFor('2019-01', activeSubscription, users));
