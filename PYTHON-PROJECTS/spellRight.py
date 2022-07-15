"""
Module providing for the correct spelling of words
"""

from textblob import TextBlob


def spellRight(string):
    li = list(string.split())
    return li


firstString = input("Please enter any word: ")
words = spellRight(firstString)
correctWord = []
for i in words:
    correctWord.append(TextBlob(i))

print("The Wrong word(s) : ", words)
print("the correct word(s) : ")
for i in correctWord:
    print(i.correct(), end=" ")
