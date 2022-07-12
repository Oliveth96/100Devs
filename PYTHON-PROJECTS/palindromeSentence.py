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





"""
Module that provides palindrome checks on strings
"""


def palindrome(string):
    """
    A function that checks if the string is a palindrome.
    """
    revereseString = string[::-1]
    if string == revereseString:
        print("This Word is a palindrome")
    else:
        print('This Word is not a palindrome')

if __name__ == '__main__':
    messagePrompt = str(input("Please enter a word to check if it is a palindrome: "))
    palindrome(messagePrompt)
