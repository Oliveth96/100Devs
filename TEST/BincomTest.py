import random
import pandas as pd
import numpy as np
import psycopg2


bincomeDressColors = {"monday": ["GREEN", "YELLOW", "GREEN", "BROWN", "BLUE", "PINK", "BLUE", "YELLOW", "ORANGE", "CREAM", "ORANGE", "RED", "WHITE", "BLUE",
								 "WHITE", "BLUE", "BLUE", "BLUE", "GREEN"],
					  "tuesday": ["ASH", "BROWN", "GREEN", "BROWN", "BLUE", "BLUE", "BLUE", "PINK", "PINK", "ORANGE", "ORANGE",
								  "RED", "WHITE", "BLUE", "WHITE", "WHITE", "BLUE", "BLUE", "BLUE"],
					  "wednesday": ["GREEN", "YELLOW", "GREEN", "BROWN", "BLUE", "PINK", "RED", "YELLOW", "ORANGE", "RED",
									"ORANGE", "RED", "BLUE", "BLUE", "WHITE", "BLUE", "BLUE", "WHITE", "WHITE"],
					 "thursday": ["BLUE", "BLUE", "GREEN", "WHITE", "BLUE", "BROWN", "PINK", "YELLOW", "ORANGE", "CREAM", "ORANGE", "RED",
								   "WHITE", "BLUE", "WHITE", "BLUE", "BLUE", "BLUE", "GREEN"],
					  "friday": ["GREEN", "WHITE", "GREEN", "BROWN", "BLUE", "BLUE", "BLACK", "WHITE", "ORANGE", "RED", "RED",
								"RED", "WHITE", "BLUE", "WHITE", "BLUE", "BLUE", "BLUE", "WHITE"] }



#Which color of shirt is the mean color?

for days, colors in bincomeDressColors.items():
	for color in colors:
		print("{} {}".format(color, days))
			#the mean color is blue

#Which color is mostly worn throughout the week?
df = pd.DataFrame(bincomeDressColors)
print(df.describe())
print(df.value_counts())
#the mostly worn color is blue

#Which color is the median?

median = list(bincomeDressColors.values())
print(df.sort_values(by=['monday'], ascending=True))
#The color of the median is Green


#BONUS Get the variance of the colors

print(df.var())

#BONUS if a colour is chosen at random, what is the probability that the color is red?
#Save the colours and their frequencies in postgresql database
DB_HOST = "olivethudagramdev.clzgrxfqt7ii.us-east-1.rds.amazonaws.com "
DB_NAME = "olivethudagram"
DB_USER = "olivethudagram"
DB_PASSWORD = " "

con = psycopg2.connect(dbname=DB_NAME, user=DB_USER, password=DB_PASSWORD, host=DB_HOST)

cur = con.cursor()

cur.execute("CREATE TABLE BINCOM COLOR CHART (id SERIAL PRIMARY KEYl, colors VARCHAR, frequency VARCHAR); ")

cur.execute("INSERT INTO BINCOM COLOR CHART (colours) VALUES(%s) ",("blue"));
cur.execute("INSERT INTO BINCOM COLOR CHART (frquency) VALUES(%d) ",(28))

con.commit()
cur.close()

con.close()

#BONUS write a recursive searching algorithm to search for a number entered by user in a list of numbers.

#print(np.random.randint(0, 10, 9))
def searchForNumber(listOfNumbers, key):
	list = []
	flag = False
	for i in range(len(listOfNumbers)):
		if key == listOfNumbers[i]:
			flag = True
			list.append(i)
	if flag == True:
		print("key element is found at index:")
		for i in list:
			print(i)

	else:
		print('key is not found')
listOfNumbers = [1, 2, 5, 7, 9, 8, 2, 6, 0]
key = int(input("enter the key element: "))
0
searchForNumber(listOfNumbers, key)
print(listOfNumbers)


#Write a program that generates random 4 digits number of 0s and 1s and convert the generated number to base 10.
   #generating random 4 digit number
def Rand(start, end, num):
	res = []

	for j in range(num):
		res.append(random.randint(start, end))

	return res
num = 4
start = 0
end = 1
random5 = Rand(start, end, num)
print(random5)


#converting to base 10


#Write a program to sum the first 50 fibonacci sequence.

def fib(n):
    a = 0
    b = 1
    print(a)
    print(b)

    for i in range(2, n):
        c = a + b
        a = b
        b = c
        print(c)

fib(50)




#groupby
#print(df.sort_values(by=['monday'], ascending=True))
