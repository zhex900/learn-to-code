/**
 * ChatRoom class
 * Demonstrates the use of Set for tracking unique values:
 * - Online users
 * - Active tags/topics
 */
class ChatRoom {
  constructor(roomName) {
    // Initialize the chat room with a name
    // this.roomName: string
    // this.onlineUsers: Set of user IDs
    // this.activeTags: Set of active topic tags
  }

  /**
   * ➕ addUser(userId)
   * Adds a user to the online users set.
   * - Input: userId = 'user1'
   * - Output: none (user added to Set, duplicates ignored)
   */
  addUser(userId) {}

  /**
   * 🗑️ removeUser(userId)
   * Removes a user from the online users set.
   * - Input: userId = 'user2'
   * - Output: none (user removed from Set)
   */
  removeUser(userId) {}

  /**
   * 🔍 isUserOnline(userId)
   * Checks if a specific user is currently online.
   * - Input: userId = 'user1'
   * - Output: boolean
   *   Example: true if user1 is online, false otherwise
   */
  isUserOnline(userId) {}

  /**
   * ➕ addTag(tag)
   * Adds a new active topic/tag to the room.
   * - Input: tag = 'Node.js'
   * - Output: none (duplicates ignored automatically)
   */
  addTag(tag) {}

  /**
   * 🗑️ removeTag(tag)
   * Removes a topic/tag from the active tags set.
   * - Input: tag = 'ES6'
   * - Output: none
   */
  removeTag(tag) {}

  /**
   * 📋 listUsers()
   * Returns an array of all online users.
   * - Input: none
   * - Output: string[]
   *   Example: ['user1', 'user2']
   */
  listUsers() {}

  /**
   * 📋 listTags()
   * Returns an array of all active tags/topics.
   * - Input: none
   * - Output: string[]
   *   Example: ['ES6', 'Node.js']
   */
  listTags() {}

  /**
   * 🧼 clearRoom()
   * Clears all online users and active tags from the room.
   * - Input: none
   * - Output: none
   */
  clearRoom() {}
}
