Height = float(input("Please enter your height in centimeters: "))
Weight = float(input('Please enter your weight in KG: '))
Height = Height/100
BMI = Weight/(Height * Height)
print ("Your Body Mass Index is: ", BMI)
if (BMI > 0):
    if (BMI < 18.5):
        print("ooops, you are underweight")
    elif ((BMI >= 18.5) and (BMI < 24.9)):
        print("Yaaaaay, Your are BMI is normal. Congrats!")
    elif ((BMI >= 25.0) and (BMI <= 29.9)):
        print("You are overweight. Don't fret, just exercise more often")
    else:
        print("You are Obese. \n"
              "Prescription: Please start a daily exercise routine")
else:("Please enter valid details")