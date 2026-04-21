export const storage = {
  setMood(mood: string): void {
    localStorage.setItem('nova-mood', mood);
    document.documentElement.setAttribute('data-theme', mood);
  },
  getMood(): string {
    return localStorage.getItem('nova-mood') || 'gold';
  },
  init(): string {
    const mood = this.getMood();
    document.documentElement.setAttribute('data-theme', mood);
    return mood;
  }
};
