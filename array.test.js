import analysis from "./array";


test("test 1", () => {
   expect(analysis([0])).toStrictEqual({
     average: 0,
     min: 0,
     max: 0,
     length: 1,
   });
 });

test("test 2", () => {
   expect(analysis([1, 2, 3, 4, 6, 8])).toEqual({
     average: 4,
     min: 1,
     max: 8,
     length: 6,
   });
 });

 test("test 3", () => {
   expect(analysis([1, 2, 3, 4, 5])).toEqual({
     average: 3,
     min: 1,
     max: 5,
     length: 5,
   });
 });

 test("test 4", () => {
   expect(analysis([7,9,3,1])).toEqual({
     average: 5,
     min: 1,
     max: 9,
     length: 4,
   });
 });
 
 test("test 4", () => {
   expect(analysis([6,10,9,0,7,5,3,0,0,0])).toEqual({
     average: 4,
     min: 0,
     max: 10,
     length: 10,
   });
 });
 

 