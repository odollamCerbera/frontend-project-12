import leoProfanity from 'leo-profanity'

const russianWords = leoProfanity.getDictionary('ru')
leoProfanity.add(russianWords)

export default leoProfanity
