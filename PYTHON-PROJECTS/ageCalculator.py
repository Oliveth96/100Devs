def calculateMyAge(y, m, d):
    import datetime
    today = datetime.datetime.now().date()
    dateOfBirth = datetime.date(y, m, d)
    age = int((today - dateOfBirth).days / 365.25)
    print(age)


calculateMyAge(1996, 4, 27)
