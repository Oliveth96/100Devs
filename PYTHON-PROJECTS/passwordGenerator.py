import secrets
import string
import random
'''
Generates a ten-character alphanumeric password
'''
alphabet = string.ascii_letters + string.digits
password = "".join(secrets.choice(alphabet) for i in range(10))
print(password)

'''
Generates a 10 character alpha-numeric password with at least
1 lowercase character, at least 1 upper case character
and at least three digits
'''
anotherAlphabet = string.ascii_letters + string.digits
while True:
    aPassword = ''.join(secrets.choice(anotherAlphabet) for i in range(20))
    if (any(c.islower() for c in aPassword) and any(c.isupper()
    for c in aPassword) and sum(c.isdigit() for c in aPassword) >= 3):
        print(aPassword)
        break

"""
Module providing any length of password
"""


passlen = int(input("Please enter length of password: "))

letters = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()?"

P = "".join(random.sample(letters, passlen ))
print(P)