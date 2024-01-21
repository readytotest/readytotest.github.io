describe('Visual Testing of Music Note Emoji', () => {
  it('should compare screenshot from a given element', () => {
    cy.visit('https://readytotest.github.io')
    cy.get('span[data-cy="music-note"]').compareSnapshot('music-note-emoji')
  })
})