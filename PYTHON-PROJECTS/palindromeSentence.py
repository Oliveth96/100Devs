def palindromeWords(sentence):
    for i in (",.'?/><}{{}}'"):
        sentence = sentence.replace(i, "")
    palindromeWords = []
    words = sentence.split(" ")
    for word in words:
        word = word.lower()
        if word == word[::-1]:
            palindromeWords.append(word)
    return palindromeWords

sentence = input("Please enter any sentence : ")
print(palindromeWords(sentence))
