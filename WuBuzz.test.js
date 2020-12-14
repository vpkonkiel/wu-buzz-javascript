const { TestScheduler } = require('jest');
const WuBuzz = require('./WuBuzz');

test("Clan in the front 15", () => {

    let wuBuzz = new WuBuzz();
    let expected = "1\n2\nWu\n4\nTang\nWu\n7\n8\nWu\nTang\n11\nWu\n13\n14\nWuTangForever\n";

    let actual = wuBuzz.wuChant(15);

    expect(actual).toEqual(expected);
});

test("Clan in the front 40", () => {

    let wuBuzz = new WuBuzz();
    let expected = "1\n2\nWu\n4\nTang\nWu\n7\n8\nWu\nTang\n11\nWu\n13\n14\nWuTangForever\n16\n17\nWu\n19\nTang\nWu\n22\n"+
    "23\nWu\nTang\n26\nWu\n28\n29\nWuTangForever\n31\n32\nWu\n34\nTang\nWu\n37\n38\nWu\nTang\n";

    let actual = wuBuzz.wuChant(40);

    expect(actual).toEqual(expected);
});