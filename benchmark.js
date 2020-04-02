
var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;
import list2tree from './list2tree';
var data = [
    { id: "1", name: "test1", pid: "-1" },
    { id: "2", name: "test1", pid: "1" },
    { id: "3", name: "test1", pid: "2" },
    { id: "4", name: "test1", pid: "-1" },
    { id: "5", name: "test1", pid: "1" },
    { id: "6", name: "test1", pid: "2" },
    { id: "7", name: "test1", pid: "-1" },
    { id: "8", name: "test1", pid: "1" },
    { id: "9", name: "test1", pid: "2" },
]

// 添加测试
suite.add('#list2tree#', function () {
    list2tree(data);
})

    .on('cycle', function (event) {
        console.log(String(event.target));
    })

    .run({ 'async': true });