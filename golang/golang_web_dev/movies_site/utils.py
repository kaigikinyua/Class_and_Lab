import math
class Colors:
    @staticmethod
    def hexToRgb(colorHex):
        if(len(colorHex)>6 or len(colorHex)<6):
            #Todo-> log error to the user interface and log file
            return (0,0,0)
        hex={"a":10,"b":11,"c":12,"d":13,"e":14,"f":15}
        red=colorHex[0:2]
        green=colorHex[2:4]
        blue=colorHex[4:6]
        colors=[red,green,blue]
        rgbColors=[]
        for color in colors:
            index=1
            colRgbVal=0
            for let in color:
                val=0
                if(let.lower() in hex):
                    val=int(hex[let.lower()])
                elif(let.isdigit()):
                    val=int(let)
                else:
                    #Todo-> log error to the user interface and log file
                    return [0,0,0]
                colRgbVal=colRgbVal+int(val*math.pow(16,index))
                index=index-1
            rgbColors.append(colRgbVal)
        return rgbColors

    @staticmethod
    def rgbToHex(colorRGB):
        hex={"10":"a","11":"b","12":"c","13":"d","14":"e","15":"f"}
        r,g,b=colorRGB
        colors=[r,g,b]
        colHex=""
        for col in colors:
            mod=col%16
            div=int(math.floor(col/16))
            if(str(mod) in hex):
                mod=hex[str(mod)]
            if(str(div) in hex):
                div=hex[str(div)]
            colHex=colHex+str(div)+str(mod)
        return colHex 

    @staticmethod
    def rgbToHSV(rgbColor):
        r,g,b=rgbColor
        nRed=r/255
        nGreen=g/255
        nBlue=b/255
        normalizedRGB=[nRed,nGreen,nBlue]
        xMax=max(normalizedRGB)
        xMin=min(normalizedRGB)
        chroma=xMax-xMin
        #calculating saturation
        hue=Colors.rgbToHue(rgbColor)
        saturation=0
        value=xMax
        if(value>0):
            saturation=chroma/xMax
        #calculating saturation
        return (hue,saturation,value)
    
    @staticmethod
    def rgbToHue(rgbColor):
        r,g,b=rgbColor
        nRed=r/255
        nGreen=g/255
        nBlue=b/255
        normalizedRGB=[nRed,nGreen,nBlue]
        xMax=max(normalizedRGB)
        xMin=min(normalizedRGB)
        chroma=xMax-xMin
        hue=0
        if(chroma==0):
            hue=0
        elif(xMax==nRed):
            segment=(nGreen-nBlue)/chroma
            shift=0/60
            if(segment<0):
                shift=360/60
            hue=segment+shift
        elif(xMax==nGreen):
            segment=(nBlue-nRed)/chroma
            shift=120/60
            hue=segment+shift
        elif(xMax==nBlue):
            segment=(nRed-nGreen)/chroma
            shift=240/60
            hue=segment+shift
        else:
            hue=0
        return hue*60

    @staticmethod
    def genHue(hsv,steps,numOfShades):
        pass

    @staticmethod
    def genSaturation(hsv,steps,numOfShades):
        pass

    @staticmethod
    def genValue(hsv,steps,numOfShades):
        pass



class ColorHarmonies:
    @staticmethod
    def analogous():
        pass
    @staticmethod
    def complimentary():
        pass
    @staticmethod
    def splitComplimentary():
        pass
    @staticmethod
    def triad():
        pass
    @staticmethod
    def monochromatic():
        pass


