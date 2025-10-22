class UserSessionManager {
  constructor() {
    this.sessions = new Map();
  }

  addSession(user, data) {
    this.sessions.set(user, {
      ...data,
      lastActive: new Date(),
    });
    console.log(`🟢 Added session for ${user.name}`);
  }

  getSession(user) {
    return this.sessions.get(user);
  }

  hasSession(user) {
    return this.sessions.has(user);
  }

  updateSession(user, newData) {
    if (!this.sessions.has(user)) {
      console.log(`⚠️ No session found for ${user.name}, creating new one.`);
      this.addSession(user, newData);
      return;
    }

    const currentSession = this.sessions.get(user);
    const updatedSession = {
      ...currentSession,
      ...newData,
      lastActive: new Date(),
    };

    this.sessions.set(user, updatedSession);
    console.log(`🔄 Updated session for ${user.name}`);
  }

  removeSession(user) {
    if (this.sessions.delete(user)) {
      console.log(`🗑️ Removed session for ${user.name}`);
    } else {
      console.log(`⚠️ No session found for ${user.name}`);
    }
  }

  count() {
    return this.sessions.size;
  }

  showAllSessions() {
    console.log("📋 All Sessions:");
    for (const [user, session] of this.sessions.entries()) {
      console.log(`- ${user.name} (${user.role}):`, session);
    }
  }

  cleanupInactive(maxMinutes) {
    const now = Date.now();
    for (const [user, session] of this.sessions) {
      const inactiveTime = (now - session.lastActive.getTime()) / 60000;
      if (inactiveTime > maxMinutes) {
        this.sessions.delete(user);
        console.log(`🧹 Removed inactive session for ${user.name}`);
      }
    }
  }

  forEachSession(callback) {
    for (const [user, session] of this.sessions) {
      callback(user, session);
    }
  }

  /**
   * 🧾 Converts the Map into a plain Object
   * Useful for JSON serialization, APIs, or debugging
   */
  toObject() {
    const obj = {};

    for (const [user, session] of this.sessions) {
      // use user.name as a readable key (Maps allow objects as keys, objects don’t)
      obj[user.name] = {
        role: user.role,
        ...session,
      };
    }

    return obj;
  }

  /**
   * 📦 Converts the Map to a JSON string
   */
  toJSON(pretty = false) {
    return JSON.stringify(this.toObject(), null, pretty ? 2 : 0);
  }

  clear() {
    this.sessions.clear();
    console.log("🧼 All sessions cleared");
  }
}

// ---------- Example Usage ----------

const user1 = { name: "Jake", role: "admin" };
const user2 = { name: "Anna", role: "editor" };

const sessionManager = new UserSessionManager();
sessionManager.addSession(user1, { token: "abc123" });
sessionManager.addSession(user2, { token: "xyz789" });

// Convert to plain object
const objView = sessionManager.toObject();
console.log("🧩 Object View:", objView);

// Convert to JSON (pretty-printed)
console.log("📜 JSON Output:\n", sessionManager.toJSON(true));
