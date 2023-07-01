const saveCurrentLevel = (): void => {
  let unloadLevel;
  const levels = document.querySelectorAll('.level-item');
  levels.forEach((level, idx) => {
    if (level.classList.contains('level-item__selected')) {
      unloadLevel = idx.toString();
    }
  });
  if (unloadLevel) {
    localStorage.setItem('currentLevel', unloadLevel);
  }
};

export default saveCurrentLevel;
