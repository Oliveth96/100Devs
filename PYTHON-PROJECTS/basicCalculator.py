"""
A module creating Calculator in python
"""
firstOperand = input("Please enter First Operand(Any Numeric value)\n")

"""
converts entered value to int
"""
firstOperand = int(firstOperand)
"""
Prompts user to enter any number
"""
operator = input("Enter('+, -, *, /)\n")

secondOperand = input("Please enter second Operand(Any numeric value)\n")
secondOperand = int(secondOperand)

"""
Calculation the firstoperand with the secondoperand to get the result
"""

if (operator == '+'):
    Result = firstOperand + secondOperand
if (operator == '-'):
    Result = firstOperand - secondOperand
if (operator == '/'):
    Result = firstOperand / secondOperand
if (operator == '*'):
    Result = firstOperand * secondOperand
if (operator == '%'):
    Result = firstOperand % secondOperand
if (operator == '//'):
    Result = firstOperand // secondOperand
if (operator == '**'):
    Result = firstOperand ** secondOperand
print('The answer = ', Result)


"""
Module providing Lease common Multiples
"""

def leastCommonMultiple(a, b):
    if a > b:
        greater = a
    elif b > a:
        greater = b
    while(True):
        if ((greater % a == 0) and (greater % b == 0)):
            lcm = greater
            break
        greater = greater + 1
    return lcm
a = int(input("Please enter first number: "))
b = int(input("Please enter second number: "))
print(leastCommonMultiple(a, b))

"""
A Module that provides for conversion of Roman Numerals to Integers in python
"""


tallies = {'I': 1, 'v': 5, 'X': 10, 'L': 50,
           'C': 100, 'D': 500, 'M': 1000}

def convertRomanNumeralToDecimal(romanFigure):
    sum = 0
    for i in range(len(romanFigure) - 1):
        left = romanFigure[i]
        right = romanFigure[i + 1]
        if tallies[left] < tallies[right]:
            sum -= tallies[left]
        else:
            sum += tallies[left]
    sum += tallies[romanFigure[-1]]
    return sum
roman = input('Please enter Roman Numerals :')
result = convertRomanNumeralToDecimal(roman)
print(result)