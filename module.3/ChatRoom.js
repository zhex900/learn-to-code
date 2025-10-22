/**
 * ChatRoom class
 * - Tracks online users (unique)
 * - Tracks active tags/topics (unique)
 * Demonstrates the advantages of Set:
 * 1️⃣ Automatically prevents duplicates
 * 2️⃣ Fast lookup/removal
 * 3️⃣ Easy iteration
 */
class ChatRoom {
  constructor(roomName) {
    this.roomName = roomName;

    // Set for online users (user IDs)
    this.onlineUsers = new Set();

    // Set for active topics/tags in this room
    this.activeTags = new Set();
  }

  /**
   * User joins the chat room
   * @param {string} userId
   * Example:
   *   room.addUser('user1')
   */
  addUser(userId) {
    this.onlineUsers.add(userId);
  }

  /**
   * User leaves the chat room
   * @param {string} userId
   */
  removeUser(userId) {
    this.onlineUsers.delete(userId);
  }

  /**
   * Check if a user is online
   * @param {string} userId
   * @returns {boolean}
   */
  isUserOnline(userId) {
    return this.onlineUsers.has(userId);
  }

  /**
   * Add an active topic/tag
   * @param {string} tag
   */
  addTag(tag) {
    this.activeTags.add(tag);
  }

  /**
   * Remove a topic/tag
   * @param {string} tag
   */
  removeTag(tag) {
    this.activeTags.delete(tag);
  }

  /**
   * Show all online users
   * @returns {string[]}
   */
  listUsers() {
    return Array.from(this.onlineUsers);
  }

  /**
   * Show all active tags
   * @returns {string[]}
   */
  listTags() {
    return Array.from(this.activeTags);
  }

  /**
   * Clear all users and tags
   */
  clearRoom() {
    this.onlineUsers.clear();
    this.activeTags.clear();
  }
}

// ---------------- Example Usage ----------------

const room = new ChatRoom("JavaScript Lovers");

// Users join
room.addUser("user1");
room.addUser("user2");
room.addUser("user1"); // duplicate ignored automatically

// Add tags
room.addTag("ES6");
room.addTag("Node.js");
room.addTag("ES6"); // duplicate ignored

console.log("Online Users:", room.listUsers()); // ['user1','user2']
console.log("Active Tags:", room.listTags()); // ['ES6','Node.js']

// Check if a user is online
console.log("Is user1 online?", room.isUserOnline("user1")); // true

// User leaves
room.removeUser("user2");
console.log("Online Users after leaving:", room.listUsers()); // ['user1']

// Clear the room
room.clearRoom();
console.log("After clearing:", room.listUsers(), room.listTags()); // [], []
