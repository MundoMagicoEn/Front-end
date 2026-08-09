const SESSION_KEY = 'english_quest_progress';

export const saveProgress = (state) => {
  try {
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(state));
  } catch (error) {
    console.error("Error saving to sessionStorage:", error);
  }
};

export const loadProgress = () => {
  try {
    const saved = sessionStorage.getItem(SESSION_KEY);
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (error) {
    console.error("Error loading from sessionStorage:", error);
  }
  return null;
};

export const clearProgress = () => {
  try {
    sessionStorage.removeItem(SESSION_KEY);
  } catch (error) {
    console.error("Error clearing sessionStorage:", error);
  }
};
