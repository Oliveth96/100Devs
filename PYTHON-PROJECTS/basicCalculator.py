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
