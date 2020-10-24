class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const root = new TreeNode("How are you? ");
root.left = new TreeNode(["I'm good.", "I'm great!", "I'm wonderful!"]) // this would give a random response
root.right = new TreeNode("I'm terrible.")
root.left.left = new TreeNode("That's great to hear.")
root.left.right = new TreeNode("I'm glad you're doing well")
root.right.left = new TreeNode("I'm sorry to hear that...")
root.right.right = new TreeNode("BOO HOO.")

const testing = [root, root.left, root.left.left]