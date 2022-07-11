import psutil

#A function that returns time in hours, minutes and seconds
def returnTime(seconds):
    minutes, seconds = divmod(seconds, 60)
    hours, minutes = divmod(minutes, 60)
    return "%d:%02d:%02d" % (hours, minutes, seconds)

#returns a tuple
battery = psutil.sensors_battery()

print("Battery percentage : ", battery.percent)
print("Power plugged in : ", battery.power_plugged)

#converting seconds to hh:mm:ss
print('Your battery duration is : ', returnTime(battery.secsleft))