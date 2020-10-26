class conversationNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const howAreYou = new conversationNode("How are you?");
howAreYou.left = new conversationNode(["I'm good.", "I'm great!", "I'm wonderful!"]) // this would give a random response
howAreYou.left.left = new conversationNode("That's great to hear. How's the family?")
howAreYou.left.left.left = new conversationNode(["They're awesome!", "They're doing great, thank you for asking!"])
howAreYou.left.left.left.left = new conversationNode("Fantastic!")


howAreYou.right = new conversationNode("I'm terrible.")
howAreYou.left.right = new conversationNode("I'm glad you're doing well")
howAreYou.right.left = new conversationNode("I'm sorry to hear that...")
howAreYou.right.right = new conversationNode("BOO HOO.")

const jNodes = [howAreYou, howAreYou.left, howAreYou.left.left, howAreYou.left.left.left, howAreYou.left.left.left.left]