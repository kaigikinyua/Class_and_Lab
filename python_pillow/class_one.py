from PIL import Image,ImageDraw,ImageFont
import os
import time
def check_resolution(imagePath):
    with Image.open(imagePath) as im:
            print(f'{image} is of the resolution {im.size}')

def changeFileFormat(imagePath):
    with Image.open(imagePath) as im:
        x=imagePath.split('/')
        fileName=x[len(x)-1]
        fileNameMinExt=fileName.split('.')
        newFilename=fileNameMinExt[0]+".jpg"
        im.save(f'./Processed_Images/{newFilename}')

def drawLineOnImage(imagePath):
    with Image.open(imagePath) as im:
        pass

def drawSquareOnImage(imagePath):
    with Image.open(imagePath) as im:
        pass

def drawTextOnImage(imagePath,text):
    font=ImageFont.truetype("./NotoSansCJK-Bold.ttc",size=50)
    with Image.open(imagePath) as im:
        drawImage=ImageDraw.Draw(im)
        drawImage.text((100,100),text,font=font,fill=(100,100,180))
        im.save("./Processed_Images/test.png")

if __name__=="__main__":
    _initial_images_dir="./Initial_Images/"
    images_list=os.listdir(_initial_images_dir)
    for image in images_list:
        drawTextOnImage(_initial_images_dir+"chicken.png","Whaaaaa....\nHow you doin")
        #changeFileFormat(f'{_initial_images_dir}{image}')
        #check_resolution(f'{_initial_images_dir}{image}')