// 先序遍历

const root = {
  val: "A",
  left: {
    val: "B",
    left: {
      val: "D",
    },
    right: {
      val: "E",
    },
  },
  right: {
    val: "C",
    right: {
      val: "F",
    },
  },
};

function preorder(root) {
  if (!root) {
    return;
  }
  console.log("先序遍历的节点是：", root.val);
  preorder(root.left);
  preorder(root.right);
}
preorder(root);

function inorder(root) {
  if (!root) {
    return;
  }
  inorder(root.left);
  console.log("中序遍历的节点是1：", root.val);
  inorder(root.right);
}
inorder(root);

function postorder(root) {
  if (!root) {
    return;
  }
  postorder(root.left);
  postorder(root.right);

  console.log("后序遍历的节点是：", root.val);
}
postorder(root);
