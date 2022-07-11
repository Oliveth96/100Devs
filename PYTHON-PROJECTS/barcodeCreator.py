import pyqrcode
import png
link = "https://d1uir28avf8ke2.cloudfront.net/"
qr_code = pyqrcode.create(link)
qr_code.png("WebsiteBarcode.png", scale=5)