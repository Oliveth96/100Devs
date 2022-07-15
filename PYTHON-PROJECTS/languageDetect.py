"""
Module providing for language detection
"""

from langdetect import detect

text = input("Please enter any text in any language: ")

print(detect(text))
