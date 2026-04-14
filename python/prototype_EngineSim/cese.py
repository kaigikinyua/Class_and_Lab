"""
    C.E.S.E (Combustion Engine Sound Editor)
"""
#external libraries
from pydub import AudioSegment
from pydub.effects import speedup
from pydub.playback import play

#src libraries and modules
from utils import Settings,Log

"""
    crankshaft rotates from 0-720 deg in a 4stroke engine
    for a 2 stroke engine the crank rotates from 0-360
"""


class Piston:
    #used by 4 stroke engines to move their positions
    @staticmethod
    def fourStrokePiston(currStage,pistonOffSet,crankRot):
        #001-180 Intake
        #181-360 Compression 
        #361-540 Combustion 
        #541-720 Exhaust
        stages={"intake":180,"compression":360,"combustion":540,"exhaust":720}
        pistonStage=None
        pistonPos=float(crankRot+pistonOffSet+stages[currStage])
        #ensure piston does not go above the degrees needed for the crank to make all cylinders fire
        #reason as to why while loop is used instead of if
        #the pistionOffSet can go upto 720 deg when Pistion.calcMapping() 
        #is used thus when 
        # pistionPos=crankRot+pistionOffset+stage['stageId'] goes over 720*2
        #if you use if it only subtracts 720 deg which makes the result to be above 720 thus the if elif jumps to ignitionoff
        while pistonPos>720:
            pistonPos=pistonPos-720

        if(pistonPos>0 and pistonPos<=180):
            pistonStage="intake"
        elif(pistonPos>180 and pistonPos<=360):
            pistonStage="compression"
        elif(pistonPos>360 and pistonPos<=540):
            pistonStage="combustion"
        elif(pistonPos>540 and pistonPos<=720):
            pistonStage="exhaust"
        else:
            print(f"Ignition off\nCrank at {crankRot}")
            pistonStage="ignitionoff"
        return pistonStage

    @staticmethod
    def twoStrokePiston(currStage,pistonOffSet,crankRot):
        #001-180 Intake and exhaust
        #181-360 Compression_and_combustion
        stages={"intake_and_exhaust":180,"compression_and_combustion":360}
        pistonStage=None
        pistonPos=float(crankRot+pistonOffSet+stages[currStage])
        #ensure piston does not go above the degrees needed for the crank to make all cylinders fire
        while pistonPos>=360:
            pistonPos=pistonPos-360

        if(pistonPos>=0 and pistonPos<=180):
            pistonStage="intake_and_exhaust"
        elif(pistonPos>=181 and pistonPos<=360):
            pistonStage="compression_and_combustion"
        else:
            pistonStage="ignitionoff"
        return pistonStage
    
    @staticmethod
    def cutOutFuel():
        return "cutOutFuel"
    
    @staticmethod
    def calcMapping(engineType,cylinders):
        offSet=0
        pistonMapping=[]
        stages=[]
        if(engineType=="4stroke"):
            stages=["intake","compression","combustion","exhaust"]
            offSet=720/cylinders
        elif(engineType=="2stroke"):
            stages=["intake_and_exhaust","compression_and_combustion"]
            offSet=360/cylinders
        for i in range(cylinders):
            s=i%len(stages)
            pistonMapping.append({"pistonId":i,"offSet":offSet*(i+1),"stage":stages[s]})
        return pistonMapping

class EngineControls:
    ignition=True
    fuelPreasure=0


class Engine:
    engineType=""
    ignition=True
    crankRot={"currRot":0,"maxRot":0,"offSetBy":30}
    revs={"maxRevs":0,"currRevs":0}
    clutch={"load":0,"pressure":0}
    torque={"currTorque":0,"maxTorque":0}
    pistons=None
    cylinders=None

    def __init__(self,engineType,crankRot,revs,clutch,torque,cylinders):
        self.engineType=engineType
        self.crankRot=crankRot
        self.revs=revs
        self.clutch=clutch
        self.torque=torque
        self.cylinders=cylinders
        self.pistons=Piston.calcMapping(engineType,cylinders)

    #rotates the intances self.currCrankRot to a maximum of the self.maxCrankRot
    #rotates the pistions by calling the self.rotatePistions()
    def rotateCrank(self):
        #greater self.currCrankRot is reset by (self.currCrankRot+degs)-maxCrankRot
        if(self.crankRot["currRot"]+self.crankRot["offSetBy"] >= self.crankRot["maxRot"]):
            self.crankRot["currRot"]=(self.crankRot["currRot"]+self.crankRot["offSetBy"])-self.crankRot["maxRot"]
        else:
            self.crankRot["currRot"]=self.crankRot["currRot"]+self.crankRot["offSetBy"]
        self.rotatePistons()

    #adds fuel to the EngineSettings.fuePressure
    def addFuel(self,fuelPressure):
        if(fuelPressure>0):
            EngineControls.fuelPressure=fuelPressure
        else:
            EngineControls.fuelPressure=abs(fuelPressure)
            Log.log("Fuel pressure cannot be negative","warning")

    #moves a single array item in the self.pistions
    def movePistonStage(self,pistonStage,pistonOffSet):
        if(EngineControls.fuelPreasure>0):
            if(self.engineType=="4stroke"):
                return Piston.fourStrokePiston(pistonStage,pistonOffSet,self.crankRot["currRot"])
            elif(self.engineType=="2stroke"):
                return Piston.twoStrokePiston(pistonStage,pistonOffSet,self.crankRot["currRot"])
        else:
            return Piston.cutOutFuel()
    
    #moves all the pistons in the self.pistons variable by calling the self.movePistionStage
    def rotatePistons(self):
        for i in range(len(self.pistons)):
            self.pistons[i]["stage"]=self.movePistonStage(self.pistons[i]["stage"],self.pistons[i]["offSet"])
    
    def getMapping(self):
        return self.pistons

#static class that manages the sound and sound effects to the pistons
class Sound:
    fourStrokeStages={
            "intake":"",
            "compression":"",
            "combustion":"",
            "exhaust":"",
            "ignitionoff":""
        }
    twoSrokeStages={
        "intake_and_exhaust":"",
        "compression_and_combustion ":"",
        "ignitionoff":""
    }

    #used to add the sound made by the piston at various stages to the final audio file
    @staticmethod
    def stageSound(engineType,pistonStroke):
        #engine can only be either a 4 or 2 stroke engine
        if(engineType=="4stroke"):
            return Sound.fourStrokeStages[pistonStroke]
        elif(engineType=="2stroke"):
            pass
    
    #adds reverb to the piston stage sounds
    @staticmethod
    def addReverb(sound,delay_ms=50, attenuations=[3, 6, 9]):
        combined = sound
        for atten in attenuations:
            # Shift the sound by delay_ms and reduce volume
            echo = (sound - atten)[delay_ms:]
            combined = combined.overlay(echo, position=delay_ms)
        return combined
    
    @staticmethod
    def change_pitch(sound, speed=1.0):
        # Manually override the frame_rate
        new_sample_rate = int(sound.frame_rate *(2 ** speed))
        # Spawn new audio with altered frame rate
        new_sound = sound._spawn(sound.raw_data, overrides={
            "frame_rate": new_sample_rate
        })

        # Convert back to standard frame rate so it plays at the new speed/pitch
        return new_sound.set_frame_rate(sound.frame_rate)
    
    @staticmethod
    def speedUpSound(audioClip,speedUp):
        return speedup(audioClip,playback_speed=speedUp)