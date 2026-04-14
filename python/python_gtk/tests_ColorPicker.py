import unittest
from ColorPicker import GlobalData,Color,ColorPallete,FileManager

class FileManagerTests(unittest.TestCase):
    def test_checkValidFile(self):
        f=FileManager("./devMode/ColorsJsonData/testFile.json")
        fN=FileManager("./data/dfalksjkl")
        self.assertEqual(f.checkValidFile(),True)
        self.assertEqual(fN.checkValidFile(),False)

    def test_writeToFile(self):
        colors={"colors":[{"pallet1":['1,2,3','100,233,56']}]}
        f=FileManager("./devMode/ColorsJsonData/writeTest.json")
        self.assertEqual(f.writeToFile(colors),True) 

    def test_readFile(self):
        f=FileManager("./devMode/ColorsJsonData/testFile.json")
        data=f.readFile()
        self.assertNotEqual(data,None)

class GloabalDataTests(unittest.TestCase):
    def test_loadColors(self):
        GlobalData.loadColors()
        self.assertNotEqual(GlobalData.colorPallete,{})

    def test_envDevModeChange(self):
        self.assertEqual(GlobalData.debug,True)
        GlobalData.debug=False
        self.assertEqual(GlobalData.debug,False)
        GlobalData.debug=True

class TestColor(unittest.TestCase):
    def test_delta(self):
        v=10
        c=Color("1,2,3")
        deltaPlus=c.delta('inc',v)
        self.assertEqual(v+1,deltaPlus)
        deltaMinus=c.delta('dec',v)
        self.assertEqual(v-1,deltaMinus)

    def test_colorDictToString(self):
        cDict={"h":1,"s":2,"v":3}
        cToString=Color.colorDictToString(cDict)
        self.assertEqual("1,2,3",cToString)

    def test_increaseHue(self):
        ic=Color("1,2,3")
        dc=Color("1,2,3")
        incHue=Color.colorDictToString(ic.deltaHue('inc'))
        decHue=Color.colorDictToString(dc.deltaHue('dec'))
        self.assertEqual(incHue,"2,2,3")
        self.assertEqual(decHue,"0,2,3")

    def test_increaseSaturation(self):
        ic=Color("1,2,3")
        dc=Color("1,2,3")
        incSat=Color.colorDictToString(ic.deltaSaturation('inc'))
        decSat=Color.colorDictToString(dc.deltaSaturation('dec'))
        self.assertEqual(incSat,"1,3,3")
        self.assertEqual(decSat,"1,1,3")

    def test_increaseValue(self):
        ic=Color("1,2,3")
        dc=Color("1,2,3")
        incValue=Color.colorDictToString(ic.deltaValue('inc'))
        decValue=Color.colorDictToString(dc.deltaValue('dec'))
        self.assertEqual(incValue,"1,2,4")
        self.assertEqual(decValue,"1,2,2")

class ColorPalleteTests(unittest.TestCase):
    pass

if __name__=="__main__":
    unittest.main()