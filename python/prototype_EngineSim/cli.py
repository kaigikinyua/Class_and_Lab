from cese import Piston,Engine,EngineControls,Sound


def printPistons(pistons):
    for p in pistons:
        print(p)
    print("\n")

if __name__=="__main__":
    EngineControls.fuelPreasure=1
    cylinders=8
    crankRot={"currRot":0,"maxRot":720,"offSetBy":720/8}
    revs={"maxRevs":7000,"currRevs":0}
    clutch={"load":0,"pressure":0}
    torque={"currTorque":0,"maxTorque":300}
    fourStroke=Engine("4stroke",crankRot,revs,clutch,torque,cylinders)
    
    i=0
    while i<(720*3):
        fourStroke.rotateCrank()
        printPistons(fourStroke.getMapping())
        i+=720/8