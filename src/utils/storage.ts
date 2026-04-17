export const storage = {
  setMood(mood: string) {
    localStorage.setItem('nova-mood', mood);
    document.documentElement.setAttribute('data-theme', mood);
  },
  getMood(): string {
    return localStorage.getItem('nova-mood') || 'gold';
  },
  init() {
    const mood = this.getMood();
    document.documentElement.setAttribute('data-theme', mood);
    return mood;
  }
}
