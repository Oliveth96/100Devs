#import Libraries
from PyPDF2 import PdfFileWriter, PdfFileReader
import getpass

pdfWriter = PdfFileWriter()
pdf = PdfFileReader('C:\\Users\\HP\\Documents\\GitHub\\100Devs\\PYTHON-PROJECTS\\gettingStarted-withOneDrive.pdf')
for page_num in range(pdf.numPages):
    pdfWriter.addPage(pdf.getPage(page_num))
password=getpass.getpass(prompt='Please enter Password: ')
pdfWriter.encrypt(password)
with open('C:\\Users\\HP\\Documents\\GitHub\\100Devs\\PYTHON-PROJECTS\\gettingStarted-withOneDrive.pdf','wb') as a:
    pdfWriter.write(a)

print('Congrats, your  file is password protected !')