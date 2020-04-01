
function list2tree(data, file = "id", byField = "pid",appendField="children") {
    const res = [];
    const map = data.reduce((res, val) => (res[val[file]] = val, res), {});
    for (let item of data) {
        if (!item[byField] || item[byField] < 1) {
            res.push(item);
            continue
        }
        else if (item[byField] in map) {
            const parent = map[item[byField]];
            parent[appendField]=parent[appendField]||[];
            parent[appendField].push(item)
        }
    }
    return  res;
}
