module.exports = {
  '*.{vue,js}': ['prettier --write', 'vue-cli-service lint --max-warnings 0', 'git add'],
  '*.{scss,json}': ['prettier --write', 'git add'],
}
