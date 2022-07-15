"""
A module that allows users download videos from youtube.
"""


import pytube
"""
Requests the urls of the Youtube video
"""
url = input("Please enter the video url/link : ")

"""
Set a storage path for the video
"""
path = 'C:\\Users\\HP\\Videos\\ytDownloads'

pytube.YouTube(url).streams.get_highest_resolution().download(path)
