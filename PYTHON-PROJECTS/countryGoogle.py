"""
Module providing information of different countries
"""
from countryinfo import CountryInfo

count = input("Please enter your country: ")
country = CountryInfo(count)
capital = country.capital()
currency = country.currencies()
language = country.languages()
border = country.borders()
alias = country.alt_spellings()

print("The Capital is : ", capital)
print("The Currency is : ", currency)
print("The Language is : ", language)
print("The Borders are : ", border)
print("Other names are : ", alias)