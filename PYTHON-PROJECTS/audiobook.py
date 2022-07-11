#import Libraries
import PyPDF2
import pyttsx3

myPdfReader = PyPDF2.PdfFileReader(open('C:\\Users\\HP\\Documents\\GitHub\\100Devs\\PYTHON-PROJECTS\\Ebelechukwu-Ndubuka.pdf','rb'))

speaker = pyttsx3.init()

for page_num in range(myPdfReader.numPages):
    text = myPdfReader.getPage(page_num).extractText()
    speaker.say(text)
    speaker.runAndWait()
speaker.stop()
