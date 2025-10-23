/**
 * 🧠 UserSessionManager
 * A session manager that uses a Map to track user sessions.
 * Each key is a user object, and the value is their session data.
 */
class UserSessionManager {
  constructor() {
    // Initialize an empty Map to hold user sessions
    this.sessions = new Map();
  }

  /**
   * ➕ addSession(user, data)
   * Adds a new session for the given user.
   * - Input: user = { name: "Jake", role: "admin" }, data = { token: "abc123" }
   * - Output: none (adds to internal Map)
   */
  addSession(user, data) {
    this.sessions.set(user, { ...data, timestamp: new Date() });
  }

  /**
   * 🔍 getSession(user)
   * Retrieves the session data for a specific user.
   * - Input: user = { name: "Jake" }
   * - Output: { token: "abc123", lastActive: Date }
   */
  getSession(user) {}

  /**
   * ✅ hasSession(user)
   * Checks if a session exists for the user.
   * - Input: user = { name: "Jake" }
   * - Output: true / false
   */
  hasSession(user) {}

  /**
   * 🔄 updateSession(user, newData)
   * Updates session data for an existing user.
   * - Input: user = { name: "Jake" }, newData = { token: "new456" }
   * - Output: none (updates Map)
   */
  updateSession(user, newData) {
    if (!this.sessions.has(user)) {
      return;
    }
    this.sessions.set(user, { ...this.sessions.get(user), ...newData });
  }

  /**
   * 🗑️ removeSession(user)
   * Removes the session for the specified user.
   * - Input: user = { name: "Jake" }
   * - Output: none (removes from Map)
   */
  removeSession(user) {}

  /**
   * 🔢 count()
   * Returns the number of active sessions.
   * - Input: none
   * - Output: integer (e.g., 3)
   */
  count() {}

  /**
   * 📋 showAllSessions()
   * Logs or lists all sessions currently stored.
   * - Input: none
   * - Output: console display or array of all sessions
   */
  showAllSessions() {
    for (const [user, session] of this.sessions) {
      console.log("user->", user, "session->", session);
    }
  }

  /**
   * 🧹 cleanupInactive(maxMinutes)
   * Removes sessions that have been inactive for longer than `maxMinutes`.
   * - Input: maxMinutes = 30
   * - Output: none (removes old sessions)
   */
  cleanupInactive(maxMinutes) {
    for (const [user, { timestamp }] of this.sessions) {
      console.log(user, timestamp);
      const ageInMinutes = (+new Date() - +new Date(timestamp)) / 1000 / 60;
      if (ageInMinutes > maxMinutes) {
        this.sessions.delete(user);
      }
    }
  }

  /**
   * 🔁 forEachSession(callback)
   * Runs a callback function for every session in the Map.
   * - Input: callback(user, session)
   * - Output: none
   * Example:
   *   manager.forEachSession((user, session) => console.log(user.name, session))
   */
  forEachSession(callback) {
    for (const session of this.sessions) {
      callback(session);
    }
  }

  /**
   * 🧾 toObject()
   * Converts all sessions in the Map into a plain JavaScript object.
   * - Input: none
   * - Output: { "Jake": { token: "abc123", lastActive: "..." }, ... }
   */
  toObject() {
    return Object.fromEntries(this.sessions);
  }

  /**
   * 📜 toJSON(pretty)
   * Converts the sessions Map into a JSON string.
   * - Input: pretty = true (optional, adds indentation)
   * - Output: JSON string
   * Example:
   *   manager.toJSON(true)
   *   => "{\n  'Jake': { 'token': 'abc123', ... }\n}"
   */
  toJSON(pretty = false) {
    const obj = this.toObject();
    const objStr = JSON.stringify(obj, null, 2);
    const o = JSON.parse(objStr);
    console.log();
    return objStr;
  }

  /**
   * 🔁 fromObject(obj)
   * Restores sessions from a plain object (inverse of toObject()).
   * - Input: { "Jake": { token: "abc123", lastActive: "..." } }
   * - Output: none (recreates Map)
   */
  fromObject(obj) {}

  /**
   * 🧼 clear()
   * Clears all sessions from memory.
   * - Input: none
   * - Output: none
   */
  clear() {}
}

const sessionManager = new UserSessionManager();

sessionManager.addSession("jake", {
  role: "admin",
  login: "time",
  theme: "dark",
});
sessionManager.addSession("John", {
  role: "admin",
  login: "time",
  theme: "dark",
});

// sessionManager.updateSession("jake", {
//   theme: "light",
//   source: "internet",
// });
// sessionManager.showAllSessions();
// sessionManager.cleanupInactive(10);

// console.log(sessionManager.toJSON());
/*
  {
    role: "admin",
    login: "time",
    theme: "light",
    source: "internet",
  }
*/
