function LinkBinaryTree(parent, left, right, data) {
    if (this instanceof LinkBinaryTree) {
        this.parent = parent;
        this.left = left;
        this.right = right;
        this.data = data;
    } else {
        return new LinkBinaryTree();
    }
}
var maxLevel = 4;
/**
 * 创建子节点
 * @param  {string} data        数据
 * @param  {object} parent      父节点
 * @param  {int}    level       层级
 * @param  {int}    position    位置
 * @return {object}             节点
 */
function createNode(data, parent, level) {
    var node = new LinkBinaryTree(parent, null, null, data);;
    if (level !== maxLevel) {
        node.left = createNode(data * 2 - 1, node, level + 1);
        node.right = createNode(data * 2, node, level + 1);
    }
    return node;
}


function createAscendBinaryTree(start) {
    return createNode(start, null, 1);
}

var tree = createAscendBinaryTree(2);
console.log(tree);
